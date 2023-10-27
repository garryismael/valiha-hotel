package com.valiha.users.application.useCase.contact;

import com.valiha.users.application.dto.contact.ContactResponseDto;

public interface FindOneContactUseCase {
  ContactResponseDto execute(String id);
}
