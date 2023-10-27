package com.valiha.users.infrastructure.services;

import com.valiha.users.application.dto.blog.BlogRequestDto;
import com.valiha.users.application.dto.blog.BlogResponseDto;
import com.valiha.users.application.useCase.blog.CreateBlogUseCase;
import com.valiha.users.application.useCase.blog.EditBlogUseCase;
import lombok.AllArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

@AllArgsConstructor
public class BlogService {

  private final CreateBlogUseCase createUseCase;
  private final EditBlogUseCase editUseCase;

  public BlogResponseDto create(
    BlogRequestDto requestDto,
    MultipartFile multipartFile
  ) {
    return createUseCase.execute(
      requestDto,
      StorageServiceImpl.convertToFile(multipartFile)
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
        : StorageServiceImpl.convertToFile(multipartFile)
    );
  }
}
