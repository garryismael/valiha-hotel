package com.valiha.users.infrastructure.data;

import com.valiha.users.core.entities.model.Contact;
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
@Document(value = "contacts")
public class ContactDataMapper {

  @Id
  private String id;

  private String subject;
  private String message;
  private ClientDataMapper client;

  public static ContactDataMapper from(Contact contact) {
    return ContactDataMapper
      .builder()
      .id(contact.getId())
      .subject(contact.getSubject())
      .message(contact.getMessage())
      .client(ClientDataMapper.from(contact.getClient()))
      .build();
  }
}
