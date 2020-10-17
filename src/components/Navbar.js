import React, { Component } from 'react'
import { connect } from 'react-redux';

import {getFakeData} from '../actions/people'

export class Navbar extends Component {


    componentDidMount(){
    }

    render() {

        return (
            <div>
            </div>
        )
    }
}

const mapDispatchToProps = {
};

const mapStateToProps = state => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
