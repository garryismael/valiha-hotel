package com.valiha.gateway.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.web.server.ServerHttpSecurity;
import org.springframework.security.config.web.server.ServerHttpSecurity.CsrfSpec;
import org.springframework.security.web.server.SecurityWebFilterChain;

@Configuration
public class SecurityConfig {

  @Bean
  public SecurityWebFilterChain securityWebFilterChain(
    ServerHttpSecurity http
  ) {
    Customizer<CsrfSpec> customizer = new Customizer<CsrfSpec>() {
      @Override
      public void customize(CsrfSpec t) {
        t.disable();
      }
    };
    http
      .csrf(customizer)
      .authorizeExchange(exchange -> exchange.anyExchange().authenticated());

    http.oauth2ResourceServer(
      (oauth2 -> oauth2.jwt(Customizer.withDefaults()))
    );
    return http.build();
  }
}
