import React, { Component } from 'react'
// import AddContact from './AddContact'
import ShowContacts from './ShowContacts';

export default class PhoneDirectory extends Component {

    constructor(){
        super();
        this.state = {
            contactList: [
                {
                    id: 1,
                    name: 'Rounak Sharma',
                    contact: '7000230553'
                },
                {
                    id: 2,
                    name: 'Jhon Doe',
                    contact: '8989650080'
                }
            ]
        }
    }

    addContact = (newContact) => {
        let contactList = this.state.contactList;
        if (contactList.length > 0) {
            newContact.id = contactList[contactList.length - 1] + 1;
        } else {
            newContact.id = 1;
        }
        contactList.push(newContact);
        this.setState({contactList: contactList});
        console.log(this.state);
    }

  render() {
    return (
    //   <AddContact addContactHandler = {this.addContact} />
      <ShowContacts contactList = {this.state.contactList}/>
    )
  }
}