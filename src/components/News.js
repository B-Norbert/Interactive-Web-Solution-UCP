import React from 'react';
import './News.css';
import NewsCard from './NewsCard'
function News() {
  return (
    <div className='news'>
      <h1>Latest News!</h1>
      <div className='news__container'>
        <div className='news__wrapper'>
          <ul className='news__items'>
            <NewsCard
              src='images/file-11624-850ff171587d724527291bf86fbbb14b.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              date='12th November'
              path='#'
            />
          </ul>
          <ul className='news__items'>
            <NewsCard
              src='images/file-11622-53024b8dcbc37b9ab0b05fafc67ebcdb.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              date='14th October'
              path='#'
            />
            <NewsCard
              src='images/file-11482-79bec67d1d95b409c3221fe2f29a616e.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              date='5th October'
              path='#'
            />
            <NewsCard
              src='images/file-11637-a1aea135a420c1998e82492663e018d3.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              date='8th August'
              path='#'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default News;
