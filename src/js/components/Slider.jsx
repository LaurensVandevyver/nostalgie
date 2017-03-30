import React, {PropTypes} from 'react';
const {number, func, string} = PropTypes;

const Slider = ({
  value,
  onChangeYear,
  classp
}) => {

  const handleChangeYear = e => {
    const {value} = e.currentTarget;
    onChangeYear(parseInt(value));
  };

  return (
    <article className='slider'>
      <p className={classp}> {value + 1952} </p>
      <input
        className='slider-range'
        value={value} type='range'
        onChange={handleChangeYear}
        max='10'
      />
    </article>
  );
};

Slider.propTypes = {
  value: number.isRequired,
  onChangeYear: func.isRequired,
  classp: string.isRequired
};


export default Slider;
