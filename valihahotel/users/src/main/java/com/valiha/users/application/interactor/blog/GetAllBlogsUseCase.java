package com.valiha.users.application.interactor.blog;

import com.valiha.users.application.dto.blog.BlogResponseDto;
import com.valiha.users.application.presenter.GenericPresenter;
import com.valiha.users.application.repository.GenericRepository;
import com.valiha.users.application.useCase.blog.FindAllBlogsUseCase;
import com.valiha.users.core.entities.model.Blog;
import java.util.List;

public class GetAllBlogsUseCase implements FindAllBlogsUseCase {

  private final GenericRepository<Blog> blogRepository;
  private final GenericPresenter<BlogResponseDto> blogPresenter;

  public GetAllBlogsUseCase(
    GenericRepository<Blog> blogRepository,
    GenericPresenter<BlogResponseDto> blogPresenter
  ) {
    this.blogRepository = blogRepository;
    this.blogPresenter = blogPresenter;
  }

  @Override
  public List<BlogResponseDto> execute() {
    List<Blog> blogs = this.blogRepository.findAll();
    return this.blogPresenter.prepareSuccessView(BlogResponseDto.from(blogs));
  }
}
