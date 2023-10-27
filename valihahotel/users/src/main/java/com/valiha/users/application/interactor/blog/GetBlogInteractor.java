package com.valiha.users.application.interactor.blog;

import com.valiha.users.application.dto.blog.BlogResponseDto;
import com.valiha.users.application.presenter.GenericPresenter;
import com.valiha.users.application.repository.GenericRepository;
import com.valiha.users.application.useCase.blog.FindOneBlogUseCase;
import com.valiha.users.core.constants.BlogValidator;
import com.valiha.users.core.entities.model.Blog;
import java.util.HashMap;
import java.util.Map;

public class GetBlogInteractor implements FindOneBlogUseCase {

  private final GenericRepository<Blog> blogRepository;
  private final GenericPresenter<BlogResponseDto> blogPresenter;

  public GetBlogInteractor(
    GenericRepository<Blog> blogRepository,
    GenericPresenter<BlogResponseDto> blogPresenter
  ) {
    this.blogRepository = blogRepository;
    this.blogPresenter = blogPresenter;
  }

  @Override
  public BlogResponseDto execute(String id) {
    Map<String, String> errors = new HashMap<String, String>();
    Blog blog = blogRepository.findOneById(id);

    if (blog == null) {
      errors.put(BlogValidator.KEY_ID, BlogValidator.BLOG_NOT_FOUND_ERROR);
      return blogPresenter.prepareResourceNotFoundView(
        BlogValidator.BLOG_NOT_FOUND_ERROR,
        errors
      );
    }

    return this.blogPresenter.prepareSuccessView(BlogResponseDto.from(blog));
  }
}
