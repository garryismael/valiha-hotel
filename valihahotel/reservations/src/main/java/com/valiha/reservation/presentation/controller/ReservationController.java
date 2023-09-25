package com.valiha.reservation.presentation.controller;

import com.valiha.reservation.application.dto.reservation.CommonReservationRequestDto;
import com.valiha.reservation.application.dto.reservation.ReservationRequestDto;
import com.valiha.reservation.application.dto.reservation.ReservationResponseDto;
import com.valiha.reservation.application.useCase.reservation.CreateReservationUseCase;
import com.valiha.reservation.application.useCase.reservation.DeleteReservationUseCase;
import com.valiha.reservation.application.useCase.reservation.EditReservationUseCase;
import com.valiha.reservation.application.useCase.reservation.FindAllReservationsUseCase;
import com.valiha.reservation.application.useCase.reservation.FindOneReservationUseCase;
import java.util.List;
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
public class ReservationController {

  private final CreateReservationUseCase createUseCase;
  private final DeleteReservationUseCase deleteUseCase;
  private final EditReservationUseCase editUseCase;
  private final FindAllReservationsUseCase findAllUseCase;
  private final FindOneReservationUseCase findOneUseCase;

  public ReservationController(
    CreateReservationUseCase createUseCase,
    DeleteReservationUseCase deleteUseCase,
    EditReservationUseCase editUseCase,
    FindAllReservationsUseCase findAllUseCase,
    FindOneReservationUseCase findOneUseCase
  ) {
    this.createUseCase = createUseCase;
    this.deleteUseCase = deleteUseCase;
    this.editUseCase = editUseCase;
    this.findAllUseCase = findAllUseCase;
    this.findOneUseCase = findOneUseCase;
  }

  @PostMapping
  public ReservationResponseDto create(
    @RequestBody ReservationRequestDto requestDto
  ) {
    return this.createUseCase.execute(requestDto);
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
