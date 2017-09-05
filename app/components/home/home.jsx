import Header from '../header/header.jsx'
import React, { Component } from 'react'
import GraphTable from '../graph-table/table.jsx'

class Home extends Component {
  render () {
    return (
      <div>
        <Header />
        <GraphTable />
      </div>
    )
  }
}
export default Home
