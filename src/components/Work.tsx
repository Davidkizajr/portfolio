import { FaJs } from "react-icons/fa6";
import type WorkAttributes from "../interface/WorkAttributes";
import { FaBootstrap, FaCss3, FaHtml5, FaPhp } from "react-icons/fa";
import { TbSql } from "react-icons/tb";
import { SiJquery } from "react-icons/si";

export default function Work() {
  const Job1: WorkAttributes = {
    role: "Conseiller de vente",
    location: "Gare d'Abancourt",
    company: "SNCF",
    start: new Date(2024, 6),
    end: new Date(2024, 7),
    description: [
      "Vente de billets de train et d’abonnements",
      "Aide et renseignements pour le client",
      "Gestion du guichet (prise et fin de service)",
    ],
    opinion:
      "Ce poste d’été m’a introduit au monde professionnel. J’ai pu apprendre comment se comporter avec les clients, savoir leur demander les bonnes questions pour leur donner les produits voulus ou de bonnes recommendations.",
  };

  const Job2: WorkAttributes = {
    role: "Stage en développement web",
    location: "Télétravail",
    company: "Korcep",
    start: new Date(2025, 0),
    end: new Date(2025, 2),
    description: ["Développement d’un site", "Gestion d’une base de données"],
    technologies: [
      { name: "PHP", icon: FaPhp },
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3 },
      { name: "JavaScript", icon: FaJs },
      { name: "SQL", icon: TbSql },
      { name: "Bootstrap", icon: FaBootstrap },
      { name: "jQuery", icon: SiJquery },
    ],
    opinion:
      "Ce stage m’a introduit pour la première fois au travail professionnel dans l’informatique. Il a été utile pour cimenter mon intérêt pour le web en tant que domaine de choix pour projet professionnel futur.",
  };

  const Job3: WorkAttributes = {
    role: "Agent technique",
    location: "Poix-de-Picardie",
    company: "Mairie",
    start: new Date(2025, 6),
    end: new Date(2025, 7),
    description: ["Travail pour la commune", "Travaux manuels variés"],
    opinion:
      "Ce poste d’été m’a introduit aux travaux manuels. J'ai pu apprendre diverses choses, comme tondre la pelouse, utiliser une binette pour enlever l'herbe sur les trottoirs ou sur les sols de pierre.",
  };

  const DateFormatOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center">
      <div className="my-6 p-5 md:me-5 md:ms-5 md:w-2/5 w-4/5 flex flex-col justify-center gap-4">
        <div className="bg-slate-200 drop-shadow-lg rounded-4xl p-3">
          <h3 className="font-semibold text-2xl">{Job3.role}</h3>
          <p className="font-bold">
            {Job3.company} - {Job3.location}
          </p>
          <p>
            {new Intl.DateTimeFormat("fr-FR", DateFormatOptions).format(
              Job3.start,
            )}{" "}
            -{" "}
            {new Intl.DateTimeFormat("fr-FR", DateFormatOptions).format(
              Job3.end,
            )}
          </p>
        </div>
        <div className="bg-slate-200 drop-shadow-lg rounded-4xl p-3">
          {Job3.description.map((element: string) => (
            <p key={3}>{element}</p>
          ))}
        </div>
        <div className="bg-slate-200 drop-shadow-lg rounded-4xl p-3">
          <em>
            <b>
              <p className="mt-5">Retour d'expérience</p>
            </b>
            <p>{Job3.opinion}</p>
          </em>
        </div>
      </div>
      <div className="my-6 p-5 md:me-5 md:ms-5 md:w-2/5 w-4/5 flex flex-col justify-center gap-4">
        <div className="bg-slate-200 drop-shadow-lg rounded-4xl p-3">
          <h3 className="font-semibold text-2xl">{Job2.role}</h3>
          <p className="font-bold">
            {Job2.company} - {Job2.location}
          </p>
          <p>
            {new Intl.DateTimeFormat("fr-FR", DateFormatOptions).format(
              Job2.start,
            )}{" "}
            -{" "}
            {new Intl.DateTimeFormat("fr-FR", DateFormatOptions).format(
              Job2.end,
            )}
          </p>
        </div>
        <div className="bg-slate-200 drop-shadow-lg rounded-4xl p-3">
          {Job2.description.map((element: string) => (
            <p key={2}>{element}</p>
          ))}
          <p>Technologies utilisées :</p>
          <ul className="list-inside flex items-center justify-center">
            {Job2.technologies?.map((tech) => (
              <li key={tech.name}>
                <tech.icon className="me-2 text-3xl" />
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-slate-200 drop-shadow-lg rounded-4xl p-3">
          <em>
            <b>
              <p className="mt-5">Retour d'expérience</p>
            </b>
            <p>{Job2.opinion}</p>
          </em>
        </div>
      </div>
      <div className="my-6 p-5 md:me-5 md:ms-5 md:w-2/5 w-4/5 flex flex-col justify-center gap-4">
        <div className="bg-slate-200 drop-shadow-lg rounded-4xl p-3">
          <h3 className="font-semibold text-2xl">{Job1.role}</h3>
          <p className="font-bold">
            {Job1.company} - {Job1.location}
          </p>
          <p>
            {new Intl.DateTimeFormat("fr-FR", DateFormatOptions).format(
              Job1.start,
            )}{" "}
            -{" "}
            {new Intl.DateTimeFormat("fr-FR", DateFormatOptions).format(
              Job1.end,
            )}
          </p>
        </div>
        <div className="bg-slate-200 drop-shadow-lg rounded-4xl p-3">
          {Job1.description.map((element: string) => (
            <p key={1}>{element}</p>
          ))}
        </div>
        <div className="bg-slate-200 drop-shadow-lg rounded-4xl p-3">
          <em>
            <b>
              <p className="mt-5">Retour d'expérience</p>
            </b>
            <p>{Job1.opinion}</p>
          </em>
        </div>
      </div>
    </div>
  );
}
