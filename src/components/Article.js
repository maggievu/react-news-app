import React from 'react'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  root: {
    width: '96%',
    margin: '2rem 2%',
    backgroundColor: '#fff',
  },
  title: {
    marginTop: 0,
  }
}

const Article = (props) => (
  <Grid className={props.classes.root} container spacing={32}>
    <Grid item md={4}>
      <a href={props.url}>
        {props.urlToImage && <img src={props.urlToImage} alt={props.title} />}
        {!props.urlToImage && <p>Source</p>}
      </a>
    </Grid>

    <Grid item md={8}>
      <h3 className={props.classes.title}>{props.title}</h3>
      <p>
          <em>
            {props.author !== null && `By ${props.author}. `}
            From <a href={props.url}>{props.source}</a>. Published at {props.publishedAt}
          </em>
      </p>
      <p>
        {props.content}
      </p>
      <p>
          <em>{props.description !== '' && `Description: ${props.description}`}</em>
      </p>
    </Grid>

  </Grid>
)

export default withStyles(styles)(Article)
