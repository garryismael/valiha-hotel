package com.valiha.users.core.interfaces.factory;

import com.valiha.users.core.entities.model.Blog;
import com.valiha.users.core.entities.model.User;

public interface BlogFactory {
  Blog create(String id, String title, String text, String image, User user);
}
