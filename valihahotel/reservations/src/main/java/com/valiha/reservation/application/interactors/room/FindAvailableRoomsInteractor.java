package com.valiha.reservation.application.interactors.room;

import com.valiha.reservation.application.dto.reservation.ReservationRequestDto;
import com.valiha.reservation.application.dto.room.AvailableRoomRequestDto;
import com.valiha.reservation.application.dto.room.RoomResponseDto;
import com.valiha.reservation.application.presenter.GenericPresenter;
import com.valiha.reservation.application.repository.ReservationRepository;
import com.valiha.reservation.application.repository.RoomRepository;
import com.valiha.reservation.application.useCase.room.FindAvailableRoomsUseCase;
import com.valiha.reservation.core.constant.AppReservation;
import com.valiha.reservation.core.entities.models.Reservation;
import com.valiha.reservation.core.entities.models.Room;
import java.util.Date;
import java.util.List;
import lombok.AllArgsConstructor;

@AllArgsConstructor
public class FindAvailableRoomsInteractor implements FindAvailableRoomsUseCase {

  private final RoomRepository roomRepository;
  private final ReservationRepository reservationRepository;
  private final GenericPresenter<RoomResponseDto> roomPresenter;

  @Override
  public List<RoomResponseDto> execute(AvailableRoomRequestDto requestDto) {
    Date checkIn = ReservationRequestDto.convert(
      requestDto.getCheckIn(),
      AppReservation.DATE_FORMAT
    );
    Date checkOut = ReservationRequestDto.convert(
      requestDto.getCheckOut(),
      AppReservation.DATE_FORMAT
    );

    String hotelType = requestDto.getCategoryType();
    int adult = requestDto.getAdult();
    int kid = requestDto.getKid();
    int room = requestDto.getRoom();

    boolean available =
      this.reservationRepository.isDateRangeAvailable(checkIn, checkOut);

    List<String> roomIds = List.of();

    List<Room> rooms =
      this.roomRepository.findAllBy(hotelType, adult, kid, room, roomIds);
    List<RoomResponseDto> responseDtos = RoomResponseDto.fromList(rooms);
    return this.roomPresenter.prepareSuccessView(responseDtos);
  }
}
