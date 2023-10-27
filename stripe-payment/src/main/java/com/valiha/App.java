package com.valiha;

import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.Charge;
import com.stripe.param.ChargeCreateParams;

/**
 * Hello world!
 *
 */
public class App {

  public static void main(String[] args) {
    Stripe.apiKey =
      "sk_test_51O27ATFScXYHfs1scxgZLIKYEaW2OZSG8cT2kSMfowf5T8SHwNTfokwYcMjFLbkFPfSM2tguihoyguaCB5AXU8ju00pwMMLgMb";
    ChargeCreateParams params = ChargeCreateParams
      .builder()
      .setAmount(Long.valueOf(1000)) // Montant en centimes (par exemple, 1000 centimes équivaut à 10 $).
      .setCurrency("usd")
      .setSource(
        "rk_test_51O27ATFScXYHfs1ssK2gPVhpZVyXy5tdzV4ZnO1olgghTP8BoRBz98KvtVZ3gmb9FE3CKTZJrVRRXDXkjLSAhadn00dwaXRwJV"
      ) // Utilisez un token de test, généré par Stripe.js ou Elements.
      .build();

    try {
      Charge charge = Charge.create(params);
      System.out.println("Paiement réussi : " + charge);
    } catch (StripeException e) {
      e.printStackTrace();
    }
  }
}
