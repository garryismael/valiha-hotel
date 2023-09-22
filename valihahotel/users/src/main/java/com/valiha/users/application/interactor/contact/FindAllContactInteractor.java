package com.valiha.users.application.interactor.contact;

import com.valiha.users.application.dto.contact.ContactResponseDto;
import com.valiha.users.application.presenter.GenericPresenter;
import com.valiha.users.application.repository.ContactRepository;
import com.valiha.users.application.useCase.contact.FindAllContactsUseCase;
import com.valiha.users.core.entities.model.Contact;
import java.util.List;

public class FindAllContactInteractor implements FindAllContactsUseCase {

  private final ContactRepository contactRepository;
  private final GenericPresenter<ContactResponseDto> contactPresenter;

  public FindAllContactInteractor(
    ContactRepository contactRepository,
    GenericPresenter<ContactResponseDto> contactPresenter
  ) {
    this.contactRepository = contactRepository;
    this.contactPresenter = contactPresenter;
  }

  @Override
  public List<ContactResponseDto> execute() {
    List<Contact> contacts = this.contactRepository.findAll();

    return this.contactPresenter.prepareSuccessView(
        ContactResponseDto.from(contacts)
      );
  }
}
