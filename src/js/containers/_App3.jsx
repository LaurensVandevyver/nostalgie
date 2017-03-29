import React, {Component} from 'react';
import Sound from 'react-sound';

class App3 extends Component {
  state = {
    songs: 3,
    playStatus: Sound.status.PLAYING
  }

  render() {
    const {songs, playStatus} = this.state;
  }
}
