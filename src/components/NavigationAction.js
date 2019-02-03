// A separate testing BottomNavigationAction to apply custom styles

import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'

const styles = {
  root: {
    backgroundColor: 'rgba(0,0,0,.1)',
    maxWidth: 'initial',
    marginLeft: '1px',
    marginRight: '1px',
  },
  selected: {
    backgroundColor: '#000',
    color: '#2196f3',
  },
  label: {
    fontSize: '14px',
  },
}

const NavigationAction = (props) => (
  <BottomNavigationAction 
    showLabel
    label={props.label} 
    value={props.value}
    onClick={props.handleClick}
    classes={{
      root: props.classes.root,
      selected: props.classes.selected,
      label: props.classes.label,
    }}
  />
)

export default withStyles(styles)(NavigationAction)
