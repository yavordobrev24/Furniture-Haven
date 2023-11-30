import { useState } from "react";

export default function useForm(submitHandler, initialValues) {
  const [values, setValues] = useState(initialValues);
  const onChange = (e) => {
    setValues((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = async (e) => {
    try {
      await submitHandler(values);
    } catch (e) {
      throw e;
    }
  };
  return {
    values,
    onChange,
    onSubmit,
  };
}
