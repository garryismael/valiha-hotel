package com.valiha.users.core.interfaces.models;

public interface IUser {
  String getId();

  String getFirstName();

  String getLastName();

  String getPhoneNumber();

  String getEmail();

  String getPassword();

  boolean passwordIsValid();

  boolean firstNameIsValid();

  boolean lastNameIsValid();

  boolean phoneNumberIsValid();
}
