import { Formik, Field, Form } from 'formik';
import { nanoid } from 'nanoid/non-secure';
import PropTypes from 'prop-types';
import { Label, LableWrapper, Button } from './Form.styled';
import { HiUserAdd } from 'react-icons/hi';
import { BsFillTelephoneFill, BsPersonFill } from 'react-icons/bs';

const idName = nanoid;
const idNum = nanoid;

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
            <LableWrapper>
              <BsPersonFill size="16" />
              Name
            </LableWrapper>

            <Field
              id={idName}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              placeholder="Migelito"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </Label>
          <Label>
            <LableWrapper>
              <BsFillTelephoneFill size="16" />
              Number
            </LableWrapper>

            <Field
              id={idNum}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              placeholder="0XX-123-45-67"
            />
          </Label>

          <Button type="submit">
            <HiUserAdd size="16" />
            Add contact
          </Button>
        </Form>
      </Formik>
    </>
  );
};

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};
