package com.valiha.users.application.useCase.blog;

import com.valiha.users.application.dto.blog.BlogResponseDto;

public interface FindOneBlogUseCase {
  BlogResponseDto execute(String id);
}
