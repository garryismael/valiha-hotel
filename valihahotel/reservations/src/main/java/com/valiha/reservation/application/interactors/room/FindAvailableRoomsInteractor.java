package com.valiha.reservation.application.interactors.room;

import com.valiha.reservation.application.dto.reservation.ReservationRequestDto;
import com.valiha.reservation.application.dto.room.RoomResponseDto;
import com.valiha.reservation.application.presenter.GenericPresenter;
import com.valiha.reservation.application.repository.RoomRepository;
import com.valiha.reservation.application.useCase.room.FindAvailableRoomsUseCase;
import com.valiha.reservation.core.constant.AppReservation;
import com.valiha.reservation.core.entities.models.Room;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import lombok.AllArgsConstructor;

@AllArgsConstructor
public class FindAvailableRoomsInteractor implements FindAvailableRoomsUseCase {

  private final RoomRepository roomRepository;
  private final GenericPresenter<RoomResponseDto> roomPresenter;

  @Override
  public List<RoomResponseDto> execute(String startDate, String endDate) {
    Date checkIn = ReservationRequestDto.convert(
      startDate,
      AppReservation.DATE_FORMAT
    );
    Date checkOut = ReservationRequestDto.convert(
      endDate,
      AppReservation.DATE_FORMAT
    );

    if (checkIn == null || checkOut == null) {
      return this.roomPresenter.prepareSuccessView(new ArrayList<>());
    }

    List<Room> rooms =
      this.roomRepository.findAllAvailableRooms(checkIn, checkOut);
    List<RoomResponseDto> responseDtos = RoomResponseDto.fromList(rooms);
    return this.roomPresenter.prepareSuccessView(responseDtos);
  }
}
