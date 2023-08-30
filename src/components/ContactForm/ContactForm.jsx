import { Filter } from '../Filter/Filter';
 import { ContactList } from '../ContactList/ContactList';
import React from 'react';
// import { nanoid } from 'nanoid';
// import { nanoid } from 'nanoid/non-secure'

export class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
  };

  handleForm = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  // handleContacts = e => {
  //   this.setState({
  //     contacts: [
  //       {
  //         id: nanoid(),
  //         name: e.target.value,
  //       },
  //     ],
  //   });
  // };

  handleSubmit = e => {
    e.preventDefault();

   console.log(this.state);
   
  };

  render() {
    return (
      <>
        <form action="" onSubmit={this.handleSubmit}>
          <label htmlFor="name">
            Name
            <input
              type="text"
              name="name"
              id="name"
              // key={nanoid()}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleForm}
            />
          </label>

          <label htmlFor="tel">
            Number
            <input
              type="tel"
              name="number"
              id="tel"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleForm}
            />
          </label>
          <button type="submite">Add contact</button>
        </form>

     
        <Filter />
        
 <h2>Contacts</h2>
            <ContactList contacts={this.state} /> 
          {/* <ContactList contacts={this.state.contacts} /> */}
    

        {/* <ContactList contacts={this.state.name} /> */}
      </>
    );
  }
}
