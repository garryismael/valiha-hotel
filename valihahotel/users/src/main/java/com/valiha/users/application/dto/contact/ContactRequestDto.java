package com.valiha.users.application.dto.contact;

import com.valiha.users.application.dto.client.ClientRequestDto;
import lombok.Getter;

@Getter
public class ContactRequestDto {

  private ClientRequestDto client;
  private String subject;
  private String message;
}
