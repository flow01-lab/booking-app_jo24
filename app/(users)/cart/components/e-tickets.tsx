'use client'

import { useCartContext } from "@/app/lib/context/cartContext";
import Image from "next/image";
import { OlympicHeadlineReg } from "@/app/ui/fonts";

const Etickets = () => {
    const { tickets } = useCartContext();
    
    return (
        <>
        {tickets.map((ticket, index) => {
            const dateEventpg = ticket.datetime;
            const dateEventjs = new Date(dateEventpg);

            return (
                <div key={index} className="w-[1654px] h-[2339px] bg-white p-6 m-15 grid grid-cols-4 grid-rows-6 gap-4">
                    <div className="grid col-span-2 row-span-3 flex justify-center items-center">
                        <Image 
                            src="/img/Paris2024-Official-Logo.png"
                            width={240}
                            height={240}
                            className="flex align-center justify-center items-center mb-4"
                            alt="Logo Officiel Paris 2024"
                        />
                    </div>
                    <div className="grid col-span-2 col-start-3 row-span-1 row-start-1 flex justify-center items-center">
                        <h2 className={`${OlympicHeadlineReg.className} text-center mb-4`}>E-TICKETS</h2>
                    </div>
                        <div className="sport-pict grid col-1 col-start-3 row-1 flex justify-center items-center">
                            <Image 
                                src="/img/all-disciplines-paris2024.png"
                                width={96}
                                height={50}
                                className={ticket.picto}
                                alt=""
                            />
                        </div>
                        <div className="grid col-1 col-start-4 row-span-1 flex justify-center items-center">
                            <Image 
                            src="/img/QRcode.png"
                            width={240}
                            height={240}
                            className="flex align-center justify-center items-center mb-4"
                            alt="QR Code E-Ticket"
                            />
                        </div>
                    <div className="grid col-span-2 col-start-3 row-span-1 row-start-3 flex justify-left items-left">
                        <div className="">
                            <h4 className={`${OlympicHeadlineReg.className}`}>{ticket.title}</h4>
                            <p className="">{ticket.description}</p>
                            <span className="">{dateEventjs.toLocaleDateString()+' - '+dateEventjs.toLocaleTimeString([], { hour: '2-digit', minute:'2-digit' })}</span>
                            <br/>
                            <span className="">{ticket.city}</span>
                            <br/>
                            <span className="">{ticket.location}</span>
                            <p className=""><strong>{ticket.price} €</strong> /place</p>
                            <p>Présentez ce billet à l’entrée du site. Il est obligatoire de le conserver jusqu’à la fin de l’événement.</p>
                        </div>
                    </div>
                    <div className="grid col-span-2 col-start-1 row-span-1 row-start-3 flex justify-center items-center">
                        <h4>Conditions générales de vente</h4>
                        <p>Le billet est valable pour une seule entrée.</p>
                        <p>En cas de perte ou de vol, le billet ne pourra pas être remplacé.</p>
                        <p>Le billet est personnel et ne peut être cédé à un tiers.</p>
                        <p>Le billet est valable uniquement pour la date et l’événement indiqués.</p>
                    </div>
                    <div className="grid col-span-2 col-start-1 row-span-1 row-start-4 flex justify-center items-center">
                        <h4>Consignes de sécurité</h4>
                        <p>À l'entrée de chaque site, une fouille sera effectuée. Veuillez vous présenté au moins 30 min avant le début.</p>
                        <p>Il est strictement interdit de porter sur vous les objets suivants :</p>
                        <ul>
                            <li>Arme blanche/Arme à feu</li>
                            <li>Laser</li>
                            <li>Animaux de compagnie</li>
                            <li>Drogues</li>
                            <li>Alcool</li>
                            <li>Mauvaise humeure</li>
                        </ul>
                        <p>Il est strictement interdit de fumer dans les lieux public aussi bien en intérieur quand extérieur.</p>
                        <p>La nourriture est autorisé sur les sites en extérieur. Cependant, nous vous prions de bien vouloir garder avec vous tous vos déchêts ou de les déposer dans les collecteurs disponibles sur place.</p>
                        <p>En cas de perte ou de vol, le billet ne pourra pas être remplacé.</p>
                    </div>
                    <div className="grid col-span-2 col-start-1 row-span-1 row-start-5 flex justify-center items-center">
                        <h4>Mentions particulières</h4>
                        <p>RAS</p>
                    </div>
                    <div className="grid col-span-2 col-start-1 row-span-1 row-start-6 flex justify-center items-center">
                        <p>Billet émis par <strong>Paris 2024</strong></p>
                        <p>Numéro de série : <strong>{ticket.id}</strong></p>
                        <p>Billet émis le <strong>{new Date().toLocaleDateString()}</strong></p>
                    </div>
                    <div className="grid col-span-2 col-start-3 row-span-3 row-start-3 flex justify-center items-center">
                        <h4>Plan & Localisation</h4>
                        <p>CARTE DU LIEU</p>
                    </div>
                </div>
            )
        })}
        </>     
    )
}

export default Etickets;