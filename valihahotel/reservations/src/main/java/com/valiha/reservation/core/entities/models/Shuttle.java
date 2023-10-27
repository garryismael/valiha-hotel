package com.valiha.reservation.core.entities.models;

import java.time.LocalDateTime;
import lombok.Getter;

@Getter
public class Shuttle {

  private String id;
  private String flightName;
  private String flightNumber;
  private String destination;
  private LocalDateTime date;

  public class Builder {

    private final Shuttle shuttle;

    public Builder(Shuttle shuttle) {
      this.shuttle = shuttle;
    }

    public Builder id(String id) {
      this.shuttle.id = id;
      return this;
    }

    public Builder flightName(String flightName) {
      this.shuttle.flightName = flightName;
      return this;
    }

    public Builder flightNumber(String flightNumber) {
      this.shuttle.flightNumber = flightNumber;
      return this;
    }

    public Builder date(LocalDateTime date) {
      this.shuttle.date = date;
      return this;
    }

    public Builder destination(String destination) {
      this.shuttle.destination = destination;
      return this;
    }

    public Shuttle build() {
      return this.shuttle;
    }
  }

  public static Builder builder() {
    Shuttle shuttle = new Shuttle();
    return shuttle.new Builder(shuttle);
  }
}
