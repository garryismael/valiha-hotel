import { getNestedProperty } from "@/utils/input";
import { FormikValues } from "formik";
import { useTranslation } from "next-i18next";

export default function InputErrorMessage({
  formik,
  name,
  data = {},
}: {
  formik: FormikValues;
  name: string;
  data?: {
    [key: string]: string;
  };
}) {
  const { t } = useTranslation();

  const fieldKeys = name.split(".");
  const touched = getNestedProperty(formik.touched, fieldKeys);
  const errors = getNestedProperty(formik.errors, fieldKeys);

  return (
    <>
      {errors && touched && (
        <div className="text-danger">{t(errors, data)}</div>
      )}
    </>
  );
}
