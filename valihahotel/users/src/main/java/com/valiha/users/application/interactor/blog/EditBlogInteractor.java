package com.valiha.users.application.interactor.blog;

import com.valiha.users.application.dto.blog.BlogRequestDto;
import com.valiha.users.application.dto.blog.BlogResponseDto;
import com.valiha.users.application.presenter.GenericPresenter;
import com.valiha.users.application.repository.GenericRepository;
import com.valiha.users.application.service.StorageService;
import com.valiha.users.application.useCase.blog.EditBlogUseCase;
import com.valiha.users.core.constants.BlogValidator;
import com.valiha.users.core.entities.model.Blog;
import com.valiha.users.core.interfaces.factory.BlogFactory;
import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

public class EditBlogInteractor implements EditBlogUseCase {

  private final GenericRepository<Blog> blogRepository;
  private final GenericPresenter<BlogResponseDto> blogPresenter;
  private final BlogFactory blogFactory;
  private final StorageService storageService;

  public EditBlogInteractor(
    GenericRepository<Blog> blogRepository,
    GenericPresenter<BlogResponseDto> blogPresenter,
    BlogFactory blogFactory,
    StorageService storageService
  ) {
    this.blogRepository = blogRepository;
    this.blogPresenter = blogPresenter;
    this.blogFactory = blogFactory;
    this.storageService = storageService;
  }

  @Override
  public BlogResponseDto execute(
    String id,
    BlogRequestDto requestDto,
    File file
  ) {
    Map<String, String> errors = new HashMap<String, String>();
    String image = null;
    Blog blog = blogRepository.findOneById(id);

    if (blog == null) {
      errors.put(BlogValidator.KEY_ID, BlogValidator.BLOG_NOT_FOUND_ERROR);
      return blogPresenter.prepareResourceNotFoundView(
        BlogValidator.KEY_ID,
        errors
      );
    } else {
      image = blog.getImage();
    }

    if (file != null) {
      try {
        image = this.storageService.upload(file, "blogs");
      } catch (IOException exception) {
        errors.put(BlogValidator.KEY_IMAGE, BlogValidator.UPLOAD_ERROR);
      }
    }

    blog =
      blogFactory.create(
        id,
        requestDto.getTitle(),
        requestDto.getText(),
        image,
        blog.getUser()
      );

    errors.putAll(blog.validate());
    if (!errors.isEmpty()) {
      return blogPresenter.prepareInvalidDataView(
        BlogValidator.INVALID_DATA_MESSAGE,
        errors
      );
    }

    blog = this.blogRepository.update(id, blog);

    return this.blogPresenter.prepareSuccessView(BlogResponseDto.from(blog));
  }
}
