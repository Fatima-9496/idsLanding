import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });
  
  
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-4">
          <div className="row">
            <div className="col-md-12">
              <h3>Our Pages</h3>
              <ul className="list-unstyled">
                <li><a style={{ color: 'white' }} href="#features"><p>Features</p></a></li>
                <li><a style={{ color: 'white' }} href="#about"><p>About</p></a></li>
                <li><a style={{ color: 'white' }} href="#services"><p>Services</p></a></li>
                <li><a style={{ color: 'white' }} href="#team"><p>Team</p></a></li>
                <li><a style={{ color: 'white' }} href="#contact"><p>Contact</p></a></li>
              </ul>
            </div>
          </div>
          </div>
          <div className="col-md-8 contact-info">
                  <h3>Contact Info</h3>
                  
            <div className="row">
              <div className="contact-item">
                <div className="col-md-4">
                  <p>
                    <span>
                      <i className="fa fa-map-marker"></i> Address
                    </span>
                    {props.data ? props.data.address : "loading"}
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="contact-item">
                  <p>
                    <span>
                      <i className="fa fa-phone"></i> Phone
                    </span>{" "}
                    {props.data ? props.data.phone : "loading"}
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="contact-item">
                  <p>
                    <span>
                      <i className="fa fa-envelope-o"></i> Email
                    </span>{" "}
                    {props.data ? props.data.email : "loading"}
                  </p>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};
