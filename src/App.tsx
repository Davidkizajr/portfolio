import { CiMail } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa6";
import { RiJavascriptFill } from "react-icons/ri";
import { SiPhp } from "react-icons/si";
import { TbBrandCarbon } from "react-icons/tb";
import { TbBrandCpp } from "react-icons/tb";
import { TbBrandCSharp } from "react-icons/tb";
import { FaPython } from "react-icons/fa6";
import { TbSql } from "react-icons/tb";
import { TbBrandOffice } from "react-icons/tb";
import { SiCanva } from "react-icons/si";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";

function App() {
  const [toggle, setToggle] = useState(false);

  const mobileNav = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <header className="bg-black drop-shadow-md absolute w-full">
        <nav className="mx-auto flex items-center p-7 justify-between lg:px-8">
          <div className="flex justify-between items-center w-full flex-wrap md:flex-nowrap">
            <div className="flex gap-x-4">
              <p className="text-white font-bold">David Kizayilawoko</p>
            </div>
            <button
              className="flex justify-end md:hidden ring-1 ring-black rounded"
              onClick={mobileNav}
            >
              <FaBars />
            </button>
            <ul
              className={`${
                toggle ? "flex" : "hidden"
              } flex-col justify-center items-center w-full first:mt-2 md:flex-row md:w-auto md:space-x-10 md:flex`}
            >
              <li>
                <a
                  href="#Parcours"
                  className="flex justify-center p-2.5 mt-3 md:border-none md:p-0 md:mt-0 md:w-auto"
                  onClick={mobileNav}
                >
                  Parcours
                </a>
              </li>
              <li>
                <a
                  href="#Compétences"
                  className="flex justify-center p-2.5 md:border-none md:p-0 md:w-auto"
                  onClick={mobileNav}
                >
                  Compétences
                </a>
              </li>
              <li>
                <a
                  href="#Contact"
                  className="flex justify-center p-2.5 md:border-none md:p-0 md:w-auto"
                  onClick={mobileNav}
                >
                  Contactez-moi
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <div className="flex flex-col text-center justify-center items-center mt-20">
        <p className="mt-10">
          Bonjour ! Je suis <em>David Kizayilawoko</em>.
        </p>
        <p>
          Je suis actuellement étudiant en BUT Informatique à l'IUT d'Amiens.
        </p>
        <p className="mt-5">
          Je suis passionné d'informatique, surtout dans le domaine du
          développement web. La création de sites web est ce que j'aime beaucoup
          faire.
        </p>
        <a href="/src/assets/CV.pdf" target="_blank">
          <button className="mt-10 w-50">Accéder au CV</button>
        </a>
      </div>
      <div className="flex flex-col text-center justify-center items-center mt-10">
        <h2 className="font-bold text-4xl" id="Parcours">
          Parcours professionnel
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch">
          <div className="my-6 bg-gray-800 rounded-4xl p-5 md:me-10 md:w-2/5 w-4/5">
            <h3 className="font-semibold text-2xl">
              Stage en développement web
            </h3>
            <b>
              <p>Korcep</p>
            </b>
            <em>
              <p>Janvier 2025 - Mars 2025</p>
            </em>
            <p className="mt-2">Développement d’un site</p>
            <p>Gestion d’une base de données</p>
            <b>
              <p className="mt-2">Langages utilisés</p>
            </b>
            <p>PHP • HTML • CSS • JavaScript • SQL</p>
            <b>
              <p className="mt-2">Frameworks utilisés</p>
            </b>
            <p>Bootstrap • jQuery</p>
            <em>
              <b>
                <p className="mt-5">Retour d'expérience</p>
              </b>
              <p>
                Ce stage m’a introduit pour la première fois au travail
                professionnel dans l’informatique. Il a été utile pour cimenter
                mon intérêt pour le web en tant que domaine de choix pour projet
                professionnel futur.
              </p>
            </em>
          </div>
          <div className="my-6 bg-gray-800 rounded-4xl p-5 md:me-10 md:w-2/5 w-4/5 flex flex-col justify-center">
            <h3 className="font-semibold text-2xl">Conseiller de vente</h3>
            <b>
              <p>SNCF - Gare d'Abancourt</p>
            </b>
            <em>
              <p>Juillet 2024 - Mars 2024</p>
            </em>
            <p className="mt-2">Vente de billets de train et d’abonnements</p>
            <p>Aide et renseignements pour le client</p>
            <p>Gestion du guichet (prise et fin de service)</p>
            <em>
              <b>
                <p className="mt-5">Retour d'expérience</p>
              </b>
              <p>
                Ce poste d’été m’a introduit au monde professionnel. J’ai pu
                apprendre comment se comporter avec les clients, savoir leur
                demander les bonnes questions pour leur donner les produits
                voulus ou de bonnes recommendations.
              </p>
            </em>
          </div>
        </div>
        <h2 className="font-bold text-4xl">Parcours scolaire</h2>
        <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch">
          <div className="my-6 bg-gray-800 rounded-4xl p-5 md:me-10 md:w-2/5 w-4/5">
            <h3 className="font-semibold text-2xl">BUT Informatique</h3>
            <b>
              <p>IUT Amiens | UPJV</p>
            </b>
            <em>
              <p>Septembre 2023 - En cours</p>
            </em>
            <b>
              <p className="mt-2">
                2<sup>ème</sup> année
              </p>
              <p className="mt-1">Parcours</p>
            </b>
            <p>Réalisation d'applications</p>
            <p>Conception, Développement, Validation</p>
            <b>
              <p className="mt-1">Projets réalisés</p>
            </b>
            <p>Création d’un site d’entreprise</p>
            <p>Création d’un site de cartographie</p>
            <b>
              <p className="mt-2">
                1<sup>ère</sup> année
              </p>
            </b>
            <b>
              <p className="mt-1">Projets réalisés</p>
            </b>
            <p>Développement d’un jeu vidéo</p>
            <p>Création d’une base de données</p>
          </div>
          <div className="my-6 bg-gray-800 rounded-4xl p-5 md:me-10 md:w-2/5 w-4/5 flex flex-col justify-center">
            <h3 className="font-semibold text-2xl">Baccalauréat</h3>
            <b>
              <p>Lycée Édouard Branly</p>
            </b>
            <em>
              <p>Septembre 2020 - Juillet 2023</p>
            </em>
            <b>
              <p className="mt-2">Spécialtés</p>
            </b>
            <p>Mathématiques</p>
            <p>Numérique et Sciences Informatiques (NSI)</p>
            <b>
              <p className="mt-2">Mention</p>
            </b>
            <p>Assez bien</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col text-center justify-center items-center mt-10">
        <h2 className="font-bold text-4xl" id="Compétences">
          Compétences
        </h2>
        <h3 className="font-medium text-2xl mt-5">Web</h3>
        <ul className="flex flex-wrap items-center justify-center mt-3">
          <li className="me-5">
            <FaHtml5 size={64} />
            HTML
          </li>
          <li className="me-5">
            <FaCss3Alt size={64} />
            CSS
          </li>
          <li className="me-5">
            <RiJavascriptFill className="ms-2" size={64} />
            JavaScript
          </li>
          <li>
            <SiPhp size={64} />
            PHP
          </li>
        </ul>
        <h3 className="font-medium text-2xl mt-5">Programmation</h3>
        <ul className="flex flex-wrap items-center justify-center mt-3">
          <li className="me-4">
            <TbBrandCarbon size={64} />C
          </li>
          <li className="me-4">
            <TbBrandCpp size={64} />
            C++
          </li>
          <li className="me-4">
            <TbBrandCSharp size={64} />
            C#
          </li>
          <li>
            <FaPython size={64} />
            Python
          </li>
        </ul>
        <h3 className="font-medium text-2xl mt-5">Autres</h3>
        <ul className="flex flex-wrap items-center justify-center mt-3">
          <li className="me-4">
            <TbSql size={64} />
            SQL
          </li>
          <li className="me-4">
            <TbBrandOffice size={64} />
            Office
          </li>
          <li>
            <SiCanva size={64} />
            Canva
          </li>
        </ul>
      </div>
      <div className="flex flex-col text-center justify-center items-center mt-10 mb-10">
        <h2 className="font-bold text-4xl mb-3" id="Contact">
          Contactez-moi
        </h2>
        <div className="flex items-center">
          <a href="mailto:davidkizajr@outlook.fr" target="_blank">
            <CiMail className="me-5" size={64} />
          </a>
          <a
            href="https://www.linkedin.com/in/david-kizayilawoko-925b932a1/"
            target="_blank"
          >
            <FaLinkedin size={64} />
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
