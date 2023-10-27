package com.valiha.reservation.infrastructure.data;

import com.valiha.reservation.application.dto.client.ClientResponseDto;
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
public class ClientDataMapper {

  private String id;
  private String firstName;
  private String lastName;
  private String email;
  private String phoneNumber;

  public static Client toClient(ClientDataMapper dataMapper) {
    return Client
      .builder()
      .id(dataMapper.id)
      .firstName(dataMapper.firstName)
      .lastName(dataMapper.lastName)
      .email(dataMapper.email)
      .phoneNumber(dataMapper.phoneNumber)
      .build();
  }

  public static Client toClient(ClientResponseDto responseDto) {
    return Client
      .builder()
      .id(responseDto.getId())
      .firstName(responseDto.getFirstName())
      .lastName(responseDto.getLastName())
      .email(responseDto.getEmail())
      .phoneNumber(responseDto.getPhoneNumber())
      .build();
  }

  public static ClientDataMapper from(ClientResponseDto responseDto) {
    return ClientDataMapper
      .builder()
      .id(responseDto.getId())
      .firstName(responseDto.getFirstName())
      .lastName(responseDto.getLastName())
      .email(responseDto.getEmail())
      .phoneNumber(responseDto.getPhoneNumber())
      .build();
  }

  public static ClientDataMapper from(Client client) {
    return ClientDataMapper
      .builder()
      .id(client.getId())
      .firstName(client.getFirstName())
      .lastName(client.getLastName())
      .email(client.getEmail())
      .phoneNumber(client.getPhoneNumber())
      .build();
  }

  public static List<ClientDataMapper> from(List<Client> clients) {
    return clients.stream().map(ClientDataMapper::from).toList();
  }
}
