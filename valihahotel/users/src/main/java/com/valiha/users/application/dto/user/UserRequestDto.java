package com.valiha.users.application.dto.user;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserRequestDto {

  private String firstName;
  private String lastName;
  private String phoneNumber;
  private String email;
  private String password;
}
