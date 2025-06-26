'use client'
/*
import { useState, useEffect } from 'react';
import { supabase } from '@/app/lib/db-supabase';
import { OlympicHeadlineCsd } from '@/app/ui/fonts';

export default function ResetPassword() {
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    // Vérifier si l'URL contient un token de réinitialisation
    const urlParams = new URLSearchParams(window.location.search);
    const accessToken = urlParams.get('access_token');
    if (accessToken) {
      // Stocker le token pour la mise à jour
      window.localStorage.setItem('access_token', accessToken);
    }
  }, []);

  const handleUpdatePassword = async () => {
    const token = window.localStorage.getItem('access_token');
    if (!token) {
      setStatus('Token invalide ou expiré.');
      return;
    }
    const { user, error } = await supabase.auth.updateUser(token, {
      password,
    });
    if (error) {
      setStatus(`Erreur : ${error.message}`);
    } else {
      setStatus('Mot de passe mis à jour avec succès !');
    }
  };

  return (
    <div>
      <h2 className={`${OlympicHeadlineCsd.className} text-center`}>Réinitialiser le mot de passe</h2>
      <p>Saisissez votre nouveau mot de passe</p>
      <input
        type="password"
        placeholder="Nouveau mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleUpdatePassword}>Mettre à jour</button>
      {status && <p>{status}</p>}
    </div>
  );
}*/

export default function ResetPasswordPage() {

  return (
    <>
    <p>Actualy, this page is in build. We are sorry for that ...</p>
    </>
  )
}