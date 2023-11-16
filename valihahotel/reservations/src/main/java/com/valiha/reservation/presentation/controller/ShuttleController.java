package com.valiha.reservation.presentation.controller;

import com.valiha.reservation.application.dto.shuttle.ShuttleRequestDto;
import com.valiha.reservation.application.dto.shuttle.ShuttleResponseDto;
import com.valiha.reservation.application.useCase.shuttle.DeleteShuttleUseCase;
import com.valiha.reservation.application.useCase.shuttle.EditShuttleUseCase;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@AllArgsConstructor
@RequestMapping("shuttles")
@RestController
public class ShuttleController {

  private final EditShuttleUseCase editUseCase;
  private final DeleteShuttleUseCase deleteUseCase;

  @PutMapping("/{id}")
  public ShuttleResponseDto edit(
    @PathVariable String id,
    @RequestBody ShuttleRequestDto requestDto
  ) {
    return this.editUseCase.execute(id, requestDto);
  }

  @DeleteMapping("/{id}/{reservationId}")
  public void delete(
    @PathVariable String id,
    @PathVariable("reservationId") String reservationId
  ) {
    this.deleteUseCase.execute(id, reservationId);
  }
}
