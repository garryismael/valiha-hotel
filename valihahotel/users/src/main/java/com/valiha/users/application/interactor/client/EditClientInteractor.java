package com.valiha.users.application.interactor.client;

import com.valiha.users.application.dto.client.ClientRequestDto;
import com.valiha.users.application.dto.client.ClientResponseDto;
import com.valiha.users.application.presenter.GenericPresenter;
import com.valiha.users.application.repository.GenericRepository;
import com.valiha.users.application.useCase.client.EditClientUseCase;
import com.valiha.users.core.constants.ClientValidator;
import com.valiha.users.core.entities.model.Client;
import com.valiha.users.core.interfaces.factory.ClientFactory;
import java.util.HashMap;
import java.util.Map;

public class EditClientInteractor implements EditClientUseCase {

  private final GenericRepository<Client> clientRepository;
  private final GenericPresenter<ClientResponseDto> clientPresenter;
  private final ClientFactory clientFactory;

  public EditClientInteractor(
    GenericRepository<Client> clientRepository,
    GenericPresenter<ClientResponseDto> clientPresenter,
    ClientFactory clientFactory
  ) {
    this.clientRepository = clientRepository;
    this.clientPresenter = clientPresenter;
    this.clientFactory = clientFactory;
  }

  @Override
  public ClientResponseDto execute(String id, ClientRequestDto requestDto) {
    Map<String, String> errors = new HashMap<String, String>();
    Client client = this.clientRepository.findOneById(id);

    if (client == null) {
      errors.put(
        ClientValidator.KEY_ID,
        ClientValidator.CLIENT_NOT_FOUND_ERROR
      );
      return clientPresenter.prepareResourceNotFoundView(
        ClientValidator.KEY_ID,
        errors
      );
    }

    client =
      clientFactory.create(
        client.getId(),
        requestDto.getFirstName(),
        requestDto.getLastName(),
        requestDto.getPhoneNumber(),
        requestDto.getEmail()
      );

    errors = client.validate();

    if (!errors.isEmpty()) {
      return clientPresenter.prepareInvalidDataView(
        ClientValidator.INVALID_DATA_MESSAGE,
        errors
      );
    }

    client = this.clientRepository.save(client);
    return this.clientPresenter.prepareSuccessView(
        ClientResponseDto.from(client)
      );
  }
}
