package com.valiha.location.presentation.config;

import com.valiha.location.presentation.exception.ApiErrorDecoder;
import feign.codec.ErrorDecoder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class FeignConfig {

  @Bean
  public ErrorDecoder errorDecoder() {
    return new ApiErrorDecoder();
  }
}
