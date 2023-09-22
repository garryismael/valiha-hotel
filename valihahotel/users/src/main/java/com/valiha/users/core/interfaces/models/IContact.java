package com.valiha.users.core.interfaces.models;

import com.valiha.users.core.entities.model.Client;

public interface IContact {
  String getId();

  Client getClient();

  String getSubject();

  String getMessage();

  boolean clientIsValid();

  boolean subjectIsValid();

  boolean messageIsValid();
}
