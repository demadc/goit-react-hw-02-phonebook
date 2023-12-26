import { Component } from 'react';
import { ContactForm } from './Form/Form';
import { ContactsList } from './ContactList/ContactsList';
import { Filter } from './Filter/Filter';
import { Layout } from './Layout/Layout';
import initialContacts from './contacts.json';
import { GlobalStyle } from './GlobalStyle';
import { Section } from './Section/Section';
import { Header } from './Header/Header';

export class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
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

  handleFilter = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  handleDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts } = this.state;
    const itemContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter)
    );

    return (
      <Layout>
        <Section title="Phonebook">
          <ContactForm onAddContact={this.handleAddContact} />
          <Header title="Contacts" />
          <Filter value={this.state.filter} onFilter={this.handleFilter} />
          <ContactsList
            contacts={itemContacts}
            onDeleteContact={this.handleDeleteContact}
          />
        </Section>

        {/* <ToastContainer /> */}
        <GlobalStyle />
      </Layout>
    );
  }
}
