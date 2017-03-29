import React, {Component, PropTypes} from 'react';
//import ClickPlay from '../components/ClickPlay';

const {string} = PropTypes;


class AppPlaylist extends Component {
  state = {play: true, url: this.props.url}

  // const songs = [
  //   {
  //     image: `../assets/img/album1.jpg`,
  //     url: `../assets/audio/one.mp3`
  //   },
  //   {
  //     image: `../assets/img/album2.jpg`,
  //     url: `../assets/audio/two.mp3`
  //   },
  //   {
  //     image: `../assets/img/album3.jpg`,
  //     url: `../assets/audio/three.mp3`
  //   }
  // ];

  // return (
  //   <section>
  //     <img src={song.image} alt={song.image} />
  //     <audio controls>
  //       <source src={song.url} type='audio/mpeg' />
  //     </audio>
  //   </section>
  // );
  handlePlay = () => {
    const {play, url} = this.state;
    this.setState({url});
    const audio = new Audio(this.state.url);
    audio.pause();
    if (play) {
      console.log(`speel ${this.state.url} af`);
      console.log(audio);
      audio.play();
      this.setState({play: false});
      console.log(this.state.play);
    }
    if (!play) {
      console.log(`stop met spelen van ${this.state.url}`);
      console.log(audio);
      audio.pause();
      this.setState({play: true});
      console.log(this.state.play);
    }
  };

  render() {
    const {image, url} = this.props;

    return (
      <section>
        <img src={image} />
        <p>{url}</p>
        <button onClick={this.handlePlay}>Play</button>
      </section>
    );

    // {song.map(s => {
    //   return (
    //     <Song
    //       key='1'
    //       {...s}
    //       onClick={handleClickPlay}
    //     />
    //   );
    // });}
  }
}

AppPlaylist.propTypes = {
  image: string.isRequired,
  url: string.isRequired
};

export default AppPlaylist;
