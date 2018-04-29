import React, {Component} from 'react';


const API = 'AIzaSyAxjAvIUVI4pfPv1MF0mMefSqQ2PSy_GuQ'
const channelId = 'UC_x5XG1OV2P6uZZ5FSM9Ttw'
const result = 5;

var url = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${result}`

class Youtube extends Component {

  constructor(props){
    super(props);

    this.state = {
      resultyt: []
    };
    this.clicked = this.clicked.bind(this);
}

clicked(){
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


  render(){
    console.log(this.state.resultyt);

    return(
      <div>
        <button onClick={this.clicked}>Fetch Videos</button>
        {
          this.state.resultyt.map((link, i) => {
            console.log(link);
            var frame = <div className="youtube"> <iframe key={i} width="560" height="315" src={link} frameBorder="0" allowFullScreen></iframe> </div>
            return frame;
          })
        }
        {this.frame}
      </div>
    );
  }
}

export default Youtube;
