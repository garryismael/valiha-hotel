package com.valiha.users.presentation.config;

import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import io.swagger.v3.oas.models.security.SecurityRequirement;
import io.swagger.v3.oas.models.security.SecurityScheme;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class WebSecurity {

  private static final String[] AUTH_WHITELIST = {
    "/docs/**",
    "/api-docs/**",
    "/uploads/**",
    "/static/**",
  };

  @Bean
  SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    http
      .csrf(c -> c.disable())
      .cors(c -> c.disable())
      .authorizeHttpRequests(authz -> {
        authz
          .requestMatchers(AUTH_WHITELIST)
          .permitAll()
          .anyRequest()
          .authenticated();
      });

    http.oauth2ResourceServer(
      (oauth2 -> oauth2.jwt(Customizer.withDefaults()))
    );
    return http.build();
  }

  @Bean
  OpenAPI openAPI() {
    return new OpenAPI()
      .addSecurityItem(
        new SecurityRequirement().addList("Bearer Authentication")
      )
      .components(
        new Components()
          .addSecuritySchemes("Bearer Authentication", createAPIKeyScheme())
      )
      .info(
        new Info()
          .title("User Service API")
          .description("Micro service of User of Valiha Hotel")
          .version("1.0")
          .contact(
            new Contact()
              .name("Garry")
              .email("tahinjanaharygarry@gmail.com")
              .url("tahinjanaharygarry@gmail.com")
          )
          .license(
            new License().name("Owned by Valiha Hotel").url("valihahotel.com")
          )
      );
  }

  private SecurityScheme createAPIKeyScheme() {
    return new SecurityScheme()
      .type(SecurityScheme.Type.HTTP)
      .bearerFormat("JWT")
      .scheme("bearer");
  }
}
