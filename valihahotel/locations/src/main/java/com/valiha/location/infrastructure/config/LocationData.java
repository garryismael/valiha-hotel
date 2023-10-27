package com.valiha.location.infrastructure.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class LocationData {

  public static String BASE_URL;

  @Value("${public-upload-base-url}")
  public void setBaseUrl(String value) {
    BASE_URL = value;
  }

  public static String getBaseUrl() {
    return BASE_URL;
  }
}
