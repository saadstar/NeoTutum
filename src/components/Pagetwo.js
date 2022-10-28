import React from 'react'
import { dummyData } from '../dummyData';
export const Pagetwo = () => {
    const { key, email,username,rootid} = dummyData[0];
  return (
    <div className="container">
      <div className="auto mb">
        <h2>Inastallation</h2>
          </div>
          <form className='contaiar white'>
              <div className='float'><h5>Product Key:</h5><input value={key } /></div>
        <div className='float'><h5>Database Installation:</h5><input value="spinner" /></div>
        <div className='float'><h5>Product Key:</h5><input value={key}/></div>
              <div className='float'><h5>Root ID:</h5><input value={rootid }/></div>
              <div className='float'><h5>Root Email:</h5><input value={email }/></div>
              <div className='float'><h5>Root Username:</h5><input value={username }/></div>
              <div className='float'><h5>Root Password:</h5><input value={key }/></div>
          </form>
    </div>
  );
}
