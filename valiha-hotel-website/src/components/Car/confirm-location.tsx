import { Car } from "@/domain/entities/car";
import {
  CreateLocationInteractor,
  CreateLocationUseCase,
  LocationRequest,
} from "@/domain/use-cases/location";
import container from "@/infrastructure/config/container.config";
import { dateToString } from "@/infrastructure/utils/date";
import { getDays } from "@/utils/date";
import { getLocationPrice } from "@/utils/location";
import {
  Button,
  Divider,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

type Props = {
  car: Car;
  request: LocationRequest;
  btnRef: React.RefObject<HTMLButtonElement>;
};

const ConfirmLocation = ({ request, car, btnRef }: Props) => {
  const [loading, setLoading] = useState(false);
  const { t, i18n } = useTranslation();
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const router = useRouter();

  const handleConfirm = async () => {
    setLoading(true);
    const createUseCase = container.resolve<CreateLocationUseCase>(
      CreateLocationInteractor
    );

    try {
      await createUseCase.execute({
        carId: car.id,
        client: request.client,
        end: request.end,
        start: request.start,
        destination: request.destination,
        reason: request.reason,
      });
      setLoading(false);
      toast.success("Location ajoutée avec succès!", {
        position: "bottom-center",
        toastId: "create-breakfast",
      });
      onClose();
      router.push("/locations/cars/", "/locations/cars/", {
        locale: i18n.language,
      });
    } catch (err) {
      toast.error("Veuillez ressayer", {
        position: "bottom-center",
        toastId: "create-breakfast",
      });
    }
  };

  return (
    <>
      <Button
        ref={btnRef}
        variant="light"
        onPress={onOpen}
        className="btn btn-orange w-fit self-start invisible"
      >
        {t("confirmer")}
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="2xl">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {t("confirm_location")}
              </ModalHeader>
              <ModalBody>
                <div className="w-full">
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-medium">Voiture</h4>
                    <p className="flex flex-col text-right text-small text-default-400">
                      {car.mark}
                    </p>
                  </div>
                  <Divider className="my-3 w-full" />
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-medium">Client</h4>
                    <p className="flex flex-col text-right text-small text-default-400">
                      <span>
                        {request.client.firstName} {request.client.lastName}
                      </span>
                      <span>{request.client.email}</span>
                      <span>{request.client.phoneNumber}</span>
                    </p>
                  </div>
                  <Divider className="my-3 w-full" />
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-medium">Tarif</h4>
                    <p className="flex flex-col text-right text-small text-default-400">
                      {car.price} MGA / jour
                    </p>
                  </div>
                  <Divider className="my-3 w-full" />
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-medium">Date location</h4>
                    <p className="flex flex-col text-right text-small text-default-400">
                      <span>
                        {dateToString(request.start)} -{" "}
                        {dateToString(request.end)}
                      </span>
                      <span>
                        {getDays(request.start, request.end) + 1} jour(s)
                      </span>
                    </p>
                  </div>
                  <Divider className="my-2 w-full" />
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-medium">Total</h4>
                    <p className="flex flex-col text-base font-bold">
                      {getLocationPrice(car, request)} MGA
                    </p>
                  </div>
                  <Divider className="my-2 w-full" />
                  <p className="text-sm text-primary-500">
                    NB: Un email sera envoyé pour confirmer votre location.
                  </p>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  variant="bordered"
                  className="text-reddish-orange-500 border-reddish-orange-500"
                  onPress={() => {
                    setLoading(false);
                    onClose();
                  }}
                >
                  {t("annuler")}
                </Button>
                <Button
                  variant="light"
                  className="btn-orange"
                  isLoading={loading}
                  onPress={handleConfirm}
                >
                  {t("confirmer")}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ConfirmLocation;
