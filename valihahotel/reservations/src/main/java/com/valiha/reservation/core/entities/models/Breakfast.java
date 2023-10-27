package com.valiha.reservation.core.entities.models;

import java.util.Date;
import lombok.Getter;

@Getter
public class Breakfast {

  private String id;
  private Date date;

  public class Builder {

    private final Breakfast breakfast;

    public Builder(Breakfast breakfast) {
      this.breakfast = breakfast;
    }

    public Builder id(String id) {
      this.breakfast.id = id;
      return this;
    }

    public Builder date(Date date) {
      this.breakfast.date = date;
      return this;
    }

    public Breakfast build() {
      return this.breakfast;
    }
  }

  public static Builder builder() {
    Breakfast breakfast = new Breakfast();
    return breakfast.new Builder(breakfast);
  }
}
