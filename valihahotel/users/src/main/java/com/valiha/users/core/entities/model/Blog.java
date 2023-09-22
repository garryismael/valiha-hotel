package com.valiha.users.core.entities.model;

import com.valiha.users.core.constants.BlogValidator;
import com.valiha.users.core.interfaces.models.IBlog;
import com.valiha.users.core.interfaces.validator.InputValidator;
import java.util.HashMap;
import java.util.Map;

public class Blog implements IBlog, InputValidator {

  private String id;
  private String title;
  private String text;
  private User user;
  private String image;

  @Override
  public String getId() {
    return id;
  }

  @Override
  public String getTitle() {
    return title;
  }

  @Override
  public String getText() {
    return text;
  }

  @Override
  public User getUser() {
    return user;
  }

  @Override
  public String getImage() {
    return image;
  }

  @Override
  public boolean titleIsValid() {
    return this.title != null && this.title.trim().length() > 5;
  }

  @Override
  public boolean textIsValid() {
    return this.text != null && this.text.trim().length() > 10;
  }

  public class Builder {

    private final Blog blog;

    public Builder(Blog blog) {
      this.blog = blog;
    }

    public Builder id(String value) {
      id = value;
      return this;
    }

    public Builder title(String value) {
      title = value;
      return this;
    }

    public Builder text(String value) {
      text = value;
      return this;
    }

    public Builder user(User value) {
      user = value;
      return this;
    }

    public Builder image(String value) {
      image = value;
      return this;
    }

    public Blog build() {
      return this.blog;
    }
  }

  public static Builder builder() {
    Blog blog = new Blog();
    return blog.new Builder(blog);
  }

  @Override
  public Map<String, String> validate() {
    Map<String, String> errors = new HashMap<>();

    if (!titleIsValid()) {
      errors.put(BlogValidator.KEY_TITLE, BlogValidator.INVALID_TITLE_ERROR);
    }

    if (!textIsValid()) {
      errors.put(BlogValidator.KEY_TEXT, BlogValidator.INVALID_TEXT_ERROR);
    }

    return errors;
  }
}
