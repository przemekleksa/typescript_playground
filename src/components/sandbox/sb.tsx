import React, { Component } from 'react'


export class Sandbox extends Component {
    sum(a:number, b:number):number {
        console.log(a + b)
        return a + b
    }
    
    render() {
        return (
            <div>
                {this.sum(2,2)}
            </div>
        )
    }
}

export default Sandbox
