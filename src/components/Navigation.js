import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'

const styles = {
  root: {
    width: '100%',
  },
  label: {
    fontSize: '14px',
    backgroundColor: 'rgba(0,0,0,.1)',
    maxWidth: 'initial',
    marginLeft: '1px',
    marginRight: '1px',
  }
};

class Navigation extends Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({
      value: value
    });
    this.props.onChange(event, value)
  };

  render() {
    return (
      <BottomNavigation
        onChange={this.handleChange}
        showLabels
        className={this.props.classes.root}
      >
        <BottomNavigationAction label="USA" value="us" className={this.props.classes.label} />
        <BottomNavigationAction label="Canada" value="ca" className={this.props.classes.label} />
        <BottomNavigationAction label="Search Results" value="" className={this.props.classes.label} />
        <BottomNavigationAction label="France" value="fr" className={this.props.classes.label} />
        <BottomNavigationAction label="Belgium" value="be" className={this.props.classes.label} />
      </BottomNavigation>
    );
  }
}

Navigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navigation)