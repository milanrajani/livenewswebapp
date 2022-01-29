import React, { Component } from 'react'

export class NewsItem extends Component {



    render() {
        let { title, description, urlToImage, url,publishedAt,source} = this.props;
        return (
            <div className='my-3'>
                <div className="card">
                <span className='position-absolute top-0 translate-middle badge rounded-pill bg-danger'style={{left:'85%',zIndex:'1'}}>{source}</span> 
                    <img src={!urlToImage?"https://cdn.pocket-lint.com/r/s/1200x630/assets/images/158049-phones-news-samsung-galaxy-s22-series-leak-details-camera-battery-and-display-specs-image1-m54jnywjer.JPG":urlToImage} className='card-img-top' alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <b className="card-text">{publishedAt}</b> <br />
                        <a href={url} target = {"_blank"} rel="noreferrer" className='btn btn-sm btn-primary'>Read more{' >'} </a>
                    </div>
                </div>
            </div>
        )
    }
}
// 0ea4b585329f445fb3e54917abbc759f

export default NewsItem
