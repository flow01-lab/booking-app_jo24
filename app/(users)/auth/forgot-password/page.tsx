'use client'

import { useState } from 'react';
import { supabase } from '@/app/lib/db-supabase';
import { OlympicHeadlineCsd } from '@/app/ui/fonts';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleResetPassword = async () => {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: '/auth/reset-password', // URL où l'utilisateur sera redirigé après clic
    });
    if (error) {
      setMessage(`Erreur : ${error.message}`);
    } else {
      setMessage('Email de réinitialisation envoyé !');
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className={`${OlympicHeadlineCsd.className} text-center`}>Réinitialiser votre mot de passe</h2>
      <p className=''>Entrer votre adresse e-mail</p>
      <input
        type="email"
        placeholder="Votre email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className='p-3 m-2 border-1 border-solid border-gray-400 w-80'
      />
      <button className='btn-submit mb-15' onClick={handleResetPassword}>Envoyer le lien</button>
      {message && <p>{message}</p>}
    </div>
  );
}