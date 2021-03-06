import {Router, Route, browserHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import {Provider} from 'react-redux'
import ReactDOM from 'react-dom'
import React from 'react'
import store from './store'
import Home from './components/home/home.jsx'
import 'antd/dist/antd.css'
import './main.styl'

const history = syncHistoryWithStore(browserHistory, store)
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/:domain' component={Home} />
      <Route path='/domains/:domain' component={Home} />
      <Route path='*' component={Home} />
    </Router>
  </Provider>,
  document.getElementById('root')
)
