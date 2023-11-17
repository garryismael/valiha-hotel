package com.valiha.notification.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Client {

  private String id;
  private String firstName;
  private String lastName;
  private String phoneNumber;
  private String email;
}
