package com.valiha.notification.infrastructures.mail;

import com.valiha.notification.domain.Location;
import com.valiha.notification.infrastructures.MessageService;
import com.valiha.notification.useCases.interfaces.LocationService;
import freemarker.template.Configuration;
import freemarker.template.TemplateException;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import lombok.AllArgsConstructor;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.ui.freemarker.FreeMarkerTemplateUtils;

@AllArgsConstructor
public class LocationServiceImpl implements LocationService {

  private final JavaMailSender emailSender;
  private Configuration configuration;
  private MessageService messageService;

  String getEmailContent(Location location)
    throws IOException, TemplateException {
    Map<String, Object> model = new HashMap<>();
    model.put("client", location.getClient());
    model.put(
      "confirmation",
      messageService.getMessage("confirmation_location")
    );
    model.put("hello", messageService.getMessage("hello"));
    model.put(
      "confirmation_wish",
      messageService.getMessage("confirmation_wish")
    );
    return getTemplateContent(model, "mail/location.ftl");
  }

  private String getTemplateContent(
    Map<String, Object> model,
    String template
  ) {
    StringBuffer content = new StringBuffer();
    try {
      content.append(
        FreeMarkerTemplateUtils.processTemplateIntoString(
          configuration.getTemplate(template),
          model
        )
      );
      return content.toString();
    } catch (Exception e) {
      e.printStackTrace();
    }
    return "";
  }

  @Override
  public void sendLocation(Location location)
    throws MessagingException, IOException, TemplateException {
    MimeMessage message = emailSender.createMimeMessage();
    MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");
    helper.setTo(location.getClient().getEmail());
    helper.setSubject(messageService.getMessage("object"));
    String emailContent = getEmailContent(location);
    helper.setText(emailContent, true);
    emailSender.send(message);
  }
}
