import React, { useState } from 'react';

function Contact() {
  const [width, setWidth] = useState('');
  const [latitude, setLatitude] = useState('');
  const [trueDistance, setTrueDistance] = useState('')
  const [distance, setDistance] = useState('')

  const input = (e) => {
    const { name, value } = e.target;


    if (name === 'width') {
        setWidth(value)
    } else if (name === 'latitude') {
        setLatitude(value);
    } else if (name === 'trueDistance') {
      setTrueDistance(value);
    } else {
        setDistance(value)
    };
    //return 
}
  const submit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();
    //the radius of the planet
    equatorRadius = width/(2*Math.PI)
    //the radius of the circle formed by the higher line of latitude
    higherRadius = Math.cos(latitude * Math.PI/180) * equatorRadius
    higherCircumference = 2 * Math.PI * higherRadius

    trueDistance = distance * (higherRadius/equatorRadius)

    
  };

  return (
    <section>
      <h2>
        Map Distortion Calculator
      </h2>
      <form className="form">
        <input
          value={userName}
          name="name"
          onChange={input}
          type="text"
          placeholder="name"
        />
        <input
          value={email}
          name="email"
          onChange={input}
          type="text"
          placeholder="email"
        />
        <input
          value={message}
          name="message"
          onChange={input}
          type="text"
          placeholder="message"
        />
        <button type="button" onClick={submit}>
          Submit
        </button>
      </form>
    </section>
  );
}

export default Contact;
