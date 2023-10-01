package com.valiha.users.application.interactor.blog;

import com.valiha.users.application.dto.blog.BlogRequestDto;
import com.valiha.users.application.dto.blog.BlogResponseDto;
import com.valiha.users.application.presenter.GenericPresenter;
import com.valiha.users.application.repository.GenericRepository;
import com.valiha.users.application.repository.UserRepository;
import com.valiha.users.application.service.AuthService;
import com.valiha.users.application.service.StorageService;
import com.valiha.users.application.useCase.blog.CreateBlogUseCase;
import com.valiha.users.core.constants.BlogValidator;
import com.valiha.users.core.constants.UserValidator;
import com.valiha.users.core.entities.model.Blog;
import com.valiha.users.core.entities.model.User;
import com.valiha.users.core.interfaces.factory.BlogFactory;
import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

public class CreateBlogInteractor implements CreateBlogUseCase {

  private final GenericRepository<Blog> blogRepository;
  private final StorageService storageService;
  private final BlogFactory blogFactory;
  private final GenericPresenter<BlogResponseDto> blogPresenter;
  private final AuthService authService;

  public CreateBlogInteractor(
    GenericRepository<Blog> blogRepository,
    UserRepository userRepository,
    StorageService storageService,
    BlogFactory blogFactory,
    GenericPresenter<BlogResponseDto> blogPresenter,
    AuthService authService
  ) {
    this.blogRepository = blogRepository;
    this.storageService = storageService;
    this.blogFactory = blogFactory;
    this.blogPresenter = blogPresenter;
    this.authService = authService;
  }

  @Override
  public BlogResponseDto execute(BlogRequestDto requestDto, File file) {
    Map<String, String> errors = new HashMap<>();
    String image = null;

    User user = authService.getUser();
    if (user == null) {
      errors.put(UserValidator.KEY_ID, UserValidator.USER_NOT_FOUND_ERROR);
    }

    try {
      image = this.storageService.upload(file, "blogs");
    } catch (IOException exception) {
      errors.put(BlogValidator.KEY_IMAGE, BlogValidator.UPLOAD_ERROR);
    }

    Blog blog = blogFactory.create(
      null,
      requestDto.getTitle(),
      requestDto.getText(),
      image,
      user
    );

    errors.putAll(blog.validate());

    if (!errors.isEmpty()) {
      return blogPresenter.prepareInvalidDataView(
        BlogValidator.INVALID_DATA_MESSAGE,
        errors
      );
    }

    blog = this.blogRepository.save(blog);

    return blogPresenter.prepareSuccessView(BlogResponseDto.from(blog));
  }
}
