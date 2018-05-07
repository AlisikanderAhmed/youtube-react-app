import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import {$, jQuery} from 'jquery';
import JSONP from 'jsonp';

const apiKey = 'AI39si7ZLU83bKtKd4MrdzqcjTVI3DK9FvwJR6a4kB_SW_Dbuskit-mEYqskkSsFLxN5DiG1OBzdHzYfW0zXWjxirQKyxJfdkg';
//url: "https://suggestqueries.google.com/complete/search?hl=en&ds=yt&client=youtube&hjson=t&cp=1&q="+query+"&key="+apiKey+"&format=5&alt=json&callback=?",

class YoutubeSearch extends Component {
  constructor(props){
    super(props);

    this.state = {
      inputValue: ''
    };

  }

  handleChange(event) {
    const
      self = this,
      query = event.target.value,
      url = "https://suggestqueries.google.com/complete/search?hl=en&ds=yt&client=youtube&hjson=t&cp=1&q="+query+"&key="+apiKey+"&format=5&alt=json&callback=?",
      inputValue = query;
      this.setState({inputValue});

    JSONP(url, function(error, data){
      if (error) {
        console.log(error);
      } else {
        const searchResults = data[1];
        self.setState({
          options: searchResults
        });
      }
    });
	}

  onClick(event, optionData) {
    const searchTerm = optionData[0];
    this.setState({inputValue: searchTerm});
  }

  render(){
    return(
      <div>

      <form action="" onsubmit="return false">
        <h2>Youtube Video Search</h2>
        <input type="text" className="form-input" />
        <button id="submit">Search</button>
      </form>

      <hr></hr>
      </div>
    );
  }

}
export default YoutubeSearch;
