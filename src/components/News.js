import React, { Component } from 'react'

export class News extends Component {

  render() {
    let {title,imgurl,newsurl,author,source,description} = this.props;
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
        <img src={imgurl} className="card-img-top" alt="..."/>
        <div className="card-body">
        <span className="position-absolute translate-middle badge rounded-pill bg-success" style={{left:'95%', top:'0px'}}>{source}</span>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <footer className="blockquote-footer">By <cite title="Source Title">{author}</cite></footer>
            <a href={newsurl} className="btn btn-primary">Read More</a>
        </div>
        </div>
      </div>
    )
  }
}

export default News
