import { Room } from "@/domain/entities/room";
import {
  CreateRoomInteractor,
  CreateRoomUseCase,
  DeleteRoomInteractor,
  DeleteRoomUseCase,
  EditRoomInteractor,
  EditRoomUseCase,
  RoomRequest,
} from "@/domain/use-cases/room";
import container from "@/infrastructures/config/container.config";
import { addRoom, deleteRoom, editRoom, setRooms } from "@/lib/store/slices/room-slice";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import useFormModal from "./useFormModal";
import { useAppDispatch, useAppSelector } from "./useStore";

export const useRoomList = (rooms: Room[]) => {
  const dispatch = useAppDispatch();
  const { rooms: data } = useAppSelector((state) => state.room);
  useEffect(() => {
    dispatch(setRooms(rooms));
  }, []);

  return data;
};

export const useRoomForm = () => {
  const { show, loading, setLoading, handleClose, handleOpen } = useFormModal();

  const createRoom = container.resolve<CreateRoomUseCase>(CreateRoomInteractor);
  const dispatch = useAppDispatch();

  const formik = useFormik<RoomRequest>({
    initialValues: {
      title: "",
      categoryId: "",
      available: true,
      price: 0,
      file: null,
    },
    async onSubmit(values: RoomRequest) {
      setLoading(true);
      const room = await createRoom.execute(values);
      dispatch(addRoom(room));
      setLoading(false);
      handleClose();
      toast.success("Chambre ajoutée avec succès!", {
        position: "bottom-right",
        toastId: "create-room",
      });
    },
  });

  return { formik, show, loading, handleOpen, handleClose };
};

export const useRoomEditForm = (
  room: Room,
  onOpenChange: () => void
) => {
  const { loading, setLoading } = useFormModal();
  const editUseCase = container.resolve<EditRoomUseCase>(
    EditRoomInteractor
  );
  const dispatch = useAppDispatch();

  const formik = useFormik<RoomRequest & { id: string }>({
    initialValues: {
      id: room.id,
      title: room.title,
      available: room.available,
      categoryId: room.category.id,
      file: null,
      price: room.price,
    },
    onSubmit: async (values) => {
      setLoading(true);
      const data = await editUseCase.execute(values.id, values);
      dispatch(editRoom(data));
      setLoading(false);
      onOpenChange();
      toast.success("Chambre modifiée avec succès!", {
        position: "bottom-right",
        toastId: "edit-room",
      });
    },
  });

  return { formik, loading };
};

export const useDeleteRoom = (id: string) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const deleteUseCase =
    container.resolve<DeleteRoomUseCase>(DeleteRoomInteractor);

  const handleDelete = async () => {
    setLoading(true);
    await deleteUseCase.execute(id);
    dispatch(deleteRoom(id));
    setLoading(false);
    toast.success("Chambre supprimée avec succès!", {
      position: "bottom-right",
      toastId: "delete-room",
    });
  };

  return { loading, handleDelete };
};
