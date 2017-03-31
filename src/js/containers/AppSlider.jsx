import React, {Component} from 'react';
import Slider from '../components/Slider';

class App extends Component {

  state = {
    value: 0,
    anim: true
  }

  handleChangeYear = value => {

    this.setState({anim: false});
    setTimeout(() => {this.setState({anim: true});}, 10);

    this.setState({value: value});
  }

  render() {
    const {value, anim} = this.state;
    const style = {backgroundImage: `url(./assets/img/caroussel${value}.jpg)`};

    let classes;
    if (anim) classes = ` anim`;

    return (
      <section className='gallery react-mount1' style={style}>
        <Slider className='slider' value={parseInt(value)} onChangeYear={this.handleChangeYear} classp={classes} />
      </section>
    );
  }
}

export default App;
