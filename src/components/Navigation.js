import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'

const styles = (theme) => ({
  root: {
    width: '100%',
    height: 'auto',
    flexFlow: 'row wrap',
  },
  actionRoot: {
    backgroundColor: 'rgba(0,0,0,.1)',
    border: '1px solid #fff',
    flex: '1 0 120px',
    [theme.breakpoints.down('709')]: {
      flexBasis: '50%',
    },
    maxWidth: 'initial',
    textTransform: 'uppercase',
  },
  searchResultRoot: {
    backgroundColor: 'rgba(0,0,0,.1)',
    border: '1px solid #fff',
    flex: '1 0 120px',
    [theme.breakpoints.down('709')]: {
      order: -1,
      flexBasis: '100%',
    },
    maxWidth: 'initial',
    textTransform: 'uppercase',
  },
  label: {
    padding: '1rem 0',
    fontSize: '14px',
    [theme.breakpoints.down('709')]: {
      paddingTop: '.5rem',
      paddingBottom: '.5rem',
    },
  },
  selected: {
    color: '#fff',
    backgroundColor: '#26c6da',
  }
})

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
        value={this.state.value}
        classes={{ root: this.props.classes.root }}
        showLabels
        onChange={this.handleChange}
      >
        <BottomNavigationAction label="USA" value="us" classes={{ root: this.props.classes.actionRoot, label: this.props.classes.label, selected: this.props.classes.selected }} />
        <BottomNavigationAction label="Canada" value="ca" classes={{ root: this.props.classes.actionRoot, label: this.props.classes.label, selected: this.props.classes.selected }} />
        <BottomNavigationAction label="Search Results" value="" classes={{ root: this.props.classes.searchResultRoot, label: this.props.classes.label, selected: this.props.classes.selected }} />
        <BottomNavigationAction label="France" value="fr" classes={{ root: this.props.classes.actionRoot, label: this.props.classes.label, selected: this.props.classes.selected }} />
        <BottomNavigationAction label="Belgium" value="be" classes={{ root: this.props.classes.actionRoot, label: this.props.classes.label, selected: this.props.classes.selected }} />
      </BottomNavigation>
    )
  }
}

Navigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navigation)
// export default Navigation