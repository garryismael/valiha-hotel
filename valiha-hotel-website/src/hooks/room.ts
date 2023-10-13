import { useFormik } from "formik";

export interface SearchRoomsSchema {
  checkIn: Date;
  checkOut: Date;
}

export const useSearchRoom = () => {
  const formik = useFormik<SearchRoomsSchema>({
    initialValues: {
      checkIn: new Date(),
      checkOut: new Date(),
    },
    onSubmit(values: SearchRoomsSchema) {
        console.log(values);
    },
  });

  return formik;
};
