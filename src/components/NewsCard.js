import React from 'react';
import { Link } from 'react-router-dom';

function NewsCard(props) {
  return (
    <>
      <li className='news__item'>
        <Link className='news__item__link' to={props.path}>
          <div className='news__item__date'>{props.date}</div>
          <figure className='news__item__pic-wrap' data-category={props.label}>
            <img
              className='news__item__img'
              alt='Prev Temp'
              src={props.src}
            />
          </figure>
          <div className='news__item__info'>
            <h5 className='news__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default NewsCard;
