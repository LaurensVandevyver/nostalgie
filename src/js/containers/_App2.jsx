import React, {Component} from 'react';
import AudioPlayer from '../components/AudioPlayer';


class App2 extends Component {

  state = {
    songs: [
      {
        image: `../assets/img/album1`,
        url: `../assets/audio/one.mp3`
      }
    ]
  };

  render() {

    const {songs, image} = this.state;

    return (
    <section>
      <img src={image}></img>
      <AudioPlayer songs={songs} />
    </section>
    );
  }

}

export default App2;
