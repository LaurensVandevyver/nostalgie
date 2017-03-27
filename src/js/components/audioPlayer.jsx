import React, {PropTypes} from 'react';

const audioPlayer = ({url, image}) => {

  return (
      <audioPlayer url={url} image={image} />
  );
};

audioPlayer.propTypes = {
  url: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default audioPlayer;
