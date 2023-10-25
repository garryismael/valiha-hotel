import {
  CreateRoomInteractor,
  CreateRoomUseCase,
  RoomRequest,
} from "@/domain/use-cases/room";
import container from "@/infrastructures/config/container.config";
import { useDisclosure } from "@nextui-org/react";
import { useFormik } from "formik";
import { useAppDispatch } from "./useStore";
import { addRoom } from "@/lib/store/slices/room-slice";

export const useRoomForm = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const createRoom = container.resolve<CreateRoomUseCase>(CreateRoomInteractor);
  const dispatch = useAppDispatch();

  const formik = useFormik<RoomRequest>({
    initialValues: {
      title: "",
      categoryId: "",
      price: 0,
      file: null,
    },
    async onSubmit(values: RoomRequest) {
      onOpenChange();
      const room = await createRoom.execute(values);
      dispatch(addRoom(room));
    },
  });

  return { formik, isOpen, onOpen, onOpenChange };
};
