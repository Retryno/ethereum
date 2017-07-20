import React, { Component } from 'react'
import {Input, Icon} from 'antd'
import './buy.styl'

class Buy extends Component {
  render () {
    return (
      <div id='buy'>
        <table className='table-domains'>
          <tbody>
            {
              this.props.data && (
                <tr>
                  <td className='name-title'>.eth NAME:</td>
                  <td>{this.props.data.name}</td>
                  <td className='price'>{this.props.data.price}<span className='eth'>eth</span></td>
                </tr>
              ) || this.props.data.map((item, index) => (
                <tr key={index}>
                  <td className='name-title'>.eth NAME:</td>
                  <td>{item.name}</td>
                  <td className='price'>{item.price}<span className='eth'>eth</span></td>
                </tr>
              ))
            }
          </tbody>
        </table>
        <div className='contact-form'>
          <Input placeholder='Name' prefix={<Icon type='user' />} />
          <Input placeholder='Email' prefix={<Icon type='mail' />} />
          <Input.TextArea
            placeholder='Comment'
            autosize={{ minRows: 4, maxRows: 6 }}
          />
        </div>
      </div>
    )
  }
}
export default Buy
