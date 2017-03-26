import React, {PropTypes} from 'react';

const {string} = PropTypes;

// hoeft geen return want inline (geen {})
const SliderLabel = ({value}) => (
  <span className='slider-label'>{value}</span>
);

// sowieso string omdat de value die meegegeven is ook tekst kan zijn
SliderLabel.propTypes = {
  value: string.isRequired
};

export default SliderLabel;
