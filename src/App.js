import React, { Component, Fragment } from 'react'
import Header from './components/Header'
import { Provider as AlertProvider } from 'react-alert';
import store from './store';
import { Provider } from 'react-redux';

export class App extends Component {

  render() {
    return(
      <Provider store={store}>
        <Header>
        </Header>
      </Provider>
    )
  }
}

export default App
