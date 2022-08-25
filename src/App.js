import React, { Component } from 'react';
import Header from './Header';
import './App.css';

class App extends Component {
  render() {
    let contacts = [
      {
        id: 1,
        name: 'Rony',
        contactNo: '91xxxxxxx0'
      },
      {
        id: 2,
        name: 'Jennifer',
        contactNo: '91xxxxxxx0'
      },
      {
        id: 2,
        name: 'Jhon',
        contactNo: '91xxxxxxx0'
      }
    ];
    return (
      <div>
        <Header />
        <div className='container'>
          <button className='add-btn'>Add</button>
          <div className='grid-container head-section'>
            <span className='grid-item name-heading'>Name</span>
            <span className='grid-item phone-heading'>Phone</span>
          </div>
          {
            contacts.map(details => {
              return <div className='grid-container' key={details.id}>
                        <span className='grid-item'>{details.name}</span>
                        <span className='grid-item'>{details.contactNo}</span>
                      </div>
            })
          }
        </div>
      </div>
    )
  }
}

export default App;