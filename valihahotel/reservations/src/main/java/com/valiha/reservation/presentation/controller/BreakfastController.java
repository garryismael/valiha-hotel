package com.valiha.reservation.presentation.controller;

import com.valiha.reservation.application.dto.breakfast.BreakfastRequestDto;
import com.valiha.reservation.application.dto.breakfast.BreakfastResponseDto;
import com.valiha.reservation.application.useCase.breakfast.DeleteBreakfastUseCase;
import com.valiha.reservation.application.useCase.breakfast.EditBreakfastUseCase;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/breakfasts")
@AllArgsConstructor
public class BreakfastController {

  private final EditBreakfastUseCase editUseCase;
  private final DeleteBreakfastUseCase deleteUseCase;

  @PutMapping("/{id}")
  public BreakfastResponseDto edit(
    @PathVariable String id,
    @RequestBody BreakfastRequestDto requestDto
  ) {
    return this.editUseCase.execute(id, requestDto);
  }

  @DeleteMapping("/{id}/${reservationId}")
  public void delete(
    @PathVariable String id,
    @PathVariable("reservationId") String reservationId
  ) {
    this.deleteUseCase.execute(id, reservationId);
  }
}
