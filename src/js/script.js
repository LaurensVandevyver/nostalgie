/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import {render} from 'react-dom';
import App from './containers/App';
import App2 from './containers/App2';

const init = () => {

  const songs = [
    {
      image: `../assets/img/album1.jpg`,
      url: `../assets/audio/one.mp3`
    },
    {
      image: `../assets/img/album2.jpg`,
      url: `../assets/audio/two.mp3`
    },
    {
      image: `../assets/img/album3.jpg`,
      url: `../assets/audio/three.mp3`
    }
  ];

  render (
    <App />,
    document.querySelector(`.react-mount`),
    <App2 song={songs[0]} />,
    document.querySelector(`.react-mount2`),
    <App2 song={songs[1]} />,
    document.querySelector(`.react-mount3`),
    <App2 song={songs[3]} />,
    document.querySelector(`.react-mount4`)
   );

};

init();

// {
//
//   const model = document.querySelector(`.modelsection`);
//   let active = 0;
//
//   const onScroll = () => {
//     window.requestAnimationFrame(() => {
//       focusElements();
//     });
//   };
//
//   const focusElements = () => {
//     const center = getCenterElement();
//     if (center !== active) {
//       focusImage(center);
//       active = center;
//     }
//   };
//
//   const getCenterElement = () => {
//     const sections = document.querySelectorAll(`.model`);
//     const center = model.innerHeight * 0.4;
//     console.log(center);
//     const id = 1;
//
//     sections.forEach($section => {
//       const top = $section.getBoundingClientRect().top;
//       const bottom = $section.getBoundingClientRect().bottom;
//       if (center > top && center < bottom) {
//         const id = parseInt($section.dataset.id);
//         console.log(id);
//       }
//     });
//     return id;
//   };
//
//   const focusImage = id => {
//     const $prevImg = document.querySelector(`img.focus`);
//     if ($prevImg) {
//       $prevImg.classList.remove(`focus`);
//     }
//
//     const $nextImg = document.querySelector(`img[data-id="${id}"]`);
//     $nextImg.classList.add(`focus`);
//   };
//
//   const init = () => {
//     const height = parseInt(model.height);
//     console.log(height);
//     window.addEventListener(`scroll`, onScroll);
//   };
//
//   init();
//
// }
