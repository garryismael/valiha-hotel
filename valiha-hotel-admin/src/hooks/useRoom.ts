import {
  CreateRoomInteractor,
  CreateRoomUseCase,
  DeleteRoomInteractor,
  DeleteRoomUseCase,
  RoomRequest,
} from "@/domain/use-cases/room";
import container from "@/infrastructures/config/container.config";
import { useDisclosure } from "@nextui-org/react";
import { useFormik } from "formik";
import { useAppDispatch } from "./useStore";
import { addRoom, deleteRoom } from "@/lib/store/slices/room-slice";
import { useState } from "react";

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

export const useDeleteRoom = (id: string) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const deleteUseCase = container.resolve<DeleteRoomUseCase>(
    DeleteRoomInteractor
  );

  const handleDelete = async () => {
    setLoading(true);
    await deleteUseCase.execute(id);
    dispatch(deleteRoom(id));
    setLoading(false);
  };

  return { loading, handleDelete };
};
