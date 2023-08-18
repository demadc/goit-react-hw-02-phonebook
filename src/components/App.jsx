// 2 - Книга контактів

// Напиши застосунок зберігання контактів телефонної книги.

// Крок 1

// Застосунок повинен складатися з форми і списку контактів.
// На поточному кроці реалізуй додавання імені контакту та відображення списку
// контактів.Застосунок не повинен зберігати контакти між різними
// сесіями(оновлення сторінки).

// Використовуйте цю розмітку інпуту з вбудованою валідацією для
// імені контакту.

// <input
//   type="text"
//   name="name"
//   pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//   pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
//   title="Name may contain only letters, apostrophe, dash and spaces.
// For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//   required
// />

// Стан, що зберігається в батьківському компоненті <App>, обов'язково
// повинен бути наступного вигляду, додавати нові властивості не можна.

// state = {
//   contacts: [],
//   name: ''
// }

// Кожен контакт повинен бути об'єктом з властивостями name та id.
// Для генерації ідентифікаторів використовуй будь - який відповідний пакет,
//   наприклад nanoid.Після завершення цього кроку, застосунок повинен виглядати
//    приблизно так.

// component preview

import { Component } from 'react';
import { ContactForm } from './Form/Form';
// import { Title } from './Title/Title';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleAddContact = newContact => {
    const isExist = this.state.contacts.find(
      contact => contact.name === newContact.name
    );
    if (isExist) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
  };

  render() {
    return (
      <div style={{ width: 500, marginLeft: 400, marginRight: 400 }}>
        {/* <Title title="Phonebook" /> */}
        <h2>Phonebook</h2>
        <ContactForm onAddContact={this.handleAddContact} />
      </div>
    );
  }
}
