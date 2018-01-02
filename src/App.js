import React, { Component } from 'react';
import Header from './Header';
import Banner from './Banner';
import Stories from './Stories';
import Footer from './Footer';
import './App.css';

const stories = [
  {
    img: './public/story1.jpg',
    title: 'Winning at Fonts',
    desc: 'or, Why you should care about typography',
    authImg: './public/louisa.png',
    authName: 'Louisa',
    estTime: '2 min'
  },
  {
    img: './public/story2.jpg',
    title: 'Hoodlums: a dissertation',
    desc: 'Examining villains in modern storytelling',
    authImg: './public/alternate.png',
    authName: 'Nathaniel',
    estTime: '10 min'
  },
  {
    img: './public/story3.jpg',
    title: 'Halloween is a year-round sport',
    desc: 'Those who say otherwise just aren\'t trying hard enough.',
    authImg: './public/leta.png',
    authName: 'Leta',
    estTime: '8 min'
  },
  {
    img: './public/story4.jpg',
    title: 'How to Improve Learning and Classroom Engagement with Humor',
    desc: 'Okay, so first of all, everybody knows fart jokes are hilarious ...',
    authImg: './public/pamela.png',
    authName: 'Pamela',
    estTime: '11 min'
  }
]

const popCulture = [
  {
    img: 'http://www.corepower.com/blog/wp-content/uploads/AR_New_Action.jpg',
    title: 'Winning the Crossfit Games',
    desc: 'Going from zero to hero',
    authImg: 'https://profilepicsbucket.crossfit.com/b8a69-P163097_3-184.jpg',
    authName: 'Tia-Claire',
    estTime: '2 min'
  },
  {
    img: 'http://www.crossfitmontreal.ca/public/assets/img/img-programs-crossfit.jpg',
    title: 'The Bro Rep: A Disstertaion',
    desc: 'Examining the degradation of CRSFT culture',
    authImg: 'https://profilepicsbucket.crossfit.com/abf2b-P124483_12-184.jpg',
    authName: 'Josh',
    estTime: '10 min'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0KHC4XvVtTJ02ut7CIc162YCjxpHcJnd4H8OhK7kdZXRor3ZF',
    title: 'The Real Value of Grit',
    desc: 'Never giving up when other people call it quits',
    authImg: 'https://profilepicsbucket.crossfit.com/0e63d-P2536_14-184.jpg',
    authName: 'Sam',
    estTime: '8 min'
  },
  {
    img: 'http://crossfitinnerloop.com/wp-content/uploads/2012/04/CFIPinsidetallSean.jpg',
    title: 'The Importance of Handstand Push Ups',
    desc: 'Okay, so everybody knows HPUs, but why do them?',
    authImg: 'https://profilepicsbucket.crossfit.com/cfdc3-P8404_13-184.jpg',
    authName: 'Camille',
    estTime: '11 min'
  }
]

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Banner />
      <Stories  storiesTitle="Today's Top Stories"
                stories={stories} />
      <Stories  storiesTitle="Pop Culture"
                stories={popCulture} />
      <Footer />
    </div>
  );
}

export default App;
