package com.valiha.users.application.interactor.client;

import com.valiha.users.application.dto.client.ClientRequestDto;
import com.valiha.users.application.dto.client.ClientResponseDto;
import com.valiha.users.application.presenter.GenericPresenter;
import com.valiha.users.application.repository.ClientRepository;
import com.valiha.users.application.useCase.client.RegisterClientUseCase;
import com.valiha.users.core.constants.ClientValidator;
import com.valiha.users.core.entities.model.Client;
import com.valiha.users.core.interfaces.factory.ClientFactory;
import java.util.Map;

public class RegisterClientInteractor implements RegisterClientUseCase {

  private final ClientRepository clientRepository;
  private final GenericPresenter<ClientResponseDto> clientPresenter;
  private final ClientFactory clientFactory;

  public RegisterClientInteractor(
    ClientRepository clientRepository,
    GenericPresenter<ClientResponseDto> clientPresenter,
    ClientFactory clientFactory
  ) {
    this.clientRepository = clientRepository;
    this.clientPresenter = clientPresenter;
    this.clientFactory = clientFactory;
  }

  @Override
  public ClientResponseDto execute(ClientRequestDto requestDto) {
    Client client =
      this.clientFactory.create(
          null,
          requestDto.getFirstName(),
          requestDto.getLastName(),
          requestDto.getPhoneNumber(),
          requestDto.getEmail()
        );
    Map<String, String> errors = client.validate();

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
