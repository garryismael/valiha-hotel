package com.valiha.users.application.interactor.client;

import com.valiha.users.application.dto.client.ClientResponseDto;
import com.valiha.users.application.presenter.GenericPresenter;
import com.valiha.users.application.repository.GenericRepository;
import com.valiha.users.application.useCase.client.FindOneClientUseCase;
import com.valiha.users.core.constants.BlogValidator;
import com.valiha.users.core.entities.model.Client;
import java.util.HashMap;
import java.util.Map;

public class FindOneClientInteractor implements FindOneClientUseCase {

  private final GenericRepository<Client> clientRepository;
  private final GenericPresenter<ClientResponseDto> clientPresenter;

  public FindOneClientInteractor(
    GenericRepository<Client> clientRepository,
    GenericPresenter<ClientResponseDto> clientPresenter
  ) {
    this.clientRepository = clientRepository;
    this.clientPresenter = clientPresenter;
  }

  @Override
  public ClientResponseDto execute(String id) {
    Map<String, String> errors = new HashMap<String, String>();
    Client client = this.clientRepository.findOneById(id);

    if (client == null) {
      errors.put(BlogValidator.KEY_ID, BlogValidator.BLOG_NOT_FOUND_ERROR);
      return clientPresenter.prepareResourceNotFoundView(
        BlogValidator.KEY_ID,
        errors
      );
    }

    return this.clientPresenter.prepareSuccessView(
        ClientResponseDto.from(client)
      );
  }
}
