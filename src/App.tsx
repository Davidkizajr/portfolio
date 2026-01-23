import { CiMail } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import Work from "./components/Work";
import Study from "./components/Study";
import Skill from "./components/Skill";

function App() {
  const [toggle, setToggle] = useState(false);

  const mobileNav = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <header className="bg-black drop-shadow-md absolute w-full text-white">
        <nav className="mx-auto flex items-center p-7 justify-between lg:px-8">
          <div className="flex justify-between items-center w-full flex-wrap md:flex-nowrap">
            <div className="flex gap-x-4">
              <p className="font-bold">David Kizayilawoko</p>
            </div>
            <button
              className="flex justify-end md:hidden ring-1 bg-gray-700 hover:bg-gray-800 ring-black rounded"
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
            </ul>
          </div>
        </nav>
      </header>
      <main className="text-black mb-10">
        <div className="flex flex-col text-center justify-center items-center mt-20">
          <p className="mt-10">
            Bonjour ! Je suis <em>David Kizayilawoko</em>.
          </p>
          <p>
            Je suis actuellement étudiant en BUT Informatique à l'IUT d'Amiens.
          </p>
          <p className="mt-5">
            Je suis passionné d'informatique, surtout dans le domaine du
            développement web. La création de sites web est ce que j'aime
            beaucoup faire.
          </p>
          <a
            href="https://vhzwxdse3wsp0ec1.public.blob.vercel-storage.com/CV.pdf"
            target="_blank"
          >
            <button className="access_cv mt-10 w-50">Accéder au CV</button>
          </a>
        </div>
        <div className="flex flex-col text-center justify-center items-center mt-10">
          <h2 className="font-bold text-4xl" id="Parcours">
            Parcours professionnel
          </h2>
          <Work />
          <h2 className="font-bold text-4xl">Parcours scolaire</h2>
          <Study />
        </div>
        <div className="flex flex-col text-center justify-center items-center mt-10">
          <h2 className="font-bold text-4xl" id="Compétences">
            Compétences
          </h2>
          <Skill />
        </div>
      </main>
      <footer className="bg-black drop-shadow-md absolute w-full text-white">
        <div className="flex flex-col text-center justify-center items-center mt-10 mb-10">
          <h2 className="font-bold text-4xl mb-3" id="Contact">
            Contactez-moi
          </h2>
          <div className="flex items-center">
            <a
              className="link_social"
              href="mailto:davidkizajr@outlook.fr"
              target="_blank"
            >
              <CiMail className="me-5" size={64} />
            </a>
            <a
              className="link_social"
              href="https://www.linkedin.com/in/david-kizayilawoko-925b932a1/"
              target="_blank"
            >
              <FaLinkedin size={64} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
