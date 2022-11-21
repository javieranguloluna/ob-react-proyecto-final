// COMPONENTE TIPO CLASE -> rcc

import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Greeting extends Component {

    constructor(props) {
        super(props)
        this.state = {
            age: 33
        }
    }

    render() {
        return (
        <div>
            <h1>
                Hola { this.props.name } desde componente de clase!
            </h1>
            <h2>
                Tu edad es de { this.state.age } años.
            </h2>
            <div>
                <button onClick={this.birthday}>Birthday</button>
            </div>
        </div>
        )
    }

    birthday = () => {
        this.setState(prevState => ({ age: prevState.age + 1 }))
    }
}

Greeting.protoTypes = {
    name: PropTypes.string
}

export default Greeting
