package com.valiha.reservation.infrastructure.data;

import com.valiha.reservation.application.dto.client.ClientResponseDto;
import com.valiha.reservation.application.dto.payment.PaymentResponseDto;
import com.valiha.reservation.core.entities.models.Reservation;
import java.util.Date;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Document(value = "reservations")
public class ReservationDataMapper {

  private String id;
  private Date checkIn;
  private Date checkOut;
  private String state;
  private boolean parking;
  private RoomDataMapper room;

  @Transient
  private ClientDataMapper client;

  private String clientId;

  @Transient
  private PaymentDataMapper payment;

  private String paymentId;

  public static Reservation toReservation(ReservationDataMapper dataMapper) {
    return Reservation
      .builder()
      .id(dataMapper.id)
      .checkIn(dataMapper.checkIn)
      .checkOut(dataMapper.checkOut)
      .state(dataMapper.state)
      .parking(dataMapper.parking)
      .room(RoomDataMapper.toRoom(dataMapper.room))
      .client(ClientDataMapper.toClient(dataMapper.client))
      .payment(PaymentDataMapper.toPayment(dataMapper.payment))
      .build();
  }

  public static Reservation toReservation(
    ReservationDataMapper dataMapper,
    ClientResponseDto clientResponseDto,
    PaymentResponseDto paymentResponseDto
  ) {
    return Reservation
      .builder()
      .id(dataMapper.id)
      .checkIn(dataMapper.checkIn)
      .checkOut(dataMapper.checkOut)
      .state(dataMapper.state)
      .parking(dataMapper.parking)
      .room(RoomDataMapper.toRoom(dataMapper.room))
      .client(ClientDataMapper.toClient(clientResponseDto))
      .payment(PaymentDataMapper.toPayment(paymentResponseDto))
      .build();
  }

  public static ReservationDataMapper from(Reservation reservation) {
    return ReservationDataMapper
      .builder()
      .id(reservation.getId())
      .checkIn(reservation.getCheckIn())
      .checkOut(reservation.getCheckOut())
      .state(reservation.getState())
      .parking(reservation.isParking())
      .room(RoomDataMapper.from(reservation.getRoom()))
      .client(ClientDataMapper.from(reservation.getClient()))
      .clientId(reservation.getClient().getId())
      .payment(PaymentDataMapper.from(reservation.getPayment()))
      .paymentId(reservation.getPayment().getId())
      .build();
  }

  public static ReservationDataMapper from(
    Reservation reservation,
    ClientDataMapper clientDataMapper,
    PaymentDataMapper paymentDataMapper
  ) {
    return ReservationDataMapper
      .builder()
      .id(reservation.getId())
      .checkIn(reservation.getCheckIn())
      .checkOut(reservation.getCheckOut())
      .state(reservation.getState())
      .parking(reservation.isParking())
      .room(RoomDataMapper.from(reservation.getRoom()))
      .client(clientDataMapper)
      .clientId(clientDataMapper.getId())
      .payment(paymentDataMapper)
      .paymentId(paymentDataMapper.getId())
      .build();
  }

  public static List<ReservationDataMapper> from(
    List<Reservation> reservations
  ) {
    return reservations.stream().map(ReservationDataMapper::from).toList();
  }
}
