package com.valiha.location.infrastructure.service;

import com.valiha.location.application.dto.client.ClientRequestDto;
import com.valiha.location.application.dto.client.ClientResponseDto;
import java.util.List;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

@FeignClient("USERS-SERVICE")
public interface ApiClientService {
  @GetMapping(
    value = "/clients/ids",
    consumes = MediaType.APPLICATION_JSON_VALUE
  )
  List<ClientResponseDto> findAllByIds(@RequestParam List<String> ids);

  @PostMapping(value = "/clients", consumes = MediaType.APPLICATION_JSON_VALUE)
  ClientResponseDto create(@RequestBody ClientRequestDto requestDto);

  @GetMapping(
    value = "/clients/{id}",
    consumes = MediaType.APPLICATION_JSON_VALUE
  )
  ClientResponseDto findOneById(String id);
}
