package com.valiha.users.application.interactor.client;

import com.valiha.users.application.dto.client.ClientResponseDto;
import com.valiha.users.application.presenter.GenericPresenter;
import com.valiha.users.application.repository.GenericRepository;
import com.valiha.users.application.useCase.client.FindClientsByIdsUseCase;
import com.valiha.users.core.entities.model.Client;
import java.util.List;

public class FindClientsByIdsInteractor implements FindClientsByIdsUseCase {

  private final GenericRepository<Client> clientRepository;
  private final GenericPresenter<ClientResponseDto> clientPresenter;

  public FindClientsByIdsInteractor(
    GenericRepository<Client> clientRepository,
    GenericPresenter<ClientResponseDto> clientPresenter
  ) {
    this.clientRepository = clientRepository;
    this.clientPresenter = clientPresenter;
  }

  @Override
  public List<ClientResponseDto> execute(List<String> ids) {
    List<Client> clients = this.clientRepository.findAll();

    return this.clientPresenter.prepareSuccessView(
        ClientResponseDto.from(clients)
      );
  }
}
