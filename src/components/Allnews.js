import React, { Component } from 'react'
import News from './News'
import Loading from './Loading';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class Allnews extends Component {

  static defaultProps = {
    category: 'general',
    country: 'us'
  }

  static propTypes = {
    category: PropTypes.string,
    country: PropTypes.string
  }

  articles = []
  constructor() {
    super();
    console.log("chill madi");
    this.state = {
      articles: this.articles,
      loading: true,
      page: 1,
      totalResults: 0
    }
  }

  handleapi = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=295db89fa6534270b03309efd9ddf3ca&page=${this.state.page}&pageSize=10`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false });
  }

  async componentDidMount() {
    console.log('cdm');
    this.handleapi();
    console.log(this.state.totalResults);
  }

  handleprev = async () => {
    console.log("prev");
    this.setState({ page: this.state.page - 1 });
    this.handleapi();
  }

  handleNext = async () => {
    console.log(this.state.page);
    this.setState({ page: this.state.page + 1 });
    this.handleapi();
  }

  handleauthor = (author) => {
    if (author === "") return "Unknown";
    else if (author === null) return "Unknown";
    else return author;
  }

  fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=295db89fa6534270b03309efd9ddf3ca&page=${this.state.page+1}&pageSize=10`;
    this.setState({page: this.state.page+1});
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: this.state.articles.concat(parsedData.articles), totalResults: parsedData.totalResults, loading: false });
  }

  render() {
    return (
      <>
        <h1 className='text-center'>NewsMonkey</h1>
        {this.state.loading && <Loading/>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={this.state.loading && <Loading/>}
        >
        <div className='container'>
        <div className='row my-3'>
          {this.state.articles.map((element) => {
            return <div className='col-md-4' key={element.url}>
              <News title={element.title} imgurl={element.urlToImage} newsurl={element.url} description={element.description} author={this.handleauthor(element.author)} source={element.source.name} />
            </div>
          })}
        </div>
        </div>
        </InfiniteScroll>
        {/* <div className="d-flex justify-content-between">
          <button type="button" disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.handleprev}>&larr; Prev</button>
          <button type="button" disabled={this.state.totalResults - (20 * (this.state.page)) <= 0} className="btn btn-dark" onClick={this.handleNext}>Next &rarr;</button>
        </div> */}
      </>
    )
  }
}

export default Allnews
