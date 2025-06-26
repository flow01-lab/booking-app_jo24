import Link from "next/link";

export default function SignUpSuccessPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Inscription réussie !</h1>
      <p className="text-lg mb-6">Vous allez recvoir un mail de confirmation de votre compte dans quelques minutes. Veuillez confirmer votre compte en cliquant sur le lien.</p>
      <Link href="/" className="text-blue-500 hover:underline">Retour à l'accueil</Link>
    </div>
  );
}