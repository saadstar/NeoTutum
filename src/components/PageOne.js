import React from 'react'
import { Tablet } from './Tablet';
import { Link } from 'react-router-dom';
export const PageOne = ({dummyData}) => {
    return (
      <div className='container'>
    <div className="flex-sb mr">
      <button><Link to="/install">Add new client</Link></button>
      <h2>NeoTutum</h2>
            </div>
        <Tablet />
            </div>
  );
}
