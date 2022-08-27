import React, { Component } from 'react'
import Header from './Header'
import './AddContact.css'

class AddContact extends Component {

    constructor(){
        super();
        this.state = {
            id: 0,
            name: '',
            contact: ''
        }
    }

    inputChangeHandler = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
        console.log(state);
    }

    render() {
        return (
            <div className='add-contact'>
                <Header heading="Add Contact" />
                <div className='container'>
                    <button className='btn'>back</button>
                    <form className='add-contact-form'>
                        <div className='form-group'>
                            <label htmlFor='name' className='form-label'>Name: </label>
                            <input id='name' className='form-input' name='name' type="text" onChange={this.inputChangeHandler} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='contact' className='form-label'>Contact: </label>
                            <input id='contact' className='form-input' name='contact' type="text" onChange={this.inputChangeHandler} />
                        </div>
                        <div className='subscriber-info'>
                            <span className='subscriber-info-heading'>Contact to be added </span>
                            <span className='subscriber-name'>Name: {this.state.name}</span>
                            <span className='subscriber-contact'>Contact: {this.state.contact}</span>
                        </div>
                        <button type='submit' className='btn add-btn'>Add</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddContact