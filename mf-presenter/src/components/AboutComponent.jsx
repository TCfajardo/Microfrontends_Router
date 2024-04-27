import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import catImage from '../assests/profile.jpg'; 

const AboutComponent = () => {
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="text-center mb-4">
            <img
              src={catImage}
              className="rounded-circle"
              alt="Profile"
              style={{ width: '210px' }}
            />
          </div>
          <h2 className="text-center mb-3">About Us</h2>
          <p className="text-center">
            <b>Welcome to our adorable black and white dog-loving cat's page!</b><br /><br />
            Our cat, named Whiskers, is a charming feline with a distinctive black and white coat that doesn't go unnoticed.
            Although Whiskers is a cat, he has a quirk that makes him unique: he loves dogs! Since he was a puppy, Whiskers
            has been surrounded by canine friends and has developed a special friendship with them.
          </p>
          <div className="text-center">
            <h4>Contact</h4>
            <p>Email: tcatalina.fajardo@gmail.com</p>
            <p>Phone: 3166276482</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutComponent;
