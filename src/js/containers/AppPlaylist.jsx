import React, {Component, PropTypes} from 'react';

const {string} = PropTypes;

class AppPlaylist extends Component {
  state = {play: false, url: this.props.url}

  handlePlay = e => {
    const {play} = this.state;
    this.setState({play: !play});

    const $button = e.currentTarget;
    $button.classList.toggle(`pausebutton`);
    $button.classList.toggle(`playbutton`);
  };

  render() {
    const {image, url} = this.props;
    const {play} = this.state;

    if (this.$audio) {
      if (play) {
        this.$audio.play();
      } else {
        this.$audio.pause();
      }
    }

    return (
      <section className='albumContainer'>
        <img className='album'src={image} />
        <button className='playbutton' onClick={this.handlePlay}>Play</button>
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
