package com.valiha.reservation.core.interfaces.factory;

import com.valiha.reservation.core.entities.models.Breakfast;
import java.util.Date;

public interface BreakfastFactory {
  Breakfast create(String id, Date date);
}
