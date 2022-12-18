import { Formik, Form, Field } from 'formik';

export const ContactsEditForm =({
initialValues = {name: '', number: '', email: ''},
onSubmit,
btnText,
}) => {
    const handleSubmit = async (values, actions) => {
        await onSubmit(values);
        actions.setSubmitting(false);
        actions.resetForm();
    };

    return (
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({isSubmitting}) => (
            <Form>
            <label>
              Name
              <Field name="name" type="text" />
            </label>
            <br />
            <label>
              Number
              <Field name="number" type="tel" />
            </label>
            <label>
              Email
              <Field name="email" type="email" />
            </label>
            <br />
            <button type="submit" disabled={isSubmitting}>
              {btnText}
            </button>
          </Form>
        )}
      </Formik>
    )
}