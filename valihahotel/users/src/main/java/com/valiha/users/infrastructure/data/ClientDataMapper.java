package com.valiha.users.infrastructure.data;

import com.valiha.users.core.entities.model.Client;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Document(value = "clients")
public class ClientDataMapper {

  @Id
  private String id;

  private String firstName;
  private String lastName;
  private String phoneNumber;
  private String email;

  public static ClientDataMapper from(Client client) {
    return ClientDataMapper
      .builder()
      .id(client.getId())
      .firstName(client.getFirstName())
      .lastName(client.getLastName())
      .phoneNumber(client.getPhoneNumber())
      .email(client.getEmail())
      .build();
  }
}
