"use client"

import { useRouter } from "next/navigation";

function PreviewPage() {
    const router = useRouter();

    const handleRetour = () => {
    router.back(); // Retourne à la page précédente dans l'historique
    }
return (
    <button className="btn-prev" onClick={handleRetour}>
      Retour
    </button>
  );

}
export default PreviewPage;