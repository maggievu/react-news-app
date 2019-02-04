import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

const styles = theme => ({
  root: {
    // flexGrow: 1,
    // backgroundColor: theme.palette.background.paper,
  },
  tabsRoot: {
    // borderBottom: '1px solid #e8e8e8',
    flexFlow: 'row wrap',
  },
  tabsIndicator: {
    backgroundColor: '#0097a7',
  },
  tabRoot: {
    // textTransform: 'initial',
    // minWidth: 72,
    // fontWeight: theme.typography.fontWeightRegular,
    // marginRight: theme.spacing.unit * 4,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 100,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      color: '#0097a7',
      opacity: 1,
    },
    '&$tabSelected': {
      color: '#0097a7',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: '#0097a7',
    },
  },
  tabSelected: {},
  typography: {
    padding: theme.spacing.unit * 3,
  },
})

class TabBar extends React.Component {
  state = {
    value: 0,
  }

  handleChange = (event, value) => {
    this.setState({ value })
    this.props.onChange(event, value)
  }

  render() {
    const { classes } = this.props
    const { value } = this.state

    return (
      <div className={classes.root}>
        <Tabs
          value={value}
          onChange={this.handleChange}
          classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
        >
          <Tab
            disableRipple
            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
            label="USA"
            value="us"
          />
          <Tab
            disableRipple
            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
            label="Canada"
            value="ca"
          />
          <Tab
            disableRipple
            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
            label="Search Results"
            value=""
          />
          <Tab
            disableRipple
            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
            label="France"
            value="fr"
          />
          <Tab
            disableRipple
            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
            label="Belgium"
            value="be"
          />
        </Tabs>
      </div>
    )
  }
}

TabBar.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(TabBar)
