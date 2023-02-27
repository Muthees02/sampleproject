import React, { Component } from 'react'

export default class ClassClick extends Component {

    // constructor(props) {
    //     super(props)
    //     this.state = {
             
    //     }
    // }
    clickHandler(){
        console.log('Clicked the Button')
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click me</button>
            </div>
        )
    }
}
