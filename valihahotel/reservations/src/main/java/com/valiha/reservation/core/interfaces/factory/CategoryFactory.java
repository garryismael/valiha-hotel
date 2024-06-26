package com.valiha.reservation.core.interfaces.factory;

import com.valiha.reservation.core.entities.models.Category;

public interface CategoryFactory {
  Category create(
    String id,
    String title,
    String type,
    int pax,
    int bigBed,
    int smallBed,
    String image
  );
}
