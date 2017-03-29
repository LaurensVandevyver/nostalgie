import React, {PropTypes} from 'react';

const {string} = PropTypes;


const App2 = ({
  image,
  url
}) => {

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

  return (
    <section>
      <h1>dit is app 2</h1>
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
