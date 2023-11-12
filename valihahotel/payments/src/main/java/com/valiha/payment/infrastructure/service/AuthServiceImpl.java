package com.valiha.payment.infrastructure.service;

import com.valiha.payment.application.services.AuthService;
import com.valiha.payment.core.entities.models.User;
import com.valiha.payment.core.interfaces.factory.UserFactory;
import lombok.AllArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationToken;

@AllArgsConstructor
public class AuthServiceImpl implements AuthService {

  private final UserFactory userFactory;

  @Override
  public User getUser() {
    Authentication authentication = SecurityContextHolder
      .getContext()
      .getAuthentication();

    if (
      authentication != null && authentication instanceof JwtAuthenticationToken
    ) {
      JwtAuthenticationToken jwtToken = (JwtAuthenticationToken) authentication;
      Jwt jwt = jwtToken.getToken();

      User user = userFactory.create(
        jwt.getClaimAsString("sub"),
        jwt.getClaimAsString("given_name"),
        jwt.getClaimAsString("family_name"),
        jwt.getClaimAsString("phone_number"),
        jwt.getClaimAsString("email"),
        jwt.getClaimAsString("image")
      );
      return user;
    }
    return null;
  }
}
