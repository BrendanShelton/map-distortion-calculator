import React, { useState } from 'react';

function Contact() {
  const [userName, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('')

  const input = (e) => {
    const { name, value } = e.target;


    if (name === 'name') {
        setName(value)
    } else if (name === 'email') {
        setEmail(value);
    } else {
        setMessage(value)
    };
    //return 
}
  const submit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section>
      <h2>
        Contact
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
