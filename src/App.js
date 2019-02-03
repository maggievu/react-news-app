import React, { Component } from 'react'
import Form from './components/Form'
import Article from './components/Article'
import Navigation from './components/Navigation'

import CssBaseline from '@material-ui/core/CssBaseline'
import './App.css'

const API_KEY = "c623fcd5cea74839a040e2976927b039"

class App extends Component {
  state = {
    keyword: '',
    country: '',
    status: null,
    totalResults: null,
    articles: [],
    error: null
  }

  // Handles changes from Navigation Action (country-based)
  handleOnChange = async(event, value) => {
    await this.setState({
      country: value
    })

    const {keyword, country} = this.state
    
    const url = `https://newsapi.org/v2/top-headlines?q=${keyword}&country=${country}&apiKey=${API_KEY}`
    console.log(url)
    const api_call = await fetch(url)
    const data = await api_call.json()

    if (keyword && data.totalResults !== 0 && data.status === 'ok') {
      this.setState({
        status: data.status,
        totalResults: data.totalResults,
        articles: data.articles,
        error: null
      })
    }
    
    if (country && data.totalResults !== 0 && data.status === 'ok') {
      this.setState({
        status: data.status,
        totalResults: data.totalResults,
        articles: data.articles,
        error: null
      })
    } else if (country && data.status === 'ok') {
      this.setState({
        error: `Cound not find any news about ${keyword} in ${country}.`,
      })
    } else if (!country && !keyword) {
      this.setState({
        error: 'Missing a keyword!'
      })
    } else if (data.status === 'error') {
      this.setState({
        error: data.status.message
      })
    }
    
  }
  
  // Handles changes from Search button (keyword based)
  getNews = async(e) => {
    e.preventDefault()
    
    await this.setState({
      country: '',
      keyword: e.target.elements.keyword.value
    })
    
    const {keyword, country} = this.state
    
    const url = `https://newsapi.org/v2/top-headlines?q=${keyword}&country=${country}&apiKey=${API_KEY}`
    console.log(url)
    const api_call = await fetch(url)
    const data = await api_call.json()
    
    if (keyword && data.totalResults !==0 && data.status === 'ok') {
      this.setState({
        status: data.status,
        totalResults: data.totalResults,
        articles: data.articles,
        error: null
      })
    } else if (keyword && data.status === 'ok') {
      this.setState({
        error: `Cound not find any news about ${keyword}.`,
      })
    } else if (!keyword) {
      this.setState({
        country: '',
        error: 'Missing a keyword!'
      })
    } else if (data.status === 'error') {
      this.setState({
        error: data.status.message
      })
    } else {
      this.setState({
        error: 'Something smoky and fishy...'
      })
    }

  }
  
  render() {
    return (
      <CssBaseline>

        <div className="wrapper">
          <div className="main">
            <h1 className="site-title">Welcome to Maggie's daily news feed!!</h1>
            <Form getNews={this.getNews} />
            <Navigation 
              onChange={this.handleOnChange} 
            />
            <div className="article-section">
              {this.state.error && <p>{this.state.error}</p>}

              {!this.state.error && this.state.articles.slice(0, 3).map(article => {
                return (
                  <Article
                    source={article.source.name}
                    author={article.author}
                    title={article.title}
                    description={article.description}
                    url={article.url}
                    urlToImage={article.urlToImage}
                    publishedAt={article.publishedAt}
                    content={article.content}
                  />
                )
              })}
            </div>
          </div>
        </div>

      </CssBaseline>
    );
  }
}

export default App;
