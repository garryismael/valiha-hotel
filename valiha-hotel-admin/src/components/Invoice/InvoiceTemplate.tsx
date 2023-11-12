import { DATE_TIME_FORMAT } from "@/constants/date";
import { Reservation } from "@/domain/entities/reservation";
import { getReservationPrice } from "@/lib/utils/reservation";
import { displayDestination } from "@/lib/utils/shuttle";
import moment from "moment";
import { useSession } from "next-auth/react";
import Image from "next/image";

type Props = {
  reservation: Reservation;
};

const InvoiceTemplate = (props: Props) => {
  const { reservation } = props;
  const now = moment().format(DATE_TIME_FORMAT);
  const shuttle = process.env.NEXT_PUBLIC_SHUTTLE_PRICE;
  const breakfast = process.env.NEXT_PUBLIC_BREAKFAST_PRICE;

  return (
    <div className="invoice-box !w-full">
      <table cellPadding="0" cellSpacing="0">
        <tr className="top">
          <td colSpan={2}>
            <table>
              <tr>
                <td className="title relative">
                  <Image
                    src="/images/logo.png"
                    alt="logo"
                    width={100}
                    height={100}
                    className="w-100 h-[100]"
                  />
                </td>

                <td>
                  Reservation #: {reservation.id}
                  <br />
                  Crée le: {now}
                  <br />
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <tr className="information">
          <td colSpan={2}>
            <table>
              <tr>
                <td>
                  Valiha Hôtel
                  <br />
                  IMMEUBLE VALIHA ANTANIMENA,
                  <br />
                  IVG 204 Antananarivo, 101
                </td>

                <td>
                  {reservation.client.firstName}
                  <br />
                  {reservation.client.lastName}
                  <br />
                  {reservation.client.phoneNumber}
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <tr className="information">
          <td className="text-lg font-bold" colSpan={2}>
            Réservation de chambre
          </td>
        </tr>
        <tr className="information">
          <td colSpan={2}>
            <table>
              <tr>
                <td>
                  Nombre de Pax
                  <br />
                  Date de départ
                  <br />
                  Date d'arrivée
                </td>
                <td>
                  {reservation.pax}
                  <br />
                  {reservation.checkIn}
                  <br />
                  {reservation.checkOut}
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <tr className="heading">
          <td>Méthode de paiement</td>
          <td>Orange Money</td>
        </tr>
        <tr className="detail">
          <td></td>
          <td></td>
        </tr>

        <tr className="heading mt-2">
          <td>Chambres</td>
          <td>Prix</td>
        </tr>

        {reservation.rooms.map((room) => (
          <tr className="item">
            <td>{room.category.title}</td>

            <td>{room.price}</td>
          </tr>
        ))}

        <tr className="heading !my-4">
          <td>Navettes</td>
          <td>Prix</td>
        </tr>

        {reservation.shuttles.map((data) => (
          <tr className="item">
            <td>{displayDestination(data.destination)}</td>
            <td>{shuttle}</td>
          </tr>
        ))}

        <tr className="heading !my-4">
          <td>Petit-déjeuner</td>
          <td>Prix</td>
        </tr>

        {reservation.breakfasts.map((data) => (
          <tr className="item last">
            <td>{data.date}</td>
            <td>{parseInt(breakfast as string) * reservation.pax}</td>
          </tr>
        ))}

        <tr className="heading">
          <td>Remise</td>
          <td>{reservation.payment.discount} %</td>
        </tr>
        <tr className="detail">
          <td></td>
          <td></td>
        </tr>

        <tr>
          <td></td>
          <td className="font-bold text-lg">
            Total: {getReservationPrice(reservation)} MGA
          </td>
        </tr>
      </table>
    </div>
  );
};

export default InvoiceTemplate;
