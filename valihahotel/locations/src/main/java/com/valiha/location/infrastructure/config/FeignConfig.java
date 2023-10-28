package com.valiha.location.infrastructure.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import feign.Logger;
import feign.RequestInterceptor;
import feign.RequestTemplate;
import feign.codec.ErrorDecoder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationToken;

@Configuration
public class FeignConfig implements RequestInterceptor {

  @Bean
  ErrorDecoder errorDecoder(ObjectMapper objectMapper) {
    return new ApiErrorDecoder(objectMapper);
  }

  @Override
  public void apply(RequestTemplate template) {
    Authentication authentication = SecurityContextHolder
      .getContext()
      .getAuthentication();

    if (
      authentication != null && authentication instanceof JwtAuthenticationToken
    ) {
      JwtAuthenticationToken jwtToken = (JwtAuthenticationToken) authentication;
      String token = jwtToken.getToken().getTokenValue();
      template.header("Authorization", String.format("Bearer %s", token));
    }
  }

  @Bean
  Logger.Level feignLoggerLevel() {
    return Logger.Level.FULL;
  }
}
