import React from 'react';
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Main from './Main'; // Our custom react component
import Toolbar from './Toolbar'; // Our custom react component
import qwest from 'qwest';



// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
var url = 'http://localhost:3002/api/home';

qwest.get(url)
  .then(function(xhr, resp){
    if(resp){
      console.log(resp);
      console.log('hello');
    }
});

render(<Toolbar />, document.getElementById('toolbar'));
render(<Main />, document.getElementById('app-body'));
