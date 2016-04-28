/**
 * Created by bugbear on 16/4/27.
 */
import React, { Component, PropTypes } from 'react'
import style from './index.scss';
import IconButton from 'material-ui/lib/icon-button';


class MainSection extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { filter: 1 };
  }

  handleClearCompleted() {
    this.props.actions.clearCompleted();
  }

  handleTest() {
    console.log(this.props);
  }

  componentDidMount(){
    this.props.actions.addTodo('如今已四海为家');
    console.log("123123");
  }

  render() {
    const { pande, actions } = this.props;
    console.log(this.props);
    return (
      <div className={style.main}>
        <div className={style.introduce}>
          <div className={style.page}> </div>
          <p> 曾梦想仗剑走天涯, {this.props.pande[0].text}</p>
        </div>
          <IconButton
            iconClassName="muidocs-icon-custom-github" tooltip="bottom-center"
            tooltipPosition="bottom-center"
          />
      </div>
    )
  }
}

MainSection.propTypes = {
  pande: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

export default MainSection
