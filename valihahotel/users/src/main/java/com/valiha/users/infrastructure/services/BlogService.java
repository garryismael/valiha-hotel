package com.valiha.users.infrastructure.services;

import com.valiha.users.application.dto.blog.BlogRequestDto;
import com.valiha.users.application.dto.blog.BlogResponseDto;
import com.valiha.users.application.service.StorageService;
import com.valiha.users.application.useCase.blog.CreateBlogUseCase;
import com.valiha.users.application.useCase.blog.EditBlogUseCase;
import java.io.File;
import java.io.IOException;
import java.nio.file.Path;
import java.security.Principal;
import org.springframework.http.codec.multipart.FilePart;
import org.springframework.web.bind.annotation.RequestPart;
import reactor.core.publisher.Mono;

public class BlogService {

  private final CreateBlogUseCase createUseCase;
  private final EditBlogUseCase editUseCase;

  public BlogService(
    CreateBlogUseCase createUseCase,
    EditBlogUseCase editUseCase,
    StorageService storageService
  ) {
    this.createUseCase = createUseCase;
    this.editUseCase = editUseCase;
  }

  public Mono<BlogResponseDto> createBlog(
    BlogRequestDto requestDto,
    @RequestPart Mono<FilePart> filePartMono,
    Principal principal
  ) {
    return filePartMono
      .flatMap(this::convertFilePartToFile)
      .flatMap(file ->
        Mono.just(createUseCase.execute(requestDto, file, principal.getName()))
      );
  }

  public Mono<BlogResponseDto> editBlog(
    String id,
    BlogRequestDto requestDto,
    @RequestPart Mono<FilePart> filePartMono
  ) {
    return filePartMono
      .flatMap(this::convertFilePartToFile)
      .flatMap(file -> Mono.just(editUseCase.execute(id, requestDto, file)))
      .switchIfEmpty(Mono.just(editUseCase.execute(id, requestDto, null)));
  }

  private Mono<File> convertFilePartToFile(FilePart filePart) {
    try {
      // Create a temporary file
      File tempFile = File.createTempFile("upload-", "-" + filePart.filename());

      // Copy the content of the FilePart to the temporary file
      Path tempFilePath = tempFile.toPath();
      return filePart.transferTo(tempFilePath).thenReturn(tempFile);
    } catch (IOException e) {
      return Mono.error(e);
    }
  }
}
