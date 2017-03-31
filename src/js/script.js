/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import {render} from 'react-dom';
import AppSlider from './containers/AppSlider';
import AppPlaylist from './containers/AppPlaylist';
// import ScrollReveal from 'ScrollReveal';

// window.sr = ScrollReveal();
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
  const $containers = document.querySelectorAll(`.intro, .articlestyle, .articlestyle2`);
  const center = window.innerHeight * 0.9;

  $containers.forEach($container => {
    const top = $container.getBoundingClientRect().top;
    const bottom = $container.getBoundingClientRect().bottom;
    if (center > top && center < bottom) {
      $container.style.visibility = `visible`;
    }
  });
};

const parallax = () => {
  const parallax = [];
  for (let i = 1;i < 7;i ++) {
    parallax.push(document.querySelectorAll(`.parallaxItem${i}`));
  }
  const windowYOffset = [
    window.pageYOffset,
    document.querySelector(`.parallaxSection2`).getBoundingClientRect().top,
    document.querySelector(`.parallaxSection2`).getBoundingClientRect().top,
    document.querySelector(`.parallaxItem4`).getBoundingClientRect().top + 2000,
    document.querySelector(`.parallaxSection5`).getBoundingClientRect().top,
    document.querySelector(`.parallaxItem6`).getBoundingClientRect().top
  ];

  parallax[0].forEach((el, i) => {
    const speed = - 0.09 * (i + 1);
    const elBackgrounPos = `0%${windowYOffset[0] * speed}px`;
    el.style.backgroundPosition = elBackgrounPos;
  });
  parallax[1].forEach((el, i) => {
    const speed = - 0.15 * (i + 1);
    const elBackgrounPos = `0%${windowYOffset[1] * speed}px`;
    el.style.backgroundPosition = elBackgrounPos;
  });
  parallax[2].forEach((el, i) => {
    const speed = + 0.05 * (i + 1);
    const elBackgrounPos = `0%${windowYOffset[2] * speed}px`;
    el.style.backgroundPosition = elBackgrounPos;
  });
  parallax[3].forEach(el => {
    const speed = 0.15;
    const elBackgrounPos = `0%${windowYOffset[3] * speed}px`;
    el.style.backgroundPosition = elBackgrounPos;
  });
  parallax[4].forEach((el, i) => {
    const speed = - 0.09 * (i + 1);
    const elBackgrounPos = `0%${windowYOffset[4] * speed}px`;
    el.style.backgroundPosition = elBackgrounPos;
  });
  parallax[5].forEach(el => {
    const speed = 0.05;
    const elBackgrounPos = `0%${windowYOffset[5] * speed}px`;
    el.style.backgroundPosition = elBackgrounPos;
  });
};

const onScroll = () => {
  revealText();
  requestAnimationFrame(() => {
    if (innerWidth >= 800) {
      parallax();
      checkContainer();
      focusElements();
    }
    if (innerWidth >= 1050) {
      checkScrollVelvet();
    } else {
      document.querySelector(`.drolletje`).style.backgroundImage = `none`;
    }
  });
};

const checkScrollVelvet = () => {
  const $image = document.querySelector(`.drolletje`);
  const topImage = $image.getBoundingClientRect().top;

  for (let i = 2;i < 7;i ++) {
    if (topImage <= i * (- 100) && topImage >= i * (- 100) - 100) {
      $image.style.backgroundImage = `url(../assets/img/nico2_${i}.png)`;
    } else if (topImage >= 0 || topImage <= - 600) {
      $image.style.backgroundImage = `none`;
    }
  }
};

const checkContainer = () => {
  const center = window.innerHeight * 0.2;
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
  focusImage(center);
};

const getCenterElement = () => {
  const sections = document.querySelectorAll(`.model`);
  const center = window.innerHeight * 0.45;
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

const init = () => {

  addEventListener(`scroll`, onScroll);

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
