import { FormikValues } from "formik";

export const getNestedProperty = (
  object: { [key: string]: any },
  keys: string[]
) => {
  return keys.reduce(
    (obj, key) => (obj && obj[key] !== undefined ? obj[key] : undefined),
    object
  );
};

export const isInvalid = (formik: FormikValues, name: string) => {
  const fieldKeys = name.split(".");
  const touched = getNestedProperty(formik.touched, fieldKeys);
  const errors = getNestedProperty(formik.errors, fieldKeys);

  return errors && touched ? true : false;
};
