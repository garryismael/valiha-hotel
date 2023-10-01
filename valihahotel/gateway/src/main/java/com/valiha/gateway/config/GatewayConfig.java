package com.valiha.gateway.config;

import org.springframework.cloud.client.discovery.ReactiveDiscoveryClient;
import org.springframework.cloud.gateway.discovery.DiscoveryClientRouteDefinitionLocator;
import org.springframework.cloud.gateway.discovery.DiscoveryLocatorProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class GatewayConfig {

  @Bean
  DiscoveryClientRouteDefinitionLocator discoveryClientRouteDefinitionLocator(
    ReactiveDiscoveryClient rdc,
    DiscoveryLocatorProperties dlp
  ) {
    return new DiscoveryClientRouteDefinitionLocator(rdc, dlp);
  }
}
