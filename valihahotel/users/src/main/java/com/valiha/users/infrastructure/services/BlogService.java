package com.valiha.users.infrastructure.services;

import com.valiha.users.application.dto.blog.BlogRequestDto;
import com.valiha.users.application.dto.blog.BlogResponseDto;
import com.valiha.users.application.useCase.blog.CreateBlogUseCase;
import com.valiha.users.application.useCase.blog.EditBlogUseCase;
import java.io.File;
import java.io.IOException;
import java.nio.file.Path;
import java.security.Principal;
import org.springframework.web.multipart.MultipartFile;

public class BlogService {

  private final CreateBlogUseCase createUseCase;
  private final EditBlogUseCase editUseCase;

  public BlogService(
    CreateBlogUseCase createUseCase,
    EditBlogUseCase editUseCase
  ) {
    this.createUseCase = createUseCase;
    this.editUseCase = editUseCase;
  }

  public BlogResponseDto create(
    BlogRequestDto requestDto,
    MultipartFile multipartFile,
    Principal principal
  ) {
    return createUseCase.execute(
      requestDto,
      convertFilePartToFile(multipartFile),
      principal.getName()
    );
  }

  public BlogResponseDto edit(
    String id,
    BlogRequestDto requestDto,
    MultipartFile multipartFile
  ) {
    return editUseCase.execute(
      id,
      requestDto,
      multipartFile == null || multipartFile.isEmpty()
        ? null
        : convertFilePartToFile(multipartFile)
    );
  }

  private File convertFilePartToFile(MultipartFile multipartFile) {
    try {
      // Create a temporary file
      File tempFile = File.createTempFile(
        "upload-",
        "-" + multipartFile.getOriginalFilename()
      );

      // Copy the content of the FilePart to the temporary file
      Path tempFilePath = tempFile.toPath();
      multipartFile.transferTo(tempFilePath);
      return tempFile;
    } catch (IOException e) {
      return null;
    }
  }
}
