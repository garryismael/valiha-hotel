package com.valiha.reservation.application.utils;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;
import java.util.Date;

public class DateFormatter {

  public static String parse(Date date, String pattern) {
    SimpleDateFormat dateFormat = new SimpleDateFormat(pattern);
    return dateFormat.format(date);
  }

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

  public static Date parseToDate(String date, String pattern) {
    if (date == null) return null;
    SimpleDateFormat dateFormat = new SimpleDateFormat(pattern);
    try {
      return dateFormat.parse(date);
    } catch (ParseException e) {
      return null;
    }
  }
}
