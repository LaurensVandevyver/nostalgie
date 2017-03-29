// proptypes ook importen want er worden props meegegeven
import React, {PropTypes} from 'react';
// al meegeven dat deze datatypes proptypes zijn
const {string, func} = PropTypes;

const Song = ({
  image,
  url,
  onClick
}) => {

  // state = {
  //   play: true
  // };

  const handlePlay = e => {
    console.log(e);
  };

  console.log(image, url, onClick, handlePlay);

  return (
    <section>
      <img src={image} onClick={handlePlay} />
      <p>{url}</p>
    </section>
  );

};

Song.propTypes = {
  image: string.isRequired,
  url: string.isRequired,
  onClick: func.isRequired
};


export default Song;
