package com.valiha.reservation.application.dto.client;

import com.valiha.reservation.core.entities.models.Client;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ClientResponseDto {

  private String id;
  private String firstName;
  private String lastName;
  private String phoneNumber;
  private String email;

  public static ClientResponseDto from(Client client) {
    return ClientResponseDto
      .builder()
      .id(client.getId())
      .firstName(client.getFirstName())
      .lastName(client.getLastName())
      .phoneNumber(client.getPhoneNumber())
      .email(client.getEmail())
      .build();
  }

  public static List<ClientResponseDto> from(List<Client> clients) {
    return clients.stream().map(ClientResponseDto::from).toList();
  }

  public static Client toClient(ClientResponseDto responseDto) {
    return Client
      .builder()
      .id(responseDto.id)
      .firstName(responseDto.firstName)
      .lastName(responseDto.lastName)
      .phoneNumber(responseDto.phoneNumber)
      .email(responseDto.email)
      .build();
  }
}
