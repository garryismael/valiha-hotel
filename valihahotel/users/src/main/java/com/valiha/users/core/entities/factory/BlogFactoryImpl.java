package com.valiha.users.core.entities.factory;

import com.valiha.users.core.entities.model.Blog;
import com.valiha.users.core.entities.model.User;
import com.valiha.users.core.interfaces.factory.BlogFactory;

public class BlogFactoryImpl implements BlogFactory {

  @Override
  public Blog create(
    String id,
    String title,
    String text,
    String image,
    User user
  ) {
    return Blog
      .builder()
      .id(id)
      .title(title)
      .text(text)
      .image(image)
      .user(user)
      .build();
  }
}
