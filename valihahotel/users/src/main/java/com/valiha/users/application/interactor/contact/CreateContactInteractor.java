package com.valiha.users.application.interactor.contact;

import com.valiha.users.application.dto.contact.ContactRequestDto;
import com.valiha.users.application.dto.contact.ContactResponseDto;
import com.valiha.users.application.presenter.GenericPresenter;
import com.valiha.users.application.repository.ContactRepository;
import com.valiha.users.application.useCase.contact.CreateContactUseCase;
import com.valiha.users.core.constants.ContactValidator;
import com.valiha.users.core.entities.model.Client;
import com.valiha.users.core.entities.model.Contact;
import com.valiha.users.core.interfaces.factory.ClientFactory;
import com.valiha.users.core.interfaces.factory.ContactFactory;
import java.util.Map;

public class CreateContactInteractor implements CreateContactUseCase {

  private final ContactRepository contactRepository;
  private final GenericPresenter<ContactResponseDto> contactPresenter;
  private final ContactFactory contactFactory;
  private final ClientFactory clientFactory;

  public CreateContactInteractor(
    ContactRepository contactRepository,
    GenericPresenter<ContactResponseDto> contactPresenter,
    ContactFactory contactFactory,
    ClientFactory clientFactory
  ) {
    this.contactRepository = contactRepository;
    this.contactPresenter = contactPresenter;
    this.contactFactory = contactFactory;
    this.clientFactory = clientFactory;
  }

  @Override
  public ContactResponseDto execute(ContactRequestDto requestDto) {
    Client client = requestDto.getClient() != null ?
      this.clientFactory.create(
          null,
          requestDto.getClient().getFirstName(),
          requestDto.getClient().getLastName(),
          requestDto.getClient().getPhoneNumber(),
          requestDto.getClient().getEmail()
        ) : null;

    Map<String, String> errors = client.validate();

    Contact contact =
      this.contactFactory.create(
          null,
          client,
          requestDto.getSubject(),
          requestDto.getMessage()
        );

    errors.putAll(contact.validate());

    if (!errors.isEmpty()) {
      return contactPresenter.prepareInvalidDataView(
        ContactValidator.INVALID_DATA_MESSAGE,
        errors
      );
    }

    contact = this.contactRepository.save(contact);

    return this.contactPresenter.prepareSuccessView(
        ContactResponseDto.from(contact)
      );
  }
}
