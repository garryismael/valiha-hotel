package com.valiha.users.application.useCase.blog;

import com.valiha.users.application.dto.blog.BlogRequestDto;
import com.valiha.users.application.dto.blog.BlogResponseDto;
import java.io.File;

public interface CreateBlogUseCase {
  BlogResponseDto execute(BlogRequestDto requestDto, File image);
}
