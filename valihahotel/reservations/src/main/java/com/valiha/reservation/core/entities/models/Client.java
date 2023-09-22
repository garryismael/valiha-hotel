package com.valiha.reservation.core.entities.models;

import com.valiha.reservation.core.constant.AppReservation;
import com.valiha.reservation.core.constant.ClientValidator;
import com.valiha.reservation.core.interfaces.validator.InputValidator;
import java.util.HashMap;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Client implements InputValidator {

  private String id;
  private String firstName;
  private String lastName;
  private String phoneNumber;
  private String email;

  public boolean firstNameIsValid() {
    return this.firstName != null && this.firstName.trim().length() > 3;
  }

  public boolean lastNameIsValid() {
    return this.lastName == null || this.lastName.trim().length() > 3;
  }

  public boolean phoneNumberIsValid() {
    return this.phoneNumber != null && this.phoneNumber.trim().length() >= 10;
  }

  public boolean emailIsValid() {
    Pattern pattern = Pattern.compile(AppReservation.EMAIL_REGEX);
    Matcher matcher = pattern.matcher(email);
    return this.email != null && matcher.matches();
  }

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
