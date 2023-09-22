package com.valiha.users.application.dto.contact;

import com.valiha.users.application.dto.client.ClientResponseDto;
import com.valiha.users.core.entities.model.Contact;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ContactResponseDto {

  private String id;
  private ClientResponseDto client;
  private String subject;
  private String message;

  public static ContactResponseDto from(Contact contact) {
    return ContactResponseDto
      .builder()
      .id(contact.getId())
      .subject(contact.getSubject())
      .message(contact.getMessage())
      .client(ClientResponseDto.from(contact.getClient()))
      .build();
  }

  public static List<ContactResponseDto> from(List<Contact> contacts) {
    return contacts
      .stream()
      .map(contact -> ContactResponseDto.from(contact))
      .toList();
  }
}
