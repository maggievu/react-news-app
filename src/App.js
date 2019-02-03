import React, { Component } from 'react'
import axios from 'axios'

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
    status: '',
    totalResults: 0,
    articles: [],
    success: false,
    error: null,
  }

  // Handles changes from Navigation Action (country-based)
  handleOnChange = async(event, value) => {
    await this.setState({
      country: value
    })

    const {keyword, country} = this.state
    
    const url = `https://newsapi.org/v2/top-headlines?q=${keyword}&country=${country}&apiKey=${API_KEY}`
    console.log(url)

    await axios.get(url)
      .then(json => json.data)
      .then(data => {
        this.setState({
          status: data.status,
          totalResults: data.totalResults,
          articles: data.articles,
          error: data.status.message
        })
      })
      .catch(error => {
        if (error !== null) {
          this.setState({ error: error.response.status })
        }
      })

    // const api_call = await fetch(url)
    // const data = await api_call.json()

    if (this.state.totalResults !== 0) {
      this.setState({
        success: true,
        error: ''
      })
    } else if (country !== '') {
      this.setState({
        success: false,
        error: `Cound not find any news about "${keyword}" in country code "${country}".`,
      })
    } else {
      this.setState({
        error: `Cound not find any news about "${keyword}".`,
      })
    }
    
    if (!keyword && !country) {
      this.setState({
        success: false,
        error: 'Missing a keyword!'
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

    await axios.get(url)
      .then(json => json.data)
      .then(data => {
        this.setState({
          status: data.status,
          totalResults: data.totalResults,
          articles: data.articles,
          success: false,
          error: data.status.message
        })
      })
      .catch(error => {
        this.setState({ error: error.response.status })
      })

    if (this.state.totalResults !==0) {
      this.setState({
        success: true,
      })
    } else {
      this.setState({
        error: `Cound not find any news about "${keyword}".`,
      })
    }

    if (!keyword) {
      this.setState({
        country: '',
        success: false,
        error: 'Missing a keyword!'
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
              {!this.state.success && <p style={{textAlign: 'center'}}>{this.state.error}</p>}

              {this.state.success && this.state.articles.slice(0, 10).map((article, id) => {
                return (
                  <Article
                    key={id}
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

export default App
