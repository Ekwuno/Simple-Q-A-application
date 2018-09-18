import React, { Component, Fragment } from 'react';

class NightMode extends Component {
    state = {

    }

    body = () => {
        var body = document.getElementById('body');
        var currentClass = body.className;
        body.className = currentClass === 'dark-mode' ? 'light-mode' : 'dark-mode';
    }

    jumbotron = () => {
        var jumbotron = document.getElementById('jumb');
        var currentJumboMode = jumbotron.className;
        jumbotron.className = currentJumboMode === 'jumbotron-dark col-12' ? 'jumbotron col-12' : 'jumbotron-dark col-12'
    }
    
    button =() => {
        var btnDarkMode = document.getElementsByTagName('button');
        var currentBtnMode = btnDarkMode.className;
        btnDarkMode.className = currentBtnMode === '' ? 'btn-light-mode' : 'navbar navbar-dark fixed-top btn-dark-mode'
    }

    handleMode = () => {
        this.body();
        this.jumbotron();
        this.button();
    }


    render() {
        return (
            <Fragment>
                <button className='btn btn-default' onClick={this.handleMode}> 🌞 Switch Modes 🌛</button>
            </Fragment>
        )
    }
}
//  <Fragment>   

export default NightMode;