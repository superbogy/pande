import React, {Component, PropTypes} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import MainSection from '../components/MainSection'
import * as actions from '../actions'
import LeftBar from '../components/LeftBar';
class App extends Component {

  blur (element, src, strength) {
    var image = new Image();
    image.setAttribute('crossOrigin', 'anonymous');
    image.width = window.screen.availWidth;
    image.height = window.screen.availHeight;
    image.onload =  (e) => {
      console.log(image);
      var canvas = document.createElement('canvas');
      var context = canvas.getContext('2d');
      canvas.width = image.width;
      canvas.height = image.height;
      context.drawImage(image, 0, 0);
      context.globalAlpha = 0.5; // Higher alpha made it more smooth
      for (var y = -strength; y <= strength; y += 2) {
        for (var x = -strength; x <= strength; x += 2) {
          context.drawImage(canvas, x, y);
        }
      }
      context.globalAlpha = 1;
      console.log(canvas);
      element.style.background = 'url(' + canvas.toDataURL() + ')';
      // element.style.backgroundRepeat = 'no-repeat';
      // element.style.backgroundSize = 'cover';
    };

    image.src = src;
  }

  componentDidMount () {
    this.blur(document.getElementById('bg'), 'http://mulberry.b0.upaiyun.com/demo/rain.jpg', 5);
  }

  render () {
    const { pande, actions } = this.props;
    return (
      <div>
        <MainSection pande={pande} actions={actions}/>
      </div>
    )
  }
}


App.propTypes = {
  pande: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps (state) {
  console.log("|=================state===================");
  console.log(state);
  console.log("|=================state===================|");
  return {
    pande: state.pande
  }
}

function mapDispatchToProps (dispatch) {
  console.log("<-------------dispatch-----------");
  console.log(dispatch);
  console.log("-------------dispatch----------->");
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
