package com.valiha.users.presentation.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.config.CorsRegistry;
import org.springframework.web.reactive.config.WebFluxConfigurer;

@Configuration
public class CorsGlobalConfiguration implements WebFluxConfigurer {

  @Override
  public void addCorsMappings(CorsRegistry corsRegistry) {
    corsRegistry
      .addMapping("/**")
      .allowedMethods("PUT", "DELETE")
      .allowedOriginPatterns("*")
      .maxAge(3600)
      .allowCredentials(true);
  }
}
