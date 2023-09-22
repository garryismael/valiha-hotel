package com.valiha.users.presentation.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.reactive.EnableWebFluxSecurity;
import org.springframework.security.config.web.server.ServerHttpSecurity;
import org.springframework.security.config.web.server.ServerHttpSecurity.CorsSpec;
import org.springframework.security.config.web.server.ServerHttpSecurity.CsrfSpec;
import org.springframework.security.web.server.SecurityWebFilterChain;

@Configuration
@EnableWebFluxSecurity
public class WebSecurity {

  private static final String[] AUTH_WHITELIST = {
    "/docs/**",
    "/api-docs/**",
    "/uploads/**",
    "/static/**",
  };

  @Bean
  SecurityWebFilterChain filterChain(ServerHttpSecurity http) throws Exception {
    Customizer<CsrfSpec> customizer = new Customizer<CsrfSpec>() {
      @Override
      public void customize(CsrfSpec t) {
        t.disable();
      }
    };

    Customizer<CorsSpec> cors = new Customizer<CorsSpec>() {
      @Override
      public void customize(CorsSpec c) {
        c.disable();
      }
    };

    http
      .csrf(customizer)
      .cors(cors)
      .authorizeExchange(exchange ->
        exchange
          .pathMatchers(AUTH_WHITELIST)
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
