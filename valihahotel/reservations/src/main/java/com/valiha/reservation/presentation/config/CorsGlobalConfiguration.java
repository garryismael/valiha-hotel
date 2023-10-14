package com.valiha.reservation.presentation.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsGlobalConfiguration implements WebMvcConfigurer {

  @Override
  public void addCorsMappings(CorsRegistry corsRegistry) {
    corsRegistry
      .addMapping("/**")
      .allowedOriginPatterns("*")
      .allowedMethods("*")
      .allowedHeaders("*")
      .maxAge(3600)
      .allowCredentials(true);
  }
}
