import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Input } from 'semantic-ui-react'
import './EditTodo.css'

export default class EditTodo extends Component {
    static propTypes = {
        onSave: PropTypes.func.isRequired,
        text: PropTypes.string,
    }

    state = {
        text: this.props.text || ''
    }

    handleSubmit = e => {
        const text = e.target.value.trim()
        if (e.which === 13) {
            this.props.onSave(text)
        }
    }

    handleChange = e => {
        this.setState({ text: e.target.value })
    }

    render() {
        return (
            <Input className='editInput'
                id='editInput'
                type="text"
                autoFocus="true"
                value={this.state.text}
                onChange={this.handleChange}
                onKeyDown={this.handleSubmit}
            />
        )
    }
}