import React, { PureComponent } from 'react';

class Navbar extends PureComponent {
  render() {
    return (
      <nav className="navbar">
        <i className="navbar-icon fas fa-leaf"></i>
        <span className="navbar-title">Habit Tracker</span>
        <span className="navbar-count">{this.props.count}</span>
      </nav>
    );
  }
}

export default Navbar;
