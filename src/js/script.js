/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import {render} from 'react-dom';
import AppSlider from './containers/AppSlider';
import ScrollReveal from 'ScrollReveal';
import AppPlaylist from './containers/AppPlaylist';

window.sr = ScrollReveal();
//window.sr.reveal(`.left`, viewOffset: { top: 0, right: 0, bottom: 0, left: -100 });

//const active = 0;
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
  },
  {
    image: `../assets/img/album4.jpg`,
    url: `../assets/audio/four.mp3`
  }
];


const revealText = () => {
  window.sr.reveal(`.intro`);
  window.sr.reveal(`.articlestyle`);
  window.sr.reveal(`.articlestyle2`);
  window.sr.reveal(`cite`);
  window.sr.reveal(`.albumContainer`);
};

const onScroll = () => {
  revealText();
  window.requestAnimationFrame(() => {
    if (window.innerWidth >= 960) {
      checkContainer();
      focusElements();
      fixImages();
      checkScrollVelvet();
    }

  });
};

const checkScrollVelvet = () => {
  const $image = document.querySelector(`.drolletje`);
  const topImage = $image.getBoundingClientRect().top;
  console.log(topImage);
  if (topImage <= - 100 && topImage >= - 200) {
    $image.style.backgroundImage = `none`;
  } else if (topImage <= - 200 && topImage >= - 300) {
    $image.style.backgroundImage = `url(../assets/img/nico2_2.png)`;
  } else if (topImage <= - 300 && topImage >= - 400) {
    $image.style.backgroundImage = `url(../assets/img/nico2_3.png)`;
  } else if (topImage <= - 400 && topImage >= - 500) {
    $image.style.backgroundImage = `url(../assets/img/nico2_4.png)`;
  } else if (topImage <= - 500 && topImage >= - 600) {
    $image.style.backgroundImage = `url(../assets/img/nico2_5.png)`;
  } else if (topImage <= - 600 && topImage >= - 700) {
    $image.style.backgroundImage = `url(../assets/img/nico2_6.png)`;
  }  else if (topImage <= - 700 && topImage >= - 800) {
    $image.style.backgroundImage = `url(../assets/img/nico2_7.png)`;
  }  else if (topImage <= - 800) {
    $image.style.backgroundImage = `none`;
  }
};

const checkContainer = () => {
  const center = window.innerHeight * 0.4;
  const $container = document.querySelector(`.img-container`);
  const topContainer = $container.getBoundingClientRect().top;
  const bottomContainer = $container.getBoundingClientRect().bottom;
  if (center >= topContainer) {
    $container.style.visibility = `visible`;
  } else if (center >= bottomContainer) {
    $container.style.visibility = `hidden`;
  }
};

const focusElements = () => {
  const center = getCenterElement();
  //if (center !== active) {
  focusImage(center);
  //}
};

const fixImages = () => {
  //const $modelsection = document.querySelector(`.modelsection`);
  //const clientrect = $modelsection.getBoundingClientRect().top;
};

const getCenterElement = () => {
  const sections = document.querySelectorAll(`.model`);
  const center = window.innerHeight * 0.4;
  let id = 0;

  sections.forEach($section => {
    const top = $section.getBoundingClientRect().top;
    const bottom = $section.getBoundingClientRect().bottom;
    if (center > top && center < bottom) {
      id = parseInt($section.dataset.id);
    }
  });

  return id;
};

const focusImage = id => {
  const img1 = document.querySelector(`.content-img1`);
  const img2 = document.querySelector(`.content-img2`);
  const img3 = document.querySelector(`.content-img3`);
  if (id === 0) {
    img1.style.opacity = 0;
    img2.style.opacity = 0;
    img3.style.opacity = 0;
  } else if (id === 1) {
    img1.style.opacity = 1;
    img2.style.opacity = 0;
    img3.style.opacity = 0;
  } else if (id === 2) {
    img1.style.opacity = 0;
    img2.style.opacity = 1;
    img3.style.opacity = 0;
  } else if (id === 3) {
    img1.style.opacity = 0;
    img2.style.opacity = 0;
    img3.style.opacity = 1;
  }
};

const parallax = () => {
  const parallax = document.querySelectorAll(`.parallaxItems`);
  window.onscroll = function() {
    [].slice.call(parallax).forEach(function(el, i) {
      const speed = - 0.1 * (i / 1.2);
      const windowYOffset = window.pageYOffset, elBackgrounPos = `0%${windowYOffset * speed}px`;
      el.style.backgroundPosition = elBackgrounPos;
    });
  };
};

const init = () => {

  parallax();
  window.addEventListener(`scroll`, onScroll);

  render (
    <AppSlider />,
    document.querySelector(`.react-mount`)
   );

  for (let i = 0;i < songs.length;i ++) {
    render (
      <AppPlaylist image={songs[i].image} url={songs[i].url} />, document.querySelector(`.react-mount${2 + i}`)
    );
  }

};

init();
