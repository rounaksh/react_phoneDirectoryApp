import React, { Component } from 'react'
import Header from './Header'
import './AddContact.css'

class AddContact extends Component {
    render() {
        return (
            <div className='add-contact'>
                <Header heading="Add Contact" />
                <div className='container'>
                    <button className='btn'>back</button>
                    <form className='add-contact-form'>
                        <div className='form-group'>
                            <label htmlFor='name' className='form-label'>Name: </label>
                            <input id='name' className='form-input' name='name' type="text" />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='contact' className='form-label'>Contact: </label>
                            <input id='contact' className='form-input' name='contact' type="text" />
                        </div>
                        <div className='subscriber-info'>
                            <span className='subscriber-info-heading'>Contact to be added </span>
                            <span className='subscriber-name'>Name: </span>
                            <span className='subscriber-contact'>Contact: </span>
                        </div>
                        <button type='submit' className='btn add-btn'>Add</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddContact