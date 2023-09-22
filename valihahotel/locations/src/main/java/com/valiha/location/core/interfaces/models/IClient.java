package com.valiha.location.core.interfaces.models;

public interface IClient {
  String getId();

  String getFirstName();

  String getLastName();

  String getPhoneNumber();

  String getEmail();

  boolean firstNameIsValid();

  boolean lastNameIsValid();

  boolean phoneNumberIsValid();

  boolean emailIsValid();
}
