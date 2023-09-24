package com.valiha.location.infrastructure.data;

import com.valiha.location.core.entities.models.Location;
import java.util.Date;
import java.util.List;
import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(value = "locations")
@Builder
@Data
public class LocationDataMapper {

  private String id;
  private String state;
  private Date start;
  private Date end;
  private String destination;
  private String reason;

  private CarDataMapper car;

  @Transient
  private ClientDataMapper client;

  private String clientId;

  @Transient
  private PaymentDataMapper payment;

  private String paymentId;

  public static Location toLocation(LocationDataMapper dataMapper) {
    return Location
      .builder()
      .id(dataMapper.id)
      .state(dataMapper.state)
      .start(dataMapper.start)
      .end(dataMapper.end)
      .destination(dataMapper.destination)
      .reason(dataMapper.reason)
      .car(CarDataMapper.toCar(dataMapper.car))
      .client(ClientDataMapper.toClient(dataMapper.client))
      .payment(PaymentDataMapper.toPayment(dataMapper.payment))
      .build();
  }

  public static LocationDataMapper from(Location location) {
    return LocationDataMapper
      .builder()
      .id(location.getId())
      .state(location.getState())
      .start(location.getStart())
      .end(location.getEnd())
      .destination(location.getDestination())
      .reason(location.getReason())
      .car(CarDataMapper.from(location.getCar()))
      .client(ClientDataMapper.from(location.getClient()))
      .clientId(location.getClient().getId())
      .payment(PaymentDataMapper.from(location.getPayment()))
      .paymentId(location.getPayment().getId())
      .build();
  }

  public static List<LocationDataMapper> from(List<Location> locations) {
    return locations.stream().map(LocationDataMapper::from).toList();
  }
}
