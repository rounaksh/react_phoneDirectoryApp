import React, { Component } from 'react'
import Header from './Header'

class AddContact extends Component {
    render() {
        return (
            <div className='add-contact'>
                <Header heading="Add Contact" />
                <div className='container'>
                    <button className='btn'>back</button>
                </div>
            </div>
        )
    }
}

export default AddContact