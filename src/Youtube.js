import React, {Component} from 'react';

const API = 'AIzaSyAxjAvIUVI4pfPv1MF0mMefSqQ2PSy_GuQ'
const result = 5;

var url = `https://www.googleapis.com/youtube/v3/search?key=${API}&part=snippet,id&order=date&maxResults=${result}&channelId=`
var channelurl = `https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key=${API}&forUsername=`

class Youtube extends Component {

  constructor(props){
    super(props);

    this.state = {
      resultyt: [],
      value: '',
      channelname: '',
      channelicon: '',
      channelid: '',
      channelcreated: '',
      description: '',
      statistics: []
    };
    this.clicked = this.clicked.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  clicked(){
    url+=this.state.channelid;
    fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      const resultyt = responseJson.items.map(obj => "https://www.youtube.com/embed/"+obj.id.videoId);
      this.setState({resultyt});
    })

    .catch((error) => {
      console.error(error);
    });
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {

    event.preventDefault();

    channelurl += this.state.value;

    fetch(channelurl)
    .then((response) => response.json())
    .then((responseJson) => {
      const channelname = responseJson.items[0].snippet.title;
      const channelicon = responseJson.items[0].snippet.thumbnails.default.url;
      const channelcreated = responseJson.items[0].snippet.publishedAt;
      const statistics = responseJson.items[0].statistics;
      const description = responseJson.items[0].snippet.description;
      const channelid = responseJson.items[0].id;

      this.setState({channelid});
      this.setState({description});
      this.setState({statistics});
      this.setState({channelcreated});
      this.setState({channelname});
      this.setState({channelicon});

    })

    .catch((error) => {
      console.error(error);
    });
  }

  //value={this.state.value}
  //Smoove7182954

  render(){
    //console.log(this.state.resultyt);
    console.log(this.state.channelName);

    return(
      <div>
        <form onSubmit={this.handleSubmit} className="form">
          <label>
            <input type="text" className="form-input" value={this.state.value} onChange={this.handleChange} />
          </label>
          <button type="submit" className="form-button">Search</button>
        </form>

        <h1> Channel Name: {this.state.channelname} </h1>
        <h2> Date Created: {this.state.channelcreated.substring(0,10)} </h2>
        <h2> {this.state.description} <hr></hr> </h2>

        <h2> View Count: {this.state.statistics.viewCount} </h2>
        <h2> Youtuber's Comment Count: {this.state.statistics.commentCount} </h2>
        <h2> Subscriber Count: {this.state.statistics.subscriberCount} </h2>
        <h2> Video Count: {this.state.statistics.videoCount} </h2>

        <img src={this.state.channelicon} alt=""></img>
        <hr></hr>
        <button onClick={this.clicked}>Fetch Most Recent Videos</button>
        {
          this.state.resultyt.map((link, i) => {
            console.log(link);
            var frame = <div className="youtube"> <iframe key={i} width="560" height="315" src={link} frameBorder="0" allowFullScreen title="Youtube Video"></iframe> </div>
            return frame;
          })
        }
        {this.frame}
      </div>
    );
  }
}

export default Youtube;
