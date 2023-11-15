package com.valiha.users.application.interactor.contact;

import com.valiha.users.application.dto.contact.ContactRequestDto;
import com.valiha.users.application.dto.contact.ContactResponseDto;
import com.valiha.users.application.presenter.GenericPresenter;
import com.valiha.users.application.repository.ClientRepository;
import com.valiha.users.application.repository.ContactRepository;
import com.valiha.users.application.useCase.contact.CreateContactUseCase;
import com.valiha.users.core.constants.ContactValidator;
import com.valiha.users.core.entities.model.Client;
import com.valiha.users.core.entities.model.Contact;
import com.valiha.users.core.interfaces.factory.ClientFactory;
import com.valiha.users.core.interfaces.factory.ContactFactory;
import java.util.HashMap;
import java.util.Map;
import lombok.AllArgsConstructor;

@AllArgsConstructor
public class CreateContactInteractor implements CreateContactUseCase {

  private final ContactRepository contactRepository;
  private final ClientRepository clientRepository;
  private final GenericPresenter<ContactResponseDto> contactPresenter;
  private final ContactFactory contactFactory;
  private final ClientFactory clientFactory;

  @Override
  public ContactResponseDto execute(ContactRequestDto requestDto) {
    Map<String, String> errors = new HashMap<>();
    Client client = requestDto.getClient() != null
      ? this.clientFactory.create(
          null,
          requestDto.getClient().getFirstName(),
          requestDto.getClient().getLastName(),
          requestDto.getClient().getPhoneNumber(),
          requestDto.getClient().getEmail()
        )
      : new Client();

    Contact contact =
      this.contactFactory.create(
          null,
          client,
          requestDto.getSubject(),
          requestDto.getMessage()
        );

    errors = contact.validate();

    if (!errors.isEmpty()) {
      return contactPresenter.prepareInvalidDataView(
        ContactValidator.INVALID_DATA_MESSAGE,
        errors
      );
    }

    client = this.clientRepository.save(client);

    contact =
      this.contactRepository.save(
          contactFactory.create(
            null,
            client,
            contact.getSubject(),
            contact.getMessage()
          )
        );

    return this.contactPresenter.prepareSuccessView(
        ContactResponseDto.from(contact)
      );
  }
}
