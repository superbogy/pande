/**
 * Created by bugbear on 16/4/27.
 */
import React, { Component, PropTypes } from 'react'
import AppBar from 'material-ui/lib/app-bar';
import style from './index.scss';

class MainSection extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { filter: 1 }
  }

  handleClearCompleted() {
    this.props.actions.clearCompleted();
  }

  handleTest() {
    console.log(this.props);
  }
  // renderToggleAll(completedCount) {
  //   const { pande, actions } = this.props;
  //   if (pande.length > 0) {
  //     return (
  //       <input className="toggle-all"
  //              type="checkbox"
  //              checked={completedCount === pande.length}
  //              onChange={actions.completeAll} />
  //     );
  //   }
  // }


  render() {
    const { pande, actions } = this.props;

    return (
      <div>
      </div>
    )
  }
}

MainSection.propTypes = {
  pande: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

export default MainSection
