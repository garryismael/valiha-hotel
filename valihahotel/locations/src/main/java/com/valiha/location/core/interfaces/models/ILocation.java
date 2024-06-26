package com.valiha.location.core.interfaces.models;

import com.valiha.location.core.entities.models.Car;
import com.valiha.location.core.entities.models.Client;
import com.valiha.location.core.entities.models.Payment;
import java.util.Date;
import java.util.List;

public interface ILocation {
  String getId();

  String getState();

  Date getStart();

  Date getEnd();

  String getDestination();

  String getReason();

  Client getClient();

  List<Car> getCars();

  Payment getPayment();

  boolean stateIsValid();

  boolean startIsValid();

  boolean endIsValid();

  boolean destinationIsValid();

  boolean reasonIsValid();

  boolean clientIsValid();

  boolean carIsValid();

  boolean paymentIsValid();
}
