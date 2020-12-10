import React, { Component} from 'react';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <body>
          <div className="Banner">
        	<img className="Banner" src="/images/Remote-Phones-Option-2-1024x389.jpg">
            </img>
            <h1>Contact</h1>
          </div>
    <section className="my-5 py-5">
      <div className="container">
        <div>
          <h3><strong>Our Location</strong></h3>
        </div>
      </div>
      <div className="contact_section">
        <div className="col-md-7">
        <iframe src="https://www.google.com/maps/d/embed?mid=1j2pLRDITePc0E72WbFbncTNaikwB-Tnx"
        style={{border: '0', width: '100%', height: '315px', frameborder: '0'}} allowFullscreen0/>
      </div>
      <div className="col-md-5">
        <h4><strong>Contact Us</strong></h4>
        <form>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Name"/>
          </div>
          <div className="form-group">
            <input type="email" className="form-control" placeholder="Email"/>
          </div>
          <div className="form-group">
            <input type="telephone" className="form-control" placeholder="Phone"/>
          </div>
          <textarea className="form-control" cols="30" rows="3" placeholder="Message" />
          <Link className="btn btn-ucp text-uppercase" data-toggle="modal" data-target="#exampleModal">
            <i className="fa fa-paper-plane-o" aria-hidden="true"/>
            <i className="fab fa-telegram-plane"/>&nbsp;Send
          </Link>
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Informations were sent</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        The information's were successfully sent, you should receive an email within few hours. Thank you.
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-ucp">Continue</button>
      </div>
    </div>
  </div>
</div>
        </form>
      </div>
      </div>
    </section>
    </body>
  );
}

export default Contact;
