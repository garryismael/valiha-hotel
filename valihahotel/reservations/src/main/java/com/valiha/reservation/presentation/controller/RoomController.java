package com.valiha.reservation.presentation.controller;

import com.valiha.reservation.application.dto.room.RoomRequestDto;
import com.valiha.reservation.application.dto.room.RoomResponseDto;
import com.valiha.reservation.application.useCase.room.RoomDeleteUseCase;
import com.valiha.reservation.application.useCase.room.RoomFindAllUseCase;
import com.valiha.reservation.application.useCase.room.RoomGetUseCase;
import com.valiha.reservation.infrastructure.service.RoomService;
import java.util.List;
import org.springframework.http.codec.multipart.FilePart;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/rooms")
public class RoomController {

  private final RoomService roomService;
  private final RoomFindAllUseCase findAllUseCase;
  private final RoomGetUseCase getUseCase;
  private final RoomDeleteUseCase deleteUseCase;

  public RoomController(
    RoomService roomService,
    RoomGetUseCase getUseCase,
    RoomFindAllUseCase findAllUseCase,
    RoomDeleteUseCase deleteUseCase
  ) {
    this.roomService = roomService;
    this.findAllUseCase = findAllUseCase;
    this.getUseCase = getUseCase;
    this.deleteUseCase = deleteUseCase;
  }

  @PostMapping
  public Mono<RoomResponseDto> createRoom(
    RoomRequestDto dto,
    @RequestPart("image") Mono<FilePart> file
  ) {
    return this.roomService.create(dto, file);
  }

  @GetMapping
  public List<RoomResponseDto> getRooms() {
    return this.findAllUseCase.execute();
  }

  @GetMapping("/{id}")
  public RoomResponseDto getRoom(@PathVariable("id") String id) {
    return this.getUseCase.execute(id);
  }

  @PutMapping("/{id}")
  public Mono<RoomResponseDto> editRoom(
    @PathVariable("id") String id,
    RoomRequestDto dto,
    @RequestPart(name = "image", required = false) Mono<FilePart> file
  ) {
    return this.roomService.update(id, dto, file);
  }

  @DeleteMapping("/{id}")
  public void deleteRoom(@PathVariable("id") String id) {
    this.deleteUseCase.execute(id);
  }
}
