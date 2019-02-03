import React from 'react'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  textField: {
    margin: theme.spacing.unit,
    width: "100%"
  },
  button: {
    margin: theme.spacing.unit,
    width: "100%"
  }
})

const Form = (props) => {
  return (
    <form onSubmit={props.getNews}>
      <Grid container spacing={8} alignItems='center'>
        <Grid item xs={9}>
          <TextField
            className={props.classes.textField}
            label="Keyword"
            margin="normal"
            name="keyword"
            type="search"
            variant="outlined"
            InputLabelProps={{
                required: true,
                color: "white",
                shrink: true
            }}
          />
        </Grid>

        <Grid item xs={3}>
          <Button
            className={props.classes.button}
            color='primary'
            type='submit'
            variant='contained' >
            Search
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}

export default withStyles(styles)(Form)