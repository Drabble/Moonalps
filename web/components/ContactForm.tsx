import React, { useState } from 'react';

type IProps = {
  url: string;
};

const ContactForm = ({ url }: IProps) => {
  const [status, setStatus] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const handleSubmit = (e: any) => {
    e.preventDefault();

    fetch(`${url}/api/messages`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: { name, message, email, phone } }),
    })
      .then(() => setStatus('Merci pour votre message, nous vous répondrons le plus vite possible.'))
      .catch((err) =>
        setStatus('Désolé, il y a eu une erreur lors de la soumission du formulaire. Veuillez envoyer un email à info@moonalps.ch directement, merci!')
      );
  };

  if (status) {
    return (
      <>
        <div className="text-2xl">Merci!</div>
        <div className="text-md">{status}</div>
      </>
    );
  }

  return (
    <form onSubmit={handleSubmit} method="POST" target="_blank">
      <div className="mb-3 pt-0">
        <input
          type="text"
          placeholder="Nom"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-3 placeholder-gray-600 text-dark-900 relative bg-white text-md border-0 outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-3 placeholder-gray-600 text-dark-900 relative bg-white text-md border-0 outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <input
          type="phone"
          placeholder="Numéro de téléphone"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="p-3 placeholder-gray-600 text-dark-900 relative bg-white text-md border-0 outline-none focus:outline-none focus:ring w-full"
        />
      </div>
      <div className="mb-3 pt-0">
        <textarea
          placeholder="Message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="p-3 placeholder-gray-600 text-dark-900 relative bg-white text-md border-0 outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <button
          className="bg-dark-900 text-dark-100 active:bg-dark-600 font-bold uppercase text-sm px-6 py-3 rounded  outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="submit"
        >
          Envoyer le message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
