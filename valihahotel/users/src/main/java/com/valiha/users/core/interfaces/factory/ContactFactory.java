package com.valiha.users.core.interfaces.factory;

import com.valiha.users.core.entities.model.Client;
import com.valiha.users.core.entities.model.Contact;

public interface ContactFactory {
  Contact create(String id, Client client, String object, String message);
}
