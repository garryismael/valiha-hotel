package com.valiha.location.core.interfaces.models;

public interface IPayment {
  String getId();

  int getDiscount();

  String getState();

  boolean discountIsValid();

  boolean stateIsValid();
}
