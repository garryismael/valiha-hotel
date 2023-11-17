package com.valiha.location.infrastructure.repository;

import com.valiha.location.application.dto.location.LocationResponseDto;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@FeignClient(name = "NOTIFICATIONS-SERVICE")
public interface ApiNotification {
  @PostMapping(
    value = "/locations",
    consumes = MediaType.APPLICATION_JSON_VALUE
  )
  void notifyReservation(@RequestBody LocationResponseDto request);
}
