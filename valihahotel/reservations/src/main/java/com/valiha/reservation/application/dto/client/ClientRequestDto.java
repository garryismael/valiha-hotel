package com.valiha.reservation.application.dto.client;

import com.valiha.reservation.core.entities.models.Client;
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

  public static Client toClient(ClientRequestDto responseDto) {
    return Client
      .builder()
      .id(null)
      .firstName(responseDto.firstName)
      .lastName(responseDto.lastName)
      .phoneNumber(responseDto.phoneNumber)
      .email(responseDto.email)
      .build();
  }
}
