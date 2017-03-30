import React, {Component, PropTypes} from 'react';
//import ClickPlay from '../components/ClickPlay';

const {string} = PropTypes;


class AppPlaylist extends Component {
  state = {play: false, url: this.props.url}

  handlePlay = () => {
    const {play} = this.state;
    this.setState({play: !play});
  };

  render() {

    const {image, url} = this.props;
    const {play} = this.state;

    if (this.$audio) {
      if (play) this.$audio.play();
      else this.$audio.pause();
    }

    return (
      <section className='albumContainer'>
        <img src={image} />
        <p>{url}</p>
        <button onClick={this.handlePlay}>Play</button>
        <audio src={url} ref={$el => this.$audio = $el} />
      </section>
    );
  }
}

AppPlaylist.propTypes = {
  image: string.isRequired,
  url: string.isRequired
};

export default AppPlaylist;
