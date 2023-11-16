package com.valiha.notification.infrastructures.mail;

import com.valiha.notification.domain.Reservation;
import com.valiha.notification.infrastructures.MessageService;
import com.valiha.notification.useCases.interfaces.MailService;
import freemarker.template.Configuration;
import freemarker.template.TemplateException;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import lombok.AllArgsConstructor;
import org.springframework.core.io.ClassPathResource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.ui.freemarker.FreeMarkerTemplateUtils;

@Service
@AllArgsConstructor
public class MailServiceImpl implements MailService {

  private final JavaMailSender emailSender;
  private Configuration configuration;
  private MessageService messageService;

  @Override
  public void sendReservation(Reservation reservation)
    throws MessagingException, IOException, TemplateException {
    MimeMessage message = emailSender.createMimeMessage();
    MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");
    helper.setTo(reservation.getClient().getEmail());
    helper.setSubject(messageService.getMessage("object"));
    String emailContent = getEmailContent(reservation);
    helper.setText(emailContent, true);
    helper.addAttachment(
      "valihahotel-logo.png",
      new ClassPathResource("valihahotel-logo.png")
    );
    helper.addAttachment(
      "localisation-valihahotel.jpg",
      new ClassPathResource("localisation-valihahotel.jpg")
    );
    emailSender.send(message);
  }

  String getEmailContent(Reservation reservation)
    throws IOException, TemplateException {
    Map<String, Object> model = new HashMap<>();
    model.put("client", reservation.getClient());
    model.put("confirmation", messageService.getMessage("confirmation"));
    model.put("hello", messageService.getMessage("hello"));
    model.put(
      "confirmation_wish",
      messageService.getMessage("confirmation_wish")
    );
    model.put(
      "detail_reservation",
      messageService.getMessage("detail_reservation")
    );
    return getTemplateContent(model, "mail/reservation.ftl");
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
}
