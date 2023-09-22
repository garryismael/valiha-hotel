package com.valiha.location.core.entities.models;

import com.valiha.location.core.constants.AppLocation;
import com.valiha.location.core.constants.ClientValidator;
import com.valiha.location.core.interfaces.models.IClient;
import com.valiha.location.core.interfaces.validator.InputValidator;
import java.util.HashMap;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Client implements IClient, InputValidator {

  private String id;
  private String firstName;
  private String lastName;
  private String email;
  private String phoneNumber;

  public class Builder {

    private final Client client;

    public Builder(Client client) {
      this.client = client;
    }

    public Builder id(String value) {
      this.client.id = value;
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

    public Client build() {
      return this.client;
    }
  }

  public static Builder builder() {
    Client client = new Client();
    return client.new Builder(client);
  }

  @Override
  public boolean firstNameIsValid() {
    return this.firstName != null && this.firstName.trim().length() > 3;
  }

  @Override
  public boolean lastNameIsValid() {
    return this.lastName == null || this.lastName.trim().length() > 3;
  }

  @Override
  public boolean phoneNumberIsValid() {
    return this.phoneNumber != null && this.phoneNumber.trim().length() >= 10;
  }

  @Override
  public boolean emailIsValid() {
    Pattern pattern = Pattern.compile(AppLocation.EMAIL_REGEX);
    Matcher matcher = pattern.matcher(email);
    return this.email != null && matcher.matches();
  }

  @Override
  public Map<String, String> validate() {
    Map<String, String> errors = new HashMap<>();

    if (!firstNameIsValid()) {
      errors.put(
        ClientValidator.KEY_FIRST_NAME,
        ClientValidator.INVALID_FIRST_NAME_ERROR
      );
    }

    if (!lastNameIsValid()) {
      errors.put(
        ClientValidator.KEY_LAST_NAME,
        ClientValidator.INVALID_LAST_NAME_ERROR
      );
    }

    if (!phoneNumberIsValid()) {
      errors.put(
        ClientValidator.KEY_PHONE_NUMBER,
        ClientValidator.INVALID_PHONE_NUMBER_ERROR
      );
    }

    if (!emailIsValid()) {
      errors.put(
        ClientValidator.KEY_EMAIL,
        ClientValidator.INVALID_EMAIL_ERROR
      );
    }

    return errors;
  }
}
