package com.valiha.users.application.useCase.contact;

import com.valiha.users.application.dto.contact.ContactRequestDto;
import com.valiha.users.application.dto.contact.ContactResponseDto;

public interface CreateContactUseCase {
  ContactResponseDto execute(ContactRequestDto requestDto);
}
