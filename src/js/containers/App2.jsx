import React, {PropTypes} from 'react';

const {string} = PropTypes;


const App2 = ({
  image,
  url
}) => {

  return (
    <section>
      <img src={image}></img>
      <audio controls>
        <source src={url} type='audio/mpeg' />
      </audio>
    </section>
  );

};

App2.propTypes = {
  image: string.isRequired,
  url: string.isRequired
};


export default App2;
