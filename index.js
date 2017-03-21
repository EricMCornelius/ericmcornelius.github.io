import React from 'react';
import ReactDOM from 'react-dom';

import style from './style.css';
import text from './tmp.txt';

import faker from 'faker';

let default_cols = ['one', 'two', 'three', 'four'];
let default_rows = [];

for (let row = 0; row < 200; ++row) {
  let row_data = [];
  for (let col = 0; col < default_cols.length; ++col) {
    row_data.push(faker.system.fileName());
  }
  default_rows.push(row_data);
}

const Body = props => {
  const {rows = default_rows, cols = default_cols} = props;
  return <table>
    <tr>{cols.map(col => <th>{col}</th>)}</tr>
    {rows.map(row => <tr>{row.map(val => <td>{val}</td>)}</tr>)}
  </table>;
}

const render = () => {
  ReactDOM.render(
    <Body/>,
    document.getElementById('root')
  );
};

render();
