import React from 'react';
import Story from './Story';
import './Stories.css';

const Stories = (props) => {
  return (
    <div className='Stories'>
      <div className='  stories-header'>
        <h3>{props.storiesTitle}</h3>
        <a href='#'>See more</a>
      </div>
      <div className='stories-grid'>
        {
          props.stories.map( (story, index) => {
            console.log(story);
            // INSTEAD OF returning the div below, return a Story component
            // Be sure to pass down the correct props!
            return (<Story  key={index}
                            title={story.title}
                            desc={story.desc}
                            img={story.img}
                            authImg={story.authImg}
                            authName={story.authName}
                            estTime={story.estTime}/>)
          })
        }
      </div>
    </div>
  )
}

export default Stories;
