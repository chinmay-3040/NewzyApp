import React, { Component } from 'react'
import NewsItem from './NewsItem'
import default_image from '../default-image.png'
import PropTypes from 'prop-types'
// import { Link } from "react-router-dom"
// import Loading from './Loading';


export class News extends Component {

    static defaultProps = {
        country : "in",
        pageSize:9,
        category:'general',

    }
    static propTypes = {
        country : PropTypes.string,
        pageSize: PropTypes.number,
        category:PropTypes.string,
    }

    capitalizeFirstLetter = (string) =>{
        return string.charAt(0).toUpperCase() + string.slice(1);
    }


constructor(){
    super();
    console.log("Hello I am constructor!!");
    this.state = {
        articles : [],
        loading : false,
        page:1
    }
}

async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=202c22292e4d4c4babb0375b08bf38cf&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
        articles : parseData.articles,
        totalResults: parseData.totalResults
    })
}

handlePrev = async ()=>{
    console.log("prev called");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=202c22292e4d4c4babb0375b08bf38cf&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
        page : this.state.page-1,
        articles : parseData.articles
       
    })
}

handleNext = async ()=>{
    console.log("next called");
    
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=202c22292e4d4c4babb0375b08bf38cf&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
        page : this.state.page+1,
        articles : parseData.articles
    })
    
}

handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Access the submitted keyword from the input field
    const keyword = event.target.elements.searchInput.value;

    // Do something with the keyword, for example, show an alert
    // alert(`Submitted Keyword: ${keyword}`);
    console.log("alert");
    let url = `https://newsapi.org/v2/top-headlines?&apiKey=202c22292e4d4c4babb0375b08bf38cf&page=1&pageSize=12&q=${keyword}`;
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
        articles : parseData.articles,
        totalResults: parseData.totalResults
    })

    document.querySelector('.container h2').innerHTML = `Top Headlines - ${keyword}`
  };

  render() {
    return (
      <div>
        <div className='container my-3' >

       
            <form className="d-flex" role="search" onSubmit={this.handleSubmit}>
                    <input style={{ marginLeft: '0px'}} className="form-control me-2" type="search" placeholder="Enter a key word (e.g. ,Donald,Nasa)" aria-label="Search" name="searchInput" />
                    <button className="btn btn-outline-success" type="submit" id="submit">Search</button>
            </form>

            <h2 className='text-center'>Top Headlines - {this.capitalizeFirstLetter(this.props.category)}</h2>
            {/* <Loading/> */}
            
            <div className='row'>

            {this.state.articles.map((ele) => {
                return (
                        <div className='col-md-4'  key={ele.url}>
                            <NewsItem title={ele.title?(ele.title.slice(0,44)+"..."):""} description={ele.description?(ele.description.slice(0,88)+"..."):""} imageUrl={ele.urlToImage?ele.urlToImage:default_image} newsUrl={ele.url} author={ele.author?ele.author:"Unknown"} date={ele.publishedAt} source={ele.source.name}/>
                        </div>
                )
            })}
            </div>
            
        
        </div>
        <div className='container d-flex justify-content-between' style={{marginBottom:'20px'}}>
                <button disabled = {this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrev}> &larr; Previous</button>
                <button disabled = {this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNext}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
