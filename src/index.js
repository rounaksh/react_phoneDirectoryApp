import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import AddContact from './AddContact';
import './common/common.css'
// import ShowContacts from './ShowContacts';
import PhoneDirectory from './PhoneDirectory';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <PhoneDirectory />
  </>
);
