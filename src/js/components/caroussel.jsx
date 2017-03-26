import React from 'react';
const ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        `../assets/img/caroussel1.jpg`,
        `../assets/img/caroussel2.jpg`,
        `../assets/img/caroussel3.jpg`,
        `../assets/img/caroussel4.jpg`,
        `../assets/img/caroussel5.jpg`,
        `../assets/img/caroussel6.jpg`
      ],
      current: 0,
      isNext: true
    };
    this.handlePrev = this.handlePrev.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.goToHistoryClick = this.goToHistoryClick.bind(this);
  }

  handlePrev() {
    const index = this.state.current,
      length = this.state.items.length;

    if (index < 1) {
      const index = length;
      console.log(index);
    }

    this.index = index - 1;

    this.setState({
      current: index,
      isNext: false
    });
  }

  handleNext() {
    const index = this.state.current,
      length = this.state.items.length - 1;

    if (index === length) {
      const index = - 1;
      console.log(index);
    }

    this.index = index + 1;

    this.setState({
      current: index,
      isNext: true
    });
  }

  goToHistoryClick(curIndex, index) {
    const next = (curIndex < index);
    this.setState({
      current: index,
      isNext: next
    });
  }

  render() {
    const index = this.state.current,
      isnext = this.state.isNext,
      src = this.state.items[index];

    return (
          <div className='app'>
            <div className='react-mount'>
             <ReactCSSTransitionGroup
                transitionName={{
                  enter: isnext ? `enter-next` : `enter-prev`,
                  enterActive: `enter-active`,
                  leave: `leave`,
                  leaveActive: isnext ? `leave-active-next` : `leave-active-prev`
                }}
               >
                 <div className='carousel_slide' key={index}>
                   <img src={src} />
                 </div>
               </ReactCSSTransitionGroup>
               <button className='carousel_control carousel_control__prev' onClick={this.handlePrev}><span></span></button>
               <button className='carousel_control carousel_control__next' onClick={this.handleNext}><span></span></button>
              <div className='carousel_history'>
                <History
                  current={this.state.current}
                  items={this.state.items}
                  changeSilde={this.goToHistoryClick}
                />
              </div>
              </div>
          </div>
    );
  }
}

export default App;
