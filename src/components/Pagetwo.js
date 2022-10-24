import React from 'react'
import { dummyData } from '../dummyData';
export const Pagetwo = () => {
    const { key, email,username,rootid} = dummyData[0];
  return (
    <div className="container">
      <div className="auto mb">
        <h2>Inastallation</h2>
          </div>
          <div className='contaiar white'>
              <div className='float'><h5>Product Key:</h5><p>{key }</p></div>
              <div className='float'><h5>Database Installation:</h5><p>spinner</p></div>              <div className='float'><h5>Product Key:</h5><p>{key }</p></div>
              <div className='float'><h5>Root ID:</h5><p>{rootid }</p></div>
              <div className='float'><h5>Root Email:</h5><p>{email }</p></div>
              <div className='float'><h5>Root Username:</h5><p>{username }</p></div>
              <div className='float'><h5>Root Password:</h5><p>{key }</p></div>
          </div>
    </div>
  );
}
