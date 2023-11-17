package com.valiha.notification.useCases.interfaces;

import com.valiha.notification.domain.Location;
import freemarker.template.TemplateException;
import jakarta.mail.MessagingException;
import java.io.IOException;

public interface LocationService {
  void sendLocation(Location location)
    throws MessagingException, IOException, TemplateException;
}
