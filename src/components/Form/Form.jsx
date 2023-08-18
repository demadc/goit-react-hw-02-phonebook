import { Formik, Field, Form } from 'formik';
import { nanoid } from 'nanoid/non-secure';
import PropTypes from 'prop-types';
import { Label, Button } from './Form.styled';

const idName = nanoid;
// const idNum = nanoid;

export const ContactForm = ({ onAddContact }) => {
  return (
    <>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        onSubmit={(values, actions) => {
          onAddContact({ ...values, id: nanoid() });
          actions.resetForm();
        }}
      >
        <Form>
          <Label htmlFor={idName}>
            Name
            <Field
              id={idName}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              // pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </Label>

          <Button type="submit">Add contact</Button>
        </Form>
      </Formik>
    </>
  );
};

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};
