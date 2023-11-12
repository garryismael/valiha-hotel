package com.valiha.payment.application.dto.user;

import com.valiha.payment.core.entities.models.User;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserResponseDto {

  private String id;
  private String firstName;
  private String lastName;
  private String phoneNumber;
  private String email;
  private String image;

  public static UserResponseDto from(User user) {
    return UserResponseDto
      .builder()
      .id(user.getId())
      .firstName(user.getFirstName())
      .lastName(user.getLastName())
      .phoneNumber(user.getPhoneNumber())
      .email(user.getEmail())
      .image(user.getImage())
      .build();
  }

  public static List<UserResponseDto> from(List<User> users) {
    return users.stream().map(user -> UserResponseDto.from(user)).toList();
  }
}
