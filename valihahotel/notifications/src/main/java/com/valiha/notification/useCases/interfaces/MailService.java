package com.valiha.notification.useCases.interfaces;

import com.valiha.notification.domain.Reservation;
import freemarker.template.TemplateException;
import jakarta.mail.MessagingException;
import java.io.IOException;

public interface MailService {
  void sendReservation(Reservation reservation)
    throws MessagingException, IOException, TemplateException;
}
