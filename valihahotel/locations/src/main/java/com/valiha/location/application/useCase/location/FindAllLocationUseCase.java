package com.valiha.location.application.useCase.location;

import com.valiha.location.application.dto.location.LocationResponseDto;
import java.util.List;

public interface FindAllLocationUseCase {
  List<LocationResponseDto> execute();
}
