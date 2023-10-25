import { Reservation } from "@/domain/entities/reservation";
import { User } from "@/domain/entities/user";
import Image from "next/image";
import React from "react";
import styles from "@/styles/invoice.module.css";

type Props = {
  reservation: Reservation;
  user: User;
};

const InvoiceTemplate = (props: Props) => {
  const { reservation, user } = props;
  return (
    <div className={styles.facture}>
      <header>
        <h1>Facture</h1>
        <address>
          <p>
            Client:{reservation.client.firstName} {reservation.client.lastName}
          </p>
          <p>Email: {reservation.client.email}</p>
          <p>Téléphone: {reservation.client.phoneNumber}</p>
        </address>
        <section>
          <div className={styles.logo}>
            <Image alt="logo" src="/images/logo.png" height={150} width={120}/>
            <span className={styles.title}>Valiha Hotel</span>
          </div>
        </section>
      </header>
      <article>
        <address>
          <p>
            Employé: {user.firstName}{" "}
            {user.lastName}
          </p>
          <p>Email: {user.email}</p>
          <p>Contact: {user.phoneNumber}</p>
        </address>
        <table className={styles.meta}>
          <tr>
            <th>
              <span>Facture N° #</span>
            </th>
            <td>
              <span>{reservation.id}</span>
            </td>
          </tr>
          <tr>
            <th>
              <span>Date de départ</span>
              <span>Date d'arrivée</span>
            </th>
            <td>
              <span>{reservation.checkIn}</span>
              <span>{reservation.checkOut}</span>
            </td>
          </tr>
        </table>
        <table className={styles.inventory}>
          <thead>
            <tr>
              <th>
                <span>Activité</span>
              </th>
              <th>
                <span>N°PAV</span>
              </th>
              <th>
                <span>Frais</span>
              </th>
              <th>
                <span>Total mois payés</span>
              </th>
              <th>
                <span>Total Frais</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <span>{reservation.parking}</span>
              </td>
            </tr>
          </tbody>
        </table>
        <table className={styles.balance}>
          <tr>
            <th>
              <span>Total</span>
            </th>
            <td>
              <span>{reservation.payment.discount}</span> Ar
            </td>
          </tr>
        </table>
      </article>
      <aside>
        <div>
          <p className={styles.divider}>Merci beaucoup</p>
        </div>
      </aside>
    </div>
  );
};

export default InvoiceTemplate;
