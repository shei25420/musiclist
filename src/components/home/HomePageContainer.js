import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { increamentProgress, decreamentProgress } from '../../actions/Progress';

import HomePage from './HomePage';

export function HomePageContainer(props){
  const {increamentProgressAction, decreamentProgressAction} = props;

  return (
    <HomePage
    increamentFunction = {increamentProgressAction}
    decreamentFunction = {decreamentProgressAction}
    />
  );
}


function MapDispatchToProps(dispatch){
  return bindActionCreators({
    increamentProgressAction: increamentProgress,
    decreamentProgressAction: decreamentProgress,
  }, dispatch);
}

export default connect(null, MapDispatchToProps)(HomePageContainer);
