import React, { Component, Fragment } from 'react';
import Question from './Question/Question'

class NightMode extends Component {
    // state = {
    //     curVal: 'jumbotron col-12'
    // }

    body = () => {
        var body = document.getElementById('body');
        var currentClass = body.className;
        body.className = currentClass === 'dark-mode' ? 'light-mode' : 'dark-mode';
    }

    jumbotron = () => {
        var jumbotron = document.getElementById('jumbotron');
        // var nowVal = jumbotron.className;
        return jumbotron.className === 'jumbotron-dark col-12' ? 'jumbotron col-12' : 'jumbotron-dark col-12'
        // jumbotron.className=nowVal
        // this.setState({
        //     curVal: nowVal
        // });
        // // return jumbotron.className = this.state.curVal
    }

    // button = () => {
    //     var btnDarkMode = document.getElementsByTagName('button');
    //     var currentBtnMode = btnDarkMode.className;
    //     btnDarkMode.className = currentBtnMode === 'btn btn-dark-mode' ? 'btn btn-light-mode' : 'btn btn-dark-mode'
    // }

    handleMode = () => {
        this.body();
        this.jumbotron();
    }
    // this.button();
    // Question.method.;


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