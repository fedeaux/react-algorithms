import React from 'react';
import Stringg from '../state/stringg'
import Variable from '../state/variable'

export default class LCS extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      s1: 'aaaaaaaaaaaa',
      s2: 'abcabcabcabc',
      lcsTable: [],
      i: 0,
      j: 0
    }
  }

  render() {
    return (<div className=''>
      <div className='ui three column centered grid'>
        <div className='column'>
          Code
        </div>
        <div className='column'>
          <Variable name='i' value={this.state.i}/>
          <Variable name='j' value={this.state.j}/>
          <Stringg name='S1' value={this.state.s1}/>
          <Stringg name='S2' value={this.state.s2}/>
        </div>
      </div>
    </div>);
  }
}
