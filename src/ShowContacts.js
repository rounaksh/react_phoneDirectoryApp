import React, { Component } from 'react';
import Header from './common/Header';
import './ShowContact.css';
class ShowContacts extends Component {

  render() {
    return (
      <div>
        <Header heading="Phone Directory" />
        <div className='container'>
          <button className='btn add-btn'>Add</button>

          <div className='grid-container head-section'>
            <span className='grid-item name-heading'>Name</span>
            <span className='grid-item phone-heading'>Phone</span>
          </div>
          {
            this.props.contactList.map(details => {
              return <div className='grid-container' key={details.id}>
                <span className='grid-item'>{details.name}</span>
                <span className='grid-item'>{details.contact}</span>
                <button className='grid-item delete-btn'>delete</button>
              </div>
            })
          }
        </div>
      </div>
    )
  }
}

export default ShowContacts;