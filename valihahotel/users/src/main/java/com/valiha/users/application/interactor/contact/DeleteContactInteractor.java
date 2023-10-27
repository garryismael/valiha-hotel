package com.valiha.users.application.interactor.contact;

import com.valiha.users.application.dto.contact.ContactResponseDto;
import com.valiha.users.application.presenter.GenericPresenter;
import com.valiha.users.application.repository.ContactRepository;
import com.valiha.users.application.useCase.contact.DeleteContactUseCase;
import com.valiha.users.core.constants.ContactValidator;
import com.valiha.users.core.entities.model.Contact;
import java.util.HashMap;
import java.util.Map;

public class DeleteContactInteractor implements DeleteContactUseCase {

  private final ContactRepository contactRepository;
  private final GenericPresenter<ContactResponseDto> contactPresenter;

  public DeleteContactInteractor(
    ContactRepository contactRepository,
    GenericPresenter<ContactResponseDto> contactPresenter
  ) {
    this.contactRepository = contactRepository;
    this.contactPresenter = contactPresenter;
  }

  @Override
  public void execute(String id) {
    Map<String, String> errors = new HashMap<String, String>();
    Contact contact = this.contactRepository.findOneById(id);

    if (contact == null) {
      errors.put(
        ContactValidator.KEY_ID,
        ContactValidator.CONTACT_NOT_FOUND_ERROR
      );
      contactPresenter.prepareResourceNotFoundView(
        ContactValidator.KEY_ID,
        errors
      );
    }

    this.contactRepository.deleteById(id);
  }
}
