import React, {Component} from 'react';

import Slider from '../components/Slider';

class App extends Component {

  // de kanalen in de state zetten omdat die alsmaar veranderen
  // dit is het enige dat in de state moet
  state = {
    value: 0
  }

  handleChangeYear = value => {
    this.setState({value: value});
  }

  render() {

    const {value} = this.state;

    // inline style via style object
    const style = {
      backgroundImage: `url(../assets/img/caroussel${value}.jpg)`
    };

    return (

      <section className='gallery'>
        <div className='react-mount1' style={style}>
          <Slider className='slider' value={parseInt(value)} onChangeYear={this.handleChangeYear} />
        </div>
      </section>

      // inline style adhv style=... instellen
      // onChangeChannel wordt meegegeven als prop met als value de func die hierboven staat -> STATE SETTEN
      // deze functie wordt dus elke keer uitgevoerd als handleChangeChannel in het slider component uitgevoerd wordt

    );

  }

}

// elke keer bij elk component exporten
export default App;
