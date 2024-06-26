package com.valiha.reservation.infrastructure.repository;

import com.valiha.reservation.application.dto.payment.PaymentRequestDto;
import com.valiha.reservation.application.dto.payment.PaymentResponseDto;
import com.valiha.reservation.infrastructure.config.FeignConfig;
import java.util.List;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

@FeignClient(name = "PAYMENTS-SERVICE", configuration = FeignConfig.class)
public interface ApiPaymentService {
  @GetMapping(
    value = "/payments/ids",
    consumes = MediaType.APPLICATION_JSON_VALUE
  )
  List<PaymentResponseDto> findAllByIds(@RequestParam List<String> ids);

  @PostMapping(value = "/payments", consumes = MediaType.APPLICATION_JSON_VALUE)
  PaymentResponseDto create(@RequestBody PaymentRequestDto requestDto);

  @GetMapping(
    value = "/payments/{id}",
    consumes = MediaType.APPLICATION_JSON_VALUE
  )
  PaymentResponseDto findOneById(@PathVariable String id);
}
