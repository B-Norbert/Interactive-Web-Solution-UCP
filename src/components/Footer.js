import React from 'react';
import './Footer.css';
import { Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Helpful Quicklines</h2>
            <Link to='/'>Why Choose UCP</Link>
            <Link to='/'>Courses</Link>
            <Link to='/'>Events</Link>
          </div>
          <div class='footer-link-items'>
            <div class='space'></div>
            <Link to='/'>Job Opportunities</Link>
            <Link to='/'>Privacy and Cookies</Link>
            <Link to='/'>Latest News</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
          <div class='space'></div>
            <Link to='/'>Policies</Link>
            <Link to='/'>HESA use of student data</Link>
            <Link to='/'>Website Feedback</Link>
          </div>
          <div class='footer-link-items'>
            <h2 size="14px" color="#ffc107">Connect with us</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <small class='website-rights'>

Copyright © University Centre Peterborough. All rights reserved.

</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
