import React from 'react';
import $ from 'jquery'
import 'jquery-ui/ui/widgets/autocomplete.js';
import 'jquery-ui/themes/base/autocomplete.css';
import 'jquery-ui/themes/base/jquery-ui/jquery-ui.css';

//url: "https://suggestqueries.google.com/complete/search?hl=en&ds=yt&client=youtube&hjson=t&cp=1&q="+query+"&key="+apiKey+"&format=5&alt=json&callback=?",
const API = 'AIzaSyAxjAvIUVI4pfPv1MF0mMefSqQ2PSy_GuQ'
const result = 5;

class YoutubeSearch extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      resultyt: [],
      inputvalue: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onClickHandler = ()=>{
    const input = document.getElementById("youtube").value;
    this.setState({inputvalue:input});
  };

  handleSubmit(event) {
    var url = `https://www.googleapis.com/youtube/v3/search?key=${API}&part=snippet,id&order=date&maxResults=${result}&q=`

    url+=this.state.inputvalue;
    fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      const resultyt = responseJson.items.map(obj => "https://www.youtube.com/embed/"+obj.id.videoId);
      this.setState({resultyt});
    })

    .catch((error) => {
      console.error(error);
    });
  };

  componentDidMount() {
    $("#youtube").autocomplete({
      source: function(request, response){
        var apiKey = 'AIzaSyAxjAvIUVI4pfPv1MF0mMefSqQ2PSy_GuQ';
        var query = request.term;
        $.ajax({
          url: "https://suggestqueries.google.com/complete/search?hl=en&ds=yt&client=youtube&hjson=t&cp=1&q="+query+"&key="+apiKey+"&format=5&alt=json&callback=?",
          dataType: 'jsonp',
          success: function(data, textStatus, request) {
            response( $.map( data[1], function(item) {
              return {
                label: item[0],
                value: item[0]
              }
            }));
          }
        });
      }
    });

  }

  render(){
    return(
      <div>

        <form onSubmit={this.handleSubmit}>
          <h1 id="video">Youtube Video Search With Form Auto Complete</h1>
          <input type="text" className="form-input" id="youtube"/> <br></br>
          <button id="submit" className="form-button2" onClick={this.onClickHandler}>Search</button>
        </form>{
          this.state.resultyt.map((link, i) => {
            console.log(link);
            var frame = <div className="container youtube"> <iframe key={i} width="560" height="315" src={link} frameBorder="0" allowFullScreen title="Youtube Video"></iframe> </div>
            return frame;
          })
        }
        {this.frame}

        <hr></hr>
      </div>
    );
  }

}
export default YoutubeSearch;
