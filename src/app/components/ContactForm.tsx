"use client"; // Questa riga indica che il codice viene eseguito solo sul client

import React, { useState } from 'react';
import { urlFor } from '../lib/sanityImage';
import { Data } from '../../../types';

type Props = {
    data: Data
}

export default function ContactForm( { data }: Props) {
  const [formSubmitted, setFormSubmitted] = useState(false); // Stato per il modale

  // Funzione per gestire l'invio del form
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    // Invia il form a Formspree
    const response = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' },
    });

    if (response.ok) {
      setFormSubmitted(true); // Mostra il modale se l'invio ha avuto successo
    } else {
      alert("C'è stato un errore, riprova.");
    }
  };

  return (
    <>
      {formSubmitted ? (
        
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Richiesta Inviata</h2>
            <p className="text-lg mb-6">
              La tua richiesta è stata inviata correttamente. Ti risponderò il prima possibile. Grazie per avermi contattato!
            </p>
            <a href="/" className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700">
              Torna alla Home
            </a>
          </div>
        </div>
      ) : (
        
        <section id="contact" className='bg-center bg-contain bg-no-repeat' style={{ backgroundImage: `url(${urlFor(data.backimage5.asset)})` }}>  
        <form action={process.env.NEXT_PUBLIC_FORMSPREE_URL} method="POST" className="max-w-xl mx-auto space-y-4" onSubmit={handleSubmit}>
          <div>
            <input placeholder="Nome" type="text" name="name" required className="w-full px-4 py-2 border border-gray-300 rounded" />
          </div>
          <div>
            <input placeholder="Email" type="email" name="_replyto" required className="w-full px-4 py-2 border border-gray-300 rounded" />
          </div>
          <div>
            <textarea placeholder="Messaggio" name="message" required className="w-full px-4 py-2 border border-gray-300 rounded h-32"></textarea>
          </div>
          <button type="submit" className="w-full bg-red-600 text-white py-3 px-6 rounded hover:bg-red-700 transition">
            Invia Richiesta
          </button>
        </form>
        </section>
      )}
    </>
  );
}
