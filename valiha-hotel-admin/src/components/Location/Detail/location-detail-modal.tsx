import { Location } from "@/domain/entities/location";
import useFormModal from "@/hooks/useFormModal";
import { EyeIcon } from "@/icons/table/eye-icon";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import Link from "next/link";
import LocationTotalAmount from "./location-amount";
import LocationDetail from "./location-detail";
import { If, Then } from "react-if";

const LocationDetailModal = ({ location }: { location: Location }) => {
  const { handleOpen, handleClose, show } = useFormModal();
  return (
    <>
      <Button
        onPress={handleOpen}
        isIconOnly
        variant="light"
        startContent={<EyeIcon size={20} fill="#979797" />}
      ></Button>
      <Modal
        isOpen={show}
        onOpenChange={handleClose}
        placement="top-center"
        scrollBehavior="outside"
        size="5xl"
        backdrop="blur"
        classNames={{
          base: "!w-[80rem] !max-w-[80rem]",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex items-center justify-between gap-1 pt-14">
                <h1>Detail d'une location</h1>
                <If condition={location.payment.state === "paid"}>
                  <Then>
                    <Link href={`/invoices/locations/${location.id}`}>
                      <Button variant="bordered" color="primary">
                        Facturer
                      </Button>
                    </Link>
                  </Then>
                </If>
              </ModalHeader>
              <ModalBody>
                <LocationDetail location={location} />
              </ModalBody>
              <ModalFooter>
                <LocationTotalAmount location={location} />
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default LocationDetailModal;
