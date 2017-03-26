// proptypes ook importen want er worden props meegegeven
import React, {PropTypes} from 'react';
// al meegeven dat deze datatypes proptypes zijn
const {number, func} = PropTypes;


const Slider = ({
  value,
  onChangeYear
}) => {

  const handleChangeYear = e => {

    // value ophalen uit target
    const {value} = e.currentTarget;

    // onChangeChannel prop in App triggeren
    // value van een input is altijd een string
    // van string naar number omzetten via parseInt(...)
    onChangeYear(parseInt(value));

  };

  return (

    // OnChange: voert handle func uit

    <article className='slider'>

      <input
        className='slider-range'
        value={value} type='range'
        onChange={handleChangeYear}
        max='5'
      />

    </article>

  );

};

Slider.propTypes = {
  // integer bestaat niet in PropTypes, number gebruiken
  value: number.isRequired,
  onChangeYear: func.isRequired
};


export default Slider;
