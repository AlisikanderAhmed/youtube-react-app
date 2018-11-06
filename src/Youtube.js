import React, {Component} from 'react';

const API = 'AIzaSyAxjAvIUVI4pfPv1MF0mMefSqQ2PSy_GuQ'
const result = 5;
var results = '';

class Youtube extends Component {
  state = { showResults: false};

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
    var url = `https://www.googleapis.com/youtube/v3/search?key=${API}&part=snippet,id&order=date&maxResults=${result}&channelId=`

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
    var channelurl = `https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key=${API}&forUsername=`
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

  onClickHandler = ()=>{
    this.setState({showResults: true});
  };

  //value={this.state.value}
  //Smoove7182954

  render(){
    console.log(this.state.showResults);

    return(
      <div>

        <form onSubmit={this.handleSubmit} className="form">
          <label>
            <input type="text" className="form-input" value={this.state.value} onChange={this.handleChange} list="default-values"required/>
          </label>

          <datalist id="default-values">
            <option value="Google" />
            <option value="Ebay" />
            <option value="PayPal" />
          </datalist><br></br>

        <button type="submit" className="form-button" onClick={this.onClickHandler}>Search</button>
          {this.state.showResults ? results = (
              <div>
                <h1> Channel Name: {this.state.channelname} </h1>
                <h1> Date Created: {this.state.channelcreated.substring(0,10)} </h1>
                <h2> {this.state.description} <hr></hr> </h2>
                <img src={this.state.channelicon} alt=""></img>

                <h2> View Count: {this.state.statistics.viewCount} </h2>
                <h2> Youtuber's Comment Count: {this.state.statistics.commentCount} </h2>
                <h2> Subscriber Count: {this.state.statistics.subscriberCount} </h2>
                <h2> Video Count: {this.state.statistics.videoCount} </h2>

              </div>) : null }    {/*  Only Show Results Once Clicked else null*/}
        </form>

        <hr></hr>
        <h1 className="recent-h1">Most Recent Youtube Videos</h1>
        <button onClick={this.clicked} className="form-button">Fetch Most Recent Videos</button>
        {
          this.state.resultyt.map((link, i) => {
            console.log(link);
            var frame = <div className="youtube"> <iframe key={i} width="560" height="315" src={link} frameBorder="0" allowFullScreen title="Youtube Video"></iframe> </div>
            return frame;
          })
        }
        {this.frame}
        <hr className="hr-extra"></hr>
      </div>
    );
  }
}

export default Youtube;
