import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Canvas from './components/Canvas';

class App extends Component {
  render(){
    return(
      // <div className="App">
      //   <h1>{this.props.message}</h1>
      // </div>
      <Canvas />
    );
  }
}

App.propTypes = {
  message: PropTypes.string.isRequired,
};

export default App;


// New functional component way

// function App() {
//   return (
//     <div className="App">
//       <h1>We will create an awesome game with React, Redux, and SVG!</h1>
//     </div>
//   );
// }

// export default App;
