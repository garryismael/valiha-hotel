package com.valiha.reservation.infrastructure.repository;

import com.valiha.reservation.application.dto.client.ClientResponseDto;
import com.valiha.reservation.application.dto.reservation.ReservationResponseDto;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@FeignClient(name = "NOTIFICATIONS-SERVICE")
public interface ApiNotification {
  @PostMapping(
    value = "/reservations",
    consumes = MediaType.APPLICATION_JSON_VALUE
  )
  ClientResponseDto notifyReservation(
    @RequestBody ReservationResponseDto request
  );
}
