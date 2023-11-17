package com.valiha.notification.presentations.controllers;

import com.valiha.notification.domain.Location;
import com.valiha.notification.useCases.interfaces.LocationService;
import freemarker.template.TemplateException;
import jakarta.mail.MessagingException;
import java.io.IOException;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/locations")
@AllArgsConstructor
public class LocationController {

  private final LocationService service;

  @PostMapping
  public void sendEmail(@RequestBody Location location)
    throws MessagingException, IOException, TemplateException {
    this.service.sendLocation(location);
  }
}
