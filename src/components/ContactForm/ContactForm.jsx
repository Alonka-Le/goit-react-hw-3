import { nanoid } from "nanoid";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

export default function ContactForm({ addContact }) {
  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Minimum 3")
      .max(50, "Maximum 50")
      .required("Required"),
    number: Yup.string().min(9, "Minimum 9").required("Required"),
  });

  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, actions) => {
    const newContact = {
      id: nanoid(),
      ...values,
    };
    actions.resetForm();
    addContact(newContact);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form>
        <div className={css.container}>
          <label className={css.label}>Username</label>
          <Field type="text" name="name" className={css.input} />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>
        <div className={css.container}>
          <label className={css.label}>Phone</label>
          <Field type="number" name="number" className={css.input} />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>

        <button type="submit" className={css.btn}>
          Add new contact
        </button>
      </Form>
    </Formik>
  );
}
