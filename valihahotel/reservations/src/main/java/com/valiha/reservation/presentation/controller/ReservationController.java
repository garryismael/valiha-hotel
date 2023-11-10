package com.valiha.reservation.presentation.controller;

import com.valiha.reservation.application.dto.breakfast.BreakfastBaseRequestDto;
import com.valiha.reservation.application.dto.breakfast.BreakfastResponseDto;
import com.valiha.reservation.application.dto.reservation.CommonReservationRequestDto;
import com.valiha.reservation.application.dto.reservation.ReservationRequestDto;
import com.valiha.reservation.application.dto.reservation.ReservationResponseDto;
import com.valiha.reservation.application.dto.shuttle.ShuttleBaseRequestDto;
import com.valiha.reservation.application.dto.shuttle.ShuttleResponseDto;
import com.valiha.reservation.application.useCase.breakfast.CreateBreakfastUseCase;
import com.valiha.reservation.application.useCase.reservation.CreateReservationUseCase;
import com.valiha.reservation.application.useCase.reservation.DeleteReservationUseCase;
import com.valiha.reservation.application.useCase.reservation.EditReservationUseCase;
import com.valiha.reservation.application.useCase.reservation.FindAllReservationsUseCase;
import com.valiha.reservation.application.useCase.reservation.FindOneReservationUseCase;
import com.valiha.reservation.application.useCase.shuttle.CreateShuttleUseCase;
import java.util.List;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/reservations")
@AllArgsConstructor
public class ReservationController {

  private final CreateReservationUseCase createUseCase;
  private final DeleteReservationUseCase deleteUseCase;
  private final EditReservationUseCase editUseCase;
  private final FindAllReservationsUseCase findAllUseCase;
  private final FindOneReservationUseCase findOneUseCase;
  private final CreateBreakfastUseCase createBreakfast;
  private final CreateShuttleUseCase createShuttle;

  @PostMapping
  public ReservationResponseDto create(
    @RequestBody ReservationRequestDto requestDto
  ) {
    return this.createUseCase.execute(requestDto);
  }

  @PostMapping("/{id}/breakfasts")
  public BreakfastResponseDto create(
    @PathVariable String id,
    @RequestBody BreakfastBaseRequestDto request
  ) {
    return this.createBreakfast.execute(id, request);
  }

  @PostMapping("/{id}/shuttles")
  public ShuttleResponseDto create(
    @PathVariable String id,
    @RequestBody ShuttleBaseRequestDto request
  ) {
    return this.createShuttle.execute(id, request);
  }

  @DeleteMapping("/{id}")
  public void delete(@PathVariable String id) {
    this.deleteUseCase.execute(id);
  }

  @PutMapping("/{id}")
  public ReservationResponseDto edit(
    @PathVariable String id,
    @RequestBody CommonReservationRequestDto requestDto
  ) {
    return this.editUseCase.execute(id, requestDto);
  }

  @GetMapping
  public List<ReservationResponseDto> findAll() {
    return this.findAllUseCase.execute();
  }

  @GetMapping("/{id}")
  public ReservationResponseDto findOne(@PathVariable String id) {
    return this.findOneUseCase.execute(id);
  }
}
