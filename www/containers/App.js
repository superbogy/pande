import React, {Component, PropTypes} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import MainSection from '../components/MainSection'
import * as actions from '../actions'
import LeftBar from '../components/LeftBar';
class App extends Component {

  componentDidMount () {
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
