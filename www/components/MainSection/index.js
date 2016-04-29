/**
 * Created by bugbear on 16/4/27.
 */
import React, {Component, PropTypes} from 'react'
import style from './index.scss';
import IconButton from 'material-ui/lib/icon-button';
import Pcard from '../Pcard';


class MainSection extends Component {
  constructor (props, context) {
    super(props, context);
    this.state = { filter: 1 };
  }

  handleClearCompleted () {
    this.props.actions.clearCompleted();
  }

  blur (element, src, strength) {
    var image = new Image();
    image.setAttribute('crossOrigin', 'anonymous');
    image.onload = (e) => {
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
      element.style.backgroundRepeat = 'no-repeat';
    };
    image.src = src;

  }

  componentWillMount () {
    this.blur(document.getElementById('bg'), 'http://mulberry.b0.upaiyun.com/demo/rain.jpg', 5);
  }


  componentDidMount () {
    this.props.actions.addTodo('如今已四海为家');
    console.log("123123");

  }

  render () {
    const { pande, actions } = this.props;
    console.log(this.props);
    return (
      <div>
        <div className={style.main}>
          <div className={style.introduce}>
            <div className={style.page}></div>
            <p> 曾梦想仗剑走天涯, {this.props.pande[0].text}</p>
          </div>

          <Pcard />
          <Pcard />
          <Pcard />
          <Pcard />
        </div>

      </div>
    )
  }
}

MainSection.propTypes = {
  pande: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

export default MainSection
