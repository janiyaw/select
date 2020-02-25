import React, {Component} from 'react';
import Shape from './Shape';
class Selector extends Component {
  render () {
    return(
      <div className = "container">
      <div class="navbar">
      <div>Selected: <span>What goes here> </span></div>
      </div>
      <div className = "shape-list">
        <Shape shape = "square" />
        <Shape shape = "circle" />
        <Shape shape = "triangle" /> </div>
      </div>
    )
  }
}
export default Selector;
