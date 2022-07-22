import React from "react";
import { Formik } from "formik";

function AppForm({ initialValues, onSubmit, validationSchema, children }) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {/* func return jsx expression. render children inside this fragment */}
      {() => <>{children}</>}
    </Formik>
  );
}

export default AppForm;
