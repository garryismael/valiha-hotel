package com.valiha.payment.core.entities.models;

import com.valiha.payment.core.interfaces.models.IUser;
import lombok.Getter;

@Getter
public class User implements IUser {

  private String id;
  private String firstName;
  private String lastName;
  private String phoneNumber;
  private String email;
  private String image;

  public class Builder {

    private final User user;

    public Builder(User user) {
      this.user = user;
    }

    public Builder id(String value) {
      id = value;
      return this;
    }

    public Builder firstName(String value) {
      firstName = value;
      return this;
    }

    public Builder lastName(String value) {
      lastName = value;
      return this;
    }

    public Builder phoneNumber(String value) {
      phoneNumber = value;
      return this;
    }

    public Builder email(String value) {
      email = value;
      return this;
    }

    public Builder image(String value) {
      image = value;
      return this;
    }

    public User build() {
      return this.user;
    }
  }

  public static Builder builder() {
    User user = new User();
    return user.new Builder(user);
  }
}
