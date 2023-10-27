package com.valiha.users.infrastructure.services;

import com.valiha.users.infrastructure.data.UserDataMapper;
import jakarta.ws.rs.core.Response;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.keycloak.admin.client.CreatedResponseUtil;
import org.keycloak.admin.client.Keycloak;
import org.keycloak.admin.client.resource.UserResource;
import org.keycloak.admin.client.resource.UsersResource;
import org.keycloak.representations.idm.CredentialRepresentation;
import org.keycloak.representations.idm.UserRepresentation;

public class KeycloakService {

  private static final String REALM_NAME = "valihahotel";
  private final UsersResource usersRessource;

  public KeycloakService(Keycloak keycloak) {
    this.usersRessource = keycloak.realm(REALM_NAME).users();
  }

  public List<UserDataMapper> findAll() {
    List<UserRepresentation> users = usersRessource.list();
    return users.stream().map(user -> UserDataMapper.from(user)).toList();
  }

  public UserDataMapper findOneById(String userId) {
    UserResource userResource = usersRessource.get(userId);
    UserRepresentation user = userResource.toRepresentation();
    return UserDataMapper.from(user);
  }

  public UserDataMapper findOneByEmail(String email) {
    List<UserRepresentation> users = usersRessource.searchByEmail(email, true);

    return users.size() > 0 ? UserDataMapper.from(users.get(0)) : null;
  }

  public boolean deleteUser(String id) {
    Response response = usersRessource.delete(id);
    return response.getStatus() != 404;
  }

  public UserDataMapper save(
    String firstName,
    String lastName,
    String phoneNumber,
    String email,
    String image,
    String password
  ) {
    UserRepresentation user = new UserRepresentation();

    Map<String, List<String>> attributes = new HashMap<>();
    attributes.put("phoneNumber", Arrays.asList(phoneNumber));
    attributes.put("image", Arrays.asList(image));

    user.setUsername(email);
    user.setEmail(email);
    user.setFirstName(firstName);
    user.setLastName(lastName);
    user.setEnabled(true);
    user.setAttributes(attributes);
    Response response = usersRessource.create(user);

    String userId = CreatedResponseUtil.getCreatedId(response);
    user.setId(userId);
    CredentialRepresentation passwordCred = new CredentialRepresentation();
    passwordCred.setTemporary(false);
    passwordCred.setType(CredentialRepresentation.PASSWORD);
    passwordCred.setValue(password);

    UserResource userResource = usersRessource.get(userId);
    userResource.resetPassword(passwordCred);
    return UserDataMapper.from(user);
  }

  public UserDataMapper update(
    String id,
    String firstName,
    String lastName,
    String phoneNumber,
    String email,
    String image
  ) {
    UserResource userResource = usersRessource.get(id);
    UserRepresentation user = userResource.toRepresentation();

    Map<String, List<String>> attributes = new HashMap<>();
    attributes.put("phoneNumber", Arrays.asList(phoneNumber));
    attributes.put("image", Arrays.asList(image));
    user.setUsername(email);
    user.setEmail(email);
    user.setFirstName(firstName);
    user.setLastName(lastName);
    user.setAttributes(attributes);
    userResource.update(user);
    return UserDataMapper.from(user);
  }

  public List<UserDataMapper> findByIds(List<String> userIds) {
    return this.findAll()
      .stream()
      .filter(user -> userIds.contains(user.getId()))
      .toList();
  }
}
