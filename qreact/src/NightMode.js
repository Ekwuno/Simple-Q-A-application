import React, { Component, Fragment } from 'react';

class NightMode extends Component {
    state = {

    }

    handleMode = () => {
        var body = document.getElementById('body');
        var currentClass = body.className;
        body.className = currentClass === 'dark-mode' ? 'light-mode' : 'dark-mode'
    }


    render() {
        return (
            <Fragment>
                <button className='btn btn-default' onClick={this.handleMode}>Switch Modes 🌛</button>
            </Fragment>
        )
    }
}
//  <Fragment>   

export default NightMode;