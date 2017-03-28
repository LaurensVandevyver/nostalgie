/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import {render} from 'react-dom';
import App from './containers/App';
import ScrollReveal from 'ScrollReveal';
// import App2 from './containers/App2';

window.sr = ScrollReveal();
window.sr.reveal(`.intro`);
window.sr.reveal(`.articlestyle`);
window.sr.reveal(`.articlestyle2`);

const active = 0;

const onScroll = () => {
  window.requestAnimationFrame(() => {
    if (window.innerWidth >= 960) {
      focusElements();
    }
  });
};

const focusElements = () => {
  const center = getCenterElement();
  if (center !== active) {
    focusSection(center);
    focusImage(center);
  }
};

const focusSection = id => {
  const $prevSection = document.querySelector(`model2 .focus`);
  if ($prevSection) {
    $prevSection.classList.remove(`focus`);
  }

  const $nextSection = document.querySelector(`.model[data-id="${id}"]`);
  $nextSection.classList.add(`focus`);
};

const focusImage = id => {
  const $prevImg = document.querySelector(`img.focus`);
  if ($prevImg) {
    $prevImg.classList.remove(`focus`);
  }

  const $nextImg = document.querySelector(`img[data-id="${id}"]`);
  $nextImg.classList.add(`focus`);
};

const getCenterElement = () => {
  const sections = document.querySelectorAll(`.model`);
  const center = window.innerHeight * 0.4;
  let id = 1;

  sections.forEach($section => {
    const top = $section.getBoundingClientRect().top;
    const bottom = $section.getBoundingClientRect().bottom;
    if (center > top && center < bottom) {
      id = parseInt($section.dataset.id);
    }
  });

  return id;
};

const init = () => {

  render (
    <App />,
    document.querySelector(`.react-mount`),
    // <App2 song={songs[0]} />,
    // document.querySelector(`.react-mount2`),
    // <App2 song={songs[1]} />,
    // document.querySelector(`.react-mount3`),
    // <App2 song={songs[3]} />,
    // document.querySelector(`.react-mount4`)
   );

  window.addEventListener(`scroll`, onScroll);

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

};

init();
