package com.valiha.reservation.application.dto.client;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ClientRequestDto {

  private String firstName;
  private String lastName;
  private String phoneNumber;
  private String email;
}
