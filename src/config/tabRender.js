import React, { Component } from 'react';
import Tabs from './tabRouter'

export default class tabRender extends Component {
  render() {
    return <Tabs navigation={this.props.navigation} />;
  }
}