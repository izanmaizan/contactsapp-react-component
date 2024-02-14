import React from 'react';
import ContactList from './ContactList';
import { getData } from '../data';
import ContactInput from './ContactInput';

class ContactApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: getData(),
    }

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddContactHandler = this.onAddContactHandler.bind(this);
  }

  onDeleteHandler = (id) => {
    const contacts = this.state.contacts.filter(contact => contact.id !== id);
    this.setState({contacts});
  }

  onAddContactHandler({name, tag}) {
    this.setState((prevState) => {
      return {
        contacts: [
          ...prevState.contacts,
          {
            id: +new Date(),
            name,
            tag,
            imageUrl: 'data:image/jpeg;base64,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',
          }
        ]
      }
    });
  }
  
  render() {
    return (
      <div className='contact-app'>
        <h1>Tambahkan Kontak</h1>
        <ContactInput addContact={this.onAddContactHandler} />
        <h1>Daftar Kontak</h1>
        <ContactList
        contacts={this.state.contacts}
        onDelete={this.onDeleteHandler}
        />
      </div>
    );
  }
}

export default ContactApp;