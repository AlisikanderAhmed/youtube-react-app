import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery'
import 'jquery-ui/ui/widgets/autocomplete.js';
import 'jquery-ui/themes/base/autocomplete.css';
import 'jquery-ui/themes/base/jquery-ui/jquery-ui.css';


//const apiKey = 'AI39si7ZLU83bKtKd4MrdzqcjTVI3DK9FvwJR6a4kB_SW_Dbuskit-mEYqskkSsFLxN5DiG1OBzdHzYfW0zXWjxirQKyxJfdkg';
//url: "https://suggestqueries.google.com/complete/search?hl=en&ds=yt&client=youtube&hjson=t&cp=1&q="+query+"&key="+apiKey+"&format=5&alt=json&callback=?",

class YoutubeSearch extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      inputValue: ''
    };

  }

  componentDidMount() {
    $("#youtube").autocomplete({
        source: function(request, response){
            var apiKey = 'AI39si7ZLU83bKtKd4MrdzqcjTVI3DK9FvwJR6a4kB_SW_Dbuskit-mEYqskkSsFLxN5DiG1OBzdHzYfW0zXWjxirQKyxJfdkg';
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
        // },
        // select: function( event, ui ) {
        //     $.youtubeAPI(ui.item.label);
        // }
    });
  }

  render(){
    return(
      <div>

      <form action="">
        <h2>Youtube Video Search With Input Auto Complete</h2>
        <input type="text" className="form-input" id="youtube" /> <br></br>
        <button id="submit">Search</button>
      </form>

      <hr></hr>
      </div>
    );
  }

}
export default YoutubeSearch;
