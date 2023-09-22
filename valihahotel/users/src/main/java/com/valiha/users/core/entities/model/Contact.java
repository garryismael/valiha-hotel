package com.valiha.users.core.entities.model;

import com.valiha.users.core.constants.ContactValidator;
import com.valiha.users.core.interfaces.models.IContact;
import com.valiha.users.core.interfaces.validator.InputValidator;
import java.util.HashMap;
import java.util.Map;
import lombok.Getter;

@Getter
public class Contact implements IContact, InputValidator {

  private String id;
  private Client client;
  private String subject;
  private String message;

  public class Builder {

    private final Contact contact;

    public Builder(Contact contact) {
      this.contact = contact;
    }

    public Builder id(String value) {
      id = value;
      return this;
    }

    public Builder client(Client value) {
      client = value;
      return this;
    }

    public Builder subject(String value) {
      subject = value;
      return this;
    }

    public Builder message(String value) {
      message = value;
      return this;
    }

    public Contact build() {
      return this.contact;
    }
  }

  public static Builder builder() {
    Contact contact = new Contact();
    return contact.new Builder(contact);
  }

  @Override
  public boolean clientIsValid() {
    return this.client != null;
  }

  @Override
  public boolean subjectIsValid() {
    return this.subject != null;
  }

  @Override
  public boolean messageIsValid() {
    return this.message != null && this.message.length() > 10;
  }

  @Override
  public Map<String, String> validate() {
    Map<String, String> errors = new HashMap<>();

    if (!clientIsValid()) {
      errors.put(
        ContactValidator.KEY_CLIENT,
        ContactValidator.INVALID_CLIENT_ERROR
      );
    }
    if (!subjectIsValid()) {
      errors.put("subject", "subject invalid");
    }

    if (!messageIsValid()) {
      errors.put("message", "message invalid");
    }
    return errors;
  }
}
