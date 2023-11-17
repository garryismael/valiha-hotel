import { DATE_TIME_FORMAT } from "@/constants/date";
import { Location } from "@/domain/entities/location";
import { Transaction } from "@/domain/entities/transaction";
import { getLocationPrice } from "@/lib/utils/location";
import { getPaymentType } from "@/lib/utils/payment";
import { displayDestination } from "@/lib/utils/shuttle";
import moment from "moment";
import Image from "next/image";

type Props = {
  location: Location;
  transaction: Transaction;
};

const InvoiceLocationTemplate = (props: Props) => {
  const { location } = props;
  const now = moment().format(DATE_TIME_FORMAT);

  return (
    <div className="invoice-box !w-full">
      <table cellPadding="0" cellSpacing="0">
        <tbody>
          <tr className="top">
            <td colSpan={2}>
              <table>
                <tbody>
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
                      Location #: {location.id}
                      <br />
                      Crée le: {now}
                      <br />
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>

          <tr className="information">
            <td colSpan={2}>
              <table>
                <tbody>
                  <tr>
                    <td>
                      Valiha Hôtel
                      <br />
                      IMMEUBLE VALIHA ANTANIMENA,
                      <br />
                      IVG 204 Antananarivo, 101
                    </td>

                    <td>
                      {location.client.firstName}
                      <br />
                      {location.client.lastName}
                      <br />
                      {location.client.phoneNumber}
                    </td>
                  </tr>
                </tbody>
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
                <tbody>
                  <tr>
                    <td>
                      Date de début
                      <br />
                      Date de fin
                    </td>
                    <td>
                      <br />
                      {location.start}
                      <br />
                      {location.end}
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>

          <tr className="heading">
            <td>Méthode de paiement</td>
            <td>{getPaymentType(props.transaction.paymentType).value}</td>
          </tr>
          <tr className="detail">
            <td></td>
            <td></td>
          </tr>

          <tr className="heading !my-4">
            <td>Voitures</td>
            <td>Prix</td>
          </tr>

          {location.cars.map((car) => (
            <tr key={car.id} className="item">
              <td>{displayDestination(car.mark)}</td>
              <td>{car.price}</td>
            </tr>
          ))}


          <tr className="heading">
            <td>Remise</td>
            <td>{location.payment.discount} %</td>
          </tr>
          <tr className="detail">
            <td></td>
            <td></td>
          </tr>

          <tr>
            <td></td>
            <td className="font-bold text-lg">
              Total: {getLocationPrice(location)} MGA
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default InvoiceLocationTemplate;
