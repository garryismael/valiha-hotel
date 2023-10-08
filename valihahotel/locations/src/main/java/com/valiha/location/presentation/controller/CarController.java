package com.valiha.location.presentation.controller;

import com.valiha.location.application.dto.car.CarRequestDto;
import com.valiha.location.application.dto.car.CarResponseDto;
import com.valiha.location.application.useCase.car.DeleteCarUseCase;
import com.valiha.location.application.useCase.car.FindAllCarsUseCase;
import com.valiha.location.application.useCase.car.FindOneCarUseCase;
import com.valiha.location.infrastructure.service.CarService;
import java.util.List;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/cars")
@AllArgsConstructor
public class CarController {

  private final CarService carService;
  private final FindAllCarsUseCase findAllUseCase;
  private final FindOneCarUseCase findOneUseCase;
  private final DeleteCarUseCase deleteUseCase;

  @PostMapping
  public CarResponseDto create(
    @RequestBody CarRequestDto requestDto,
    @RequestParam(name = "image") MultipartFile multipartFile
  ) {
    return this.carService.create(requestDto, multipartFile);
  }

  @PutMapping("/{id}")
  public CarResponseDto edit(
    @PathVariable String id,
    @RequestBody CarRequestDto requestDto,
    @RequestParam(name = "image", required = false) MultipartFile multipartFile
  ) {
    return this.carService.edit(id, requestDto, multipartFile);
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
