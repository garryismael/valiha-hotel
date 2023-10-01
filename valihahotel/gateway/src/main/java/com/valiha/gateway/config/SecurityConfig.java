package com.valiha.gateway.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.reactive.EnableWebFluxSecurity;
import org.springframework.security.config.web.server.ServerHttpSecurity;
import org.springframework.security.web.server.SecurityWebFilterChain;

@Configuration
@EnableWebFluxSecurity
public class SecurityConfig {

  @Bean
  public SecurityWebFilterChain securityWebFilterChain(
    ServerHttpSecurity http
  ) {
    http
      .cors(c -> c.disable())
      .csrf(c -> c.disable())
      .authorizeExchange(exchange -> exchange.anyExchange().authenticated());

    http.oauth2ResourceServer(
      (oauth2 -> oauth2.jwt(Customizer.withDefaults()))
    );
    return http.build();
  }
}
