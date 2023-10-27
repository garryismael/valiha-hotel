package com.valiha.users.application.useCase.contact;

import com.valiha.users.application.dto.contact.ContactResponseDto;
import java.util.List;

public interface FindAllContactsUseCase {
  List<ContactResponseDto> execute();
}
