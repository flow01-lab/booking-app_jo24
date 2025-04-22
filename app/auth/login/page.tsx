import Image from "next/image";
import { OlympicSansReg } from "@/app/ui/fonts";
import Link from "next/link";
import { login } from './actions'

export default function Page(){

    return (
        <div className="flex justify-center max-h-120vw">
            <div className="z-0 overflow-hidden">
                <Image
                src="/img/wallpaper_Paris2024.avif"
                width={3600}
                height={1542}
                className=" flex h-full max-h-300"
                alt="Fresque murale des Jeux Olympiques Paris 2024"
                />
            </div>
            <div className="flex flex-col align-center justify-right z-2 bg-white h-full w-200 absolute">
                <div className="flex justify-center mt-10">
                    <Image
                    src="/img/Paris2024-Official-Logo.png"
                    width={300}
                    height={300}
                    className="flex align-center justify-center items-center"
                    alt="Logo Officiel Paris 2024"
                    />
                </div>
                <form method="post" action="" className="signin-form flex flex-col items-center">
                    <label htmlFor="email" className={`${OlympicSansReg.className}`}>Identifiant/Email</label>
                    <input id="email" name="password" type="text" required/>
                    <label htmlFor="password" className={`${OlympicSansReg.className}`}>Mot de passe/Password</label>
                    <input id="password" name="password" type="password" required/>
        
                    <div className="m-8">
                        <button className={`${OlympicSansReg.className} btn-submit`} type="submit" formAction={login}>Connexion/Login</button>
                    </div>
                </form>
                <div className="my-5 text-center">
                        <span className="">Vous n&apos;avez pas encore de compte ? <Link href="/signup" className="link-text">Créer un compte</Link>.</span>
                </div>
            </div>
        </div>
    )
}