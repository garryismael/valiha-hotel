package com.valiha.reservation.core.entities.factory;

import com.valiha.reservation.core.entities.models.Breakfast;
import com.valiha.reservation.core.interfaces.factory.BreakfastFactory;
import java.util.Date;

public class BreakfastFactoryImpl implements BreakfastFactory {

  @Override
  public Breakfast create(String id, Date date, String state) {
    return Breakfast.builder().id(id).date(date).state(state).build();
  }
}
