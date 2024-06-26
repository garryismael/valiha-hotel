package com.valiha.payment.infrastructure.data;

import com.valiha.payment.core.entities.models.User;
import com.valiha.payment.infrastructure.constants.UserData;
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
  private String image;
  private String password;

  public static UserDataMapper from(User user) {
    return UserDataMapper
      .builder()
      .id(user.getId())
      .firstName(user.getFirstName())
      .lastName(user.getLastName())
      .phoneNumber(user.getPhoneNumber())
      .email(user.getEmail())
      .image(user.getImage())
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
      .image(user.firstAttribute("picture"))
      .build();
  }

  public static User cast(UserDataMapper user) {
    return User
      .builder()
      .id(user.getId())
      .firstName(user.getFirstName())
      .lastName(user.getLastName())
      .phoneNumber(user.getPhoneNumber())
      .email(user.getEmail())
      .image(String.format("%s/%s", UserData.BASE_URL, user.getImage()))
      .build();
  }
}
