import React from 'react'
import Grid from '@material-ui/core/Grid'

const Article = (props) => (
<Grid className='article' container spacing={32}>
  <Grid item md={4}>
    <a href={props.url} className='article_key'>
      <img src={props.urlToImage} alt={props.title} />
    </a>
  </Grid>

  <Grid item md={8}>
    <p className='article_key'>
      <strong>{props.title}</strong>
    </p>
    <p className='article_key'>
        <em>
          {`${props.author}` !== 'null' && `By ${props.author}. `}
          From <a href={props.url}>{props.source}</a>. Published at {props.publishedAt}
        </em>
    </p>
    <p className='article_key'>
      {props.content}
    </p>
    <p className='article_key'>
        <em>{`${props.description}` !== '' && `Description: ${props.description}`}</em>
    </p>
  </Grid>

</Grid>
)

export default Article
