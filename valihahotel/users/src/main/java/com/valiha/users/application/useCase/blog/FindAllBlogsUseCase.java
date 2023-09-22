package com.valiha.users.application.useCase.blog;

import com.valiha.users.application.dto.blog.BlogResponseDto;
import java.util.List;

public interface FindAllBlogsUseCase {
  List<BlogResponseDto> execute();
}
