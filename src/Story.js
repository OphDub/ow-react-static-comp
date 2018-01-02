import React from 'react';
import Button from './Button';
import './Story.css';
import Author from './Author';

const Story = (props) => {
  return (
    <div className='Story'>
      <div className='story-img'>
        <img src={props.img} />
      </div>
      <div className='story-info'>
        <div>
          <h3>{props.title}</h3>
          <p>{props.desc}</p>
        </div>
        <Author authImg={props.authImg}
                authName={props.authName}
                estTime={props.estTime}/>
      </div>
    </div>
  )
}

export default Story;
