package com.valiha.location.presentation.controller;

import com.valiha.location.application.dto.location.CommonLocationRequestDto;
import com.valiha.location.application.dto.location.LocationRequestDto;
import com.valiha.location.application.dto.location.LocationResponseDto;
import com.valiha.location.application.useCase.location.CreateLocationUseCase;
import com.valiha.location.application.useCase.location.DeleteLocationUseCase;
import com.valiha.location.application.useCase.location.EditLocationUseCase;
import com.valiha.location.application.useCase.location.FindAllLocationUseCase;
import com.valiha.location.application.useCase.location.FindOneLocationUseCase;
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
@RequestMapping("/locations")
public class LocationController {

  private final CreateLocationUseCase createUseCase;
  private final DeleteLocationUseCase deleteUseCase;
  private final EditLocationUseCase editUseCase;
  private final FindAllLocationUseCase findAllUseCase;
  private final FindOneLocationUseCase findOneUseCase;

  public LocationController(
    CreateLocationUseCase createUseCase,
    DeleteLocationUseCase deleteUseCase,
    EditLocationUseCase editUseCase,
    FindAllLocationUseCase findAllUseCase,
    FindOneLocationUseCase findOneUseCase
  ) {
    this.createUseCase = createUseCase;
    this.deleteUseCase = deleteUseCase;
    this.editUseCase = editUseCase;
    this.findAllUseCase = findAllUseCase;
    this.findOneUseCase = findOneUseCase;
  }

  @PostMapping
  public LocationResponseDto create(
    @RequestBody LocationRequestDto requestDto
  ) {
    return this.createUseCase.execute(requestDto);
  }

  @PutMapping("/{id}")
  public LocationResponseDto edit(
    @PathVariable String id,
    @RequestBody CommonLocationRequestDto requestDto
  ) {
    return this.editUseCase.execute(id, requestDto);
  }

  @GetMapping("/{id}")
  public LocationResponseDto findOne(@PathVariable String id) {
    return this.findOneUseCase.execute(id);
  }

  @GetMapping
  public List<LocationResponseDto> findAll() {
    return this.findAllUseCase.execute();
  }

  @DeleteMapping("/{id}")
  public void delete(@PathVariable String id) {
    this.deleteUseCase.execute(id);
  }
}
