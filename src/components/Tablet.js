import React from 'react'
import { dummyData } from '../dummyData'
export const Tablet = () => {
    const displayItems = dummyData.map((item) => {
        return (
          <div className="white" key={item.id}>
            <ul className="flex-sb border">
              <li>{item.id}</li>
              <li>{item.rootid}</li>
              <li>{item.name}</li>
              <li>{item.key}</li>
              <li>
                <i class="fa-solid fa-ellipsis"></i>
              </li>
            </ul>
          </div>
        );
    })
  return (
      <div className='containar white'>
          <div className='yellow'>
              <ul className='flex-sb'>
                <li>id</li>
                <li>Root ID</li>
                <li>Client Name</li>
                <li>Product Key</li>
                <li>actions</li>
              </ul>
          </div>
          <div>
              {displayItems}
          </div>
    </div>
  )
}
