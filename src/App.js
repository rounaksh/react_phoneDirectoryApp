import React, { Component } from 'react';
import Header from './Header';
import './App.css';

// let contacts = [
//   {
//     id: 1,
//     name: 'Rony',
//     contactNo: '91xxxxxxx0'
//   },
//   {
//     id: 2,
//     name: 'Jennifer',
//     contactNo: '91xxxxxxx0'
//   },
//   {
//     id: 2,
//     name: 'Jhon',
//     contactNo: '91xxxxxxx0'
//   }
// ];
class App extends Component {

  constructor(){
    super();
    this.state = {
      contactsToShow: []
    }
  }

  deleteHandler(message){
    alert(message);
  }

  render() {

    return (
      <div>
        <Header heading="Phone Directory"/>
        <div className='container'>
          <button className='btn add-btn'>Add</button>
          
          <div className='grid-container head-section'>
            <span className='grid-item name-heading'>Name</span>
            <span className='grid-item phone-heading'>Phone</span>
          </div>
          {
            this.state.contactsToShow.map(details => {
              return <div className='grid-container' key={details.id}>
                        <span className='grid-item'>{details.name}</span>
                        <span className='grid-item'>{details.contactNo}</span>
                        <button className='grid-item delete-btn' onClick={this.deleteHandler.bind(this, "Delete Clicked")}>delete</button>
                      </div>
            })
          }
        </div>
      </div>
    )
  }
}

export default App;