import React from 'react';
import Seasons from './components/Seasons';

// function App() {
//   const location = window.navigator.geolocation.getCurrentPosition(
//     (response) => {
//       console.log(response);
//       return response;
//     },
//     (error) => {
//       console.log(error);
//     }
//   );

//   console.log(location);

//   return (
//     <div>
//       <Seasons season='summer' />
//     </div>
//   );
// }

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: 40 };
  }

  componentDidMount() {
    const location = window.navigator.geolocation.getCurrentPosition(
      (response) => {
        console.log(response);
        setTimeout(() => {
          this.setState({ lat: response.coords.latitude });
        }, 3000);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  render() {
    return (
      <div>
        <p>latitude is : {this.state.lat}</p>
        <Seasons lat={this.state.lat} />
      </div>
    );
  }
}

export default App;
