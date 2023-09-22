package com.valiha.reservation.infrastructure.repository;

import com.valiha.reservation.application.dto.client.ClientRequestDto;
import com.valiha.reservation.application.dto.client.ClientResponseDto;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@FeignClient(value = "USERS-SERVICE")
public interface ApiClientRepository {
  @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
  ClientResponseDto create(@RequestBody ClientRequestDto requestDto);
}
