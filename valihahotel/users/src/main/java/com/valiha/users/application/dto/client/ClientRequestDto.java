package com.valiha.users.application.dto.client;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ClientRequestDto {

  private String firstName;
  private String lastName;
  private String phoneNumber;
  private String email;
}
