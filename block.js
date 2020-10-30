import React, { useState } from 'react'
import './block.css'
import { connect } from 'react-redux';
import { showCollapse } from './actions';

function mapDispatch(dispatch) {
  return {
    showWeek: (week, year) => dispatch(showCollapse(week, year))
  }
}

function Block(props) {
  const week = props.week
  const year = props.year
  return (
    <div className="block" onClick={() => props.showWeek(week, year)}>
    </div>
  );
}

export default connect(null, mapDispatch)(Block)
