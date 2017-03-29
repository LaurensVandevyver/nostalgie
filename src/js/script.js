/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import {render} from 'react-dom';
import AppSlider from './containers/AppSlider';
import ScrollReveal from 'ScrollReveal';
import AppPlaylist from './containers/AppPlaylist';

window.sr = ScrollReveal();
//window.sr.reveal(`.left`, viewOffset: { top: 0, right: 0, bottom: 0, left: -100 });

const active = 0;

const revealText = () => {
  window.sr.reveal(`.intro`);
  window.sr.reveal(`.articlestyle`);
  window.sr.reveal(`.articlestyle2`);
};

const onScroll = () => {
  revealText();
  window.requestAnimationFrame(() => {
    if (window.innerWidth >= 960) {
      focusElements();
      fixImages();
    }
  });
};

const focusElements = () => {
  const center = getCenterElement();
  if (center !== active) {
    focusImage(center);
  }
};

const fixImages = () => {
  const modelcontainer = document.querySelector(`.modelsection`);
  const top = modelcontainer.getBoundingClientRect().top;
  console.log(top);
  if (top === 199) {
    document.querySelector(`.img-container`).classList.add(`.fixed`);
  }
};

const focusImage = id => {
  if (id === 1) {
    document.querySelector(`.content-img1`).style.opacity = 1;
    document.querySelector(`.content-img2`).style.opacity = 0;
    document.querySelector(`.content-img3`).style.opacity = 0;
  } else if (id === 2) {
    document.querySelector(`.content-img1`).style.opacity = 0;
    document.querySelector(`.content-img2`).style.opacity = 1;
    document.querySelector(`.content-img3`).style.opacity = 0;
  } else {
    document.querySelector(`.content-img1`).style.opacity = 0;
    document.querySelector(`.content-img2`).style.opacity = 0;
    document.querySelector(`.content-img3`).style.opacity = 1;
  }
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

// const focusElements = () => {
//   const center = getCenterElement();
//   if (center !== active) {
//     focusSection(center);
//     focusImage(center);
//   }
// };
//
// const focusSection = id => {
//   const $prevSection = document.querySelector(`model2 .focus`);
//   if ($prevSection) {
//     $prevSection.classList.remove(`focus`);
//   }
//
//   const $nextSection = document.querySelector(`.model[data-id="${id}"]`);
//   $nextSection.classList.add(`focus`);
// };
//
// const focusImage = id => {
//   const $prevImg = document.querySelector(`img.focus`);
//   if ($prevImg) {
//     //$prevImg.classList.add(`fadeout`);
//     // $prevImg.classList.remove(`focus`);
//     $prevImg.style.opacity = 0;
//   }
//
//   const $nextImg = document.querySelector(`img[data-id="${id}"]`);
//   $nextImg.classList.add(`focus`);
//   $nextImg.style.opacity = `.9`;
// };
//
// const getCenterElement = () => {
//   const sections = document.querySelectorAll(`.model`);
//   const center = window.innerHeight * 0.4;
//   let id = 1;
//
//   sections.forEach($section => {
//     const top = $section.getBoundingClientRect().top;
//     const bottom = $section.getBoundingClientRect().bottom;
//     if (center > top && center < bottom) {
//       id = parseInt($section.dataset.id);
//     }
//   });
//
//   return id;
// };

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
    <AppSlider />,
    document.querySelector(`.react-mount`)
   );

  for (let i = 0;i < songs.length;i ++) {
    render (
      <AppPlaylist image={songs[i].image} url={songs[i].url} />, document.querySelector(`.react-mount${2 + i}`)
    );
  }

  window.addEventListener(`scroll`, onScroll);

};

init();
