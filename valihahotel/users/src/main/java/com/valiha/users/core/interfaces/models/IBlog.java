package com.valiha.users.core.interfaces.models;

import com.valiha.users.core.entities.model.User;

public interface IBlog {
  String getId();

  String getTitle();

  String getText();

  User getUser();

  String getImage();

  boolean titleIsValid();

  boolean textIsValid();
}
