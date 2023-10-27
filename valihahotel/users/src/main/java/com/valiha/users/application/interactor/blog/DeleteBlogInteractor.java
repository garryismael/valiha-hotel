package com.valiha.users.application.interactor.blog;

import com.valiha.users.application.dto.blog.BlogResponseDto;
import com.valiha.users.application.presenter.GenericPresenter;
import com.valiha.users.application.repository.GenericRepository;
import com.valiha.users.application.useCase.blog.DeleteBlogUseCase;
import com.valiha.users.core.constants.BlogValidator;
import com.valiha.users.core.entities.model.Blog;
import java.util.HashMap;
import java.util.Map;

public class DeleteBlogInteractor implements DeleteBlogUseCase {

  private final GenericRepository<Blog> blogRepository;
  private final GenericPresenter<BlogResponseDto> blogPresenter;

  public DeleteBlogInteractor(
    GenericRepository<Blog> blogRepository,
    GenericPresenter<BlogResponseDto> blogPresenter
  ) {
    this.blogRepository = blogRepository;
    this.blogPresenter = blogPresenter;
  }

  @Override
  public void execute(String id) {
    Map<String, String> errors = new HashMap<String, String>();
    Blog blog = blogRepository.findOneById(id);
    if (blog == null) {
      errors.put(BlogValidator.KEY_ID, BlogValidator.BLOG_NOT_FOUND_ERROR);
      blogPresenter.prepareResourceNotFoundView(
        BlogValidator.BLOG_NOT_FOUND_ERROR,
        errors
      );
    }
    this.blogRepository.deleteById(id);
  }
}
