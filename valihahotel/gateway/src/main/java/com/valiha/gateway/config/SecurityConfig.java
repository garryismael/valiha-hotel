package com.valiha.gateway.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.reactive.EnableWebFluxSecurity;
import org.springframework.security.config.web.server.ServerHttpSecurity;
import org.springframework.security.web.server.SecurityWebFilterChain;

@Configuration
@EnableWebFluxSecurity
public class SecurityConfig {

  private static final String[] AUTH_API_GET = {
    "/LOCATIONS-SERVICE/cars/**",
    "/LOCATIONS-SERVICE/uploads/**",
    "/RESERVATIONS-SERVICE/docs/**",
    "/RESERVATIONS-SERVICE/rooms/**",
    "/RESERVATIONS-SERVICE/static/**",
    "/RESERVATIONS-SERVICE/uploads/**",
    "/RESERVATIONS-SERVICE/api-docs/**",
    "/RESERVATIONS-SERVICE/categories/**",
    "/USERS-SERVICE/uploads/**",
  };
  private static final String[] AUTH_RESERVATION = {
    "/RESERVATIONS-SERVICE/reservations/**",
    "/RESERVATIONS-SERVICE/categories/**",
  };

  @Bean
  SecurityWebFilterChain securityWebFilterChain(ServerHttpSecurity http) {
    http
      .cors(c -> c.disable())
      .csrf(c -> c.disable())
      .authorizeExchange(exchange ->
        exchange
          .pathMatchers(HttpMethod.OPTIONS, "/**")
          .permitAll()
          .pathMatchers(HttpMethod.GET, AUTH_API_GET)
          .permitAll()
          .pathMatchers(HttpMethod.POST, AUTH_RESERVATION)
          .permitAll()
          .anyExchange()
          .authenticated()
      );

    http.oauth2ResourceServer(
      (oauth2 -> oauth2.jwt(Customizer.withDefaults()))
    );
    return http.build();
  }
}
