package com.valiha.reservation.presentation.controller;

import com.valiha.reservation.application.dto.room.AvailableRoomRequestDto;
import com.valiha.reservation.application.dto.room.RoomRequestDto;
import com.valiha.reservation.application.dto.room.RoomResponseDto;
import com.valiha.reservation.application.useCase.room.FindAvailableRoomsUseCase;
import com.valiha.reservation.application.useCase.room.RoomDeleteUseCase;
import com.valiha.reservation.application.useCase.room.RoomFindAllUseCase;
import com.valiha.reservation.application.useCase.room.RoomGetUseCase;
import com.valiha.reservation.infrastructure.service.ReservationService;
import java.util.List;
import lombok.AllArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/rooms")
@AllArgsConstructor
public class RoomController {

  private final ReservationService reservationService;
  private final RoomFindAllUseCase findAllUseCase;
  private final RoomGetUseCase getUseCase;
  private final RoomDeleteUseCase deleteUseCase;
  private final FindAvailableRoomsUseCase findAvailableUseCase;

  @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
  public RoomResponseDto createRoom(
    RoomRequestDto dto,
    @RequestParam("image") MultipartFile multipartFile
  ) {
    return this.reservationService.create(dto, multipartFile);
  }

  @GetMapping
  public List<RoomResponseDto> getRooms() {
    return this.findAllUseCase.execute();
  }

  @GetMapping("/available")
  public List<RoomResponseDto> findAvailableRoom(
    AvailableRoomRequestDto requestDto
  ) {
    return this.findAvailableUseCase.execute(requestDto);
  }

  @GetMapping("/{id}")
  public RoomResponseDto getRoom(@PathVariable("id") String id) {
    return this.getUseCase.execute(id);
  }

  @PutMapping(value = "/{id}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
  public RoomResponseDto editRoom(
    @PathVariable String id,
    RoomRequestDto dto,
    @RequestParam(name = "image", required = false) MultipartFile multipartFile
  ) {
    return this.reservationService.update(id, dto, multipartFile);
  }

  @DeleteMapping("/{id}")
  public void deleteRoom(@PathVariable("id") String id) {
    this.deleteUseCase.execute(id);
  }
}
