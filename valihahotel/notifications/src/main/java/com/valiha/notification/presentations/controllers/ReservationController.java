package com.valiha.notification.presentations.controllers;

import com.valiha.notification.domain.Reservation;
import com.valiha.notification.useCases.interfaces.MailService;
import freemarker.template.TemplateException;
import jakarta.mail.MessagingException;
import java.io.IOException;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/reservations")
@AllArgsConstructor
public class ReservationController {

  private final MailService service;

  @PostMapping
  public void sendEmail(@RequestBody Reservation reservation)
    throws MessagingException, IOException, TemplateException {
    this.service.sendReservation(reservation);
  }
}
