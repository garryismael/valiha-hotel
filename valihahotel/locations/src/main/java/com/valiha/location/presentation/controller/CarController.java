package com.valiha.location.presentation.controller;

import com.valiha.location.application.dto.car.CarRequestDto;
import com.valiha.location.application.dto.car.CarResponseDto;
import com.valiha.location.application.useCase.car.DeleteCarUseCase;
import com.valiha.location.application.useCase.car.FindAllCarsUseCase;
import com.valiha.location.application.useCase.car.FindOneCarUseCase;
import com.valiha.location.infrastructure.service.CarService;
import java.util.List;
import org.springframework.http.codec.multipart.FilePart;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/cars")
public class CarController {

  private final CarService carService;
  private final FindAllCarsUseCase findAllUseCase;
  private final FindOneCarUseCase findOneUseCase;
  private final DeleteCarUseCase deleteUseCase;

  public CarController(
    CarService carService,
    FindAllCarsUseCase findAllUseCase,
    FindOneCarUseCase findOneUseCase,
    DeleteCarUseCase deleteUseCase
  ) {
    this.carService = carService;
    this.findAllUseCase = findAllUseCase;
    this.findOneUseCase = findOneUseCase;
    this.deleteUseCase = deleteUseCase;
  }

  @PostMapping
  public Mono<CarResponseDto> create(
    @RequestBody CarRequestDto requestDto,
    @RequestPart(name = "image") Mono<FilePart> monoFilePart
  ) {
    return this.carService.create(requestDto, monoFilePart);
  }

  @PutMapping("/{id}")
  public Mono<CarResponseDto> edit(
    @PathVariable String id,
    @RequestBody CarRequestDto requestDto,
    @RequestPart(name = "image", required = false) Mono<FilePart> monoFilePart
  ) {
    return this.carService.edit(id, requestDto, monoFilePart);
  }

  @GetMapping("/{id}")
  public CarResponseDto findOne(@PathVariable String id) {
    return this.findOneUseCase.execute(id);
  }

  @GetMapping
  public List<CarResponseDto> findAll() {
    return this.findAllUseCase.execute();
  }

  @DeleteMapping("/{id}")
  public void delete(@PathVariable String id) {
    this.deleteUseCase.execute(id);
  }
}
