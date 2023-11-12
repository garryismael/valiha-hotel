package com.valiha.payment.infrastructure.constants;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class UserData {

  public static String BASE_URL;

  @Value("${public-upload-base-url}")
  public void setBaseUrl(String value) {
    BASE_URL = value;
  }

  public static String getBaseUrl() {
    return BASE_URL;
  }
}