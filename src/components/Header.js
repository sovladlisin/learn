import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Navbar from './Navbar'
import {getPeople, addPerson, deletePerson} from '../actions/people'

export class Header extends Component {


    state = {
        input_text : ''
    }

    componentDidMount(){
        this.props.getPeople()
    }


    save = () => {
        const name = this.state.input_text
        this.props.addPerson(name)
    }

    onChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        this.setState({
            input_text: value
        })
    }

    deletePerson = (id) => {
        this.props.deletePerson(id)
    }


    renderFromAddPerson = () => {
        return(
            <div>
                <input name='input_text' onChange={this.onChange} value={this.state.input_text} placeholder='Введите имя пользователя'></input>
                <button onClick={this.save}>Сохранить</button>
            </div>
        )
    }
    render() {
        return (
            <div style={{    display: 'grid',
                gridTemplateRows: '1fr'}}>
                {this.renderFromAddPerson()}
                {this.props.local_people.map(item => {
                    return(
                        <div>
                            <p style={{float: 'left'}}>ID: {item.id}</p>
                            <p style={{float: 'left'}}>Имя: {item.name}</p>
                            <button  style={{float: 'left'}} onClick={() => this.deletePerson(item.id)}>Удалить</button>
                        </div>
                    )
                })}
            </div>
        )
    }
}

const mapDispatchToProps = {
    getPeople,
    addPerson, 
    deletePerson
};

const mapStateToProps = state => ({
    local_people: state.people.people 
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
