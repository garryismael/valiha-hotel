package com.valiha.users.infrastructure.data;

import com.valiha.users.core.entities.model.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.keycloak.representations.idm.UserRepresentation;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserDataMapper {

  private String id;
  private String firstName;
  private String lastName;
  private String phoneNumber;
  private String email;
  private String password;

  public static UserDataMapper from(User user) {
    return UserDataMapper
      .builder()
      .id(user.getId())
      .firstName(user.getFirstName())
      .lastName(user.getLastName())
      .phoneNumber(user.getPhoneNumber())
      .email(user.getEmail())
      .password(user.getPassword())
      .build();
  }

  public static UserDataMapper from(UserRepresentation user) {
    return UserDataMapper
      .builder()
      .id(user.getId())
      .firstName(user.getFirstName())
      .lastName(user.getLastName())
      .phoneNumber(user.firstAttribute("phoneNumber"))
      .email(user.getEmail())
      .build();
  }
}
