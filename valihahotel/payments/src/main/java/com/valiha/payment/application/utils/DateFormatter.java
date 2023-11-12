package com.valiha.payment.application.utils;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;

public class DateFormatter {

  public static String parse(LocalDateTime dateTime, String pattern) {
    DateTimeFormatter formatter = DateTimeFormatter.ofPattern(pattern);
    return dateTime.format(formatter);
  }

  public static LocalDateTime parseToDateTime(String date, String pattern) {
    if (date == null) return null;
    DateTimeFormatter formatter = DateTimeFormatter.ofPattern(pattern);
    try {
      return LocalDateTime.parse(date, formatter);
    } catch (DateTimeParseException ex) {
      return null;
    }
  }
}
