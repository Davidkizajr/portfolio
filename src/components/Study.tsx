import type StudyAttributes from "../interface/StudyAttributes";

export default function Study() {
  const Study1: StudyAttributes = {
    name: "Baccalauréat Général",
    location: "Lycée Édouard Branly, Amiens",
    start: new Date(2020, 8),
    end: new Date(2023, 6),
    specialization: [
      { id: 1, name: "Mathématiques" },
      { id: 2, name: "Numérique et Sciences Informatiques (NSI)" },
    ],
    mention: "Assez bien",
  };

  const Study2: StudyAttributes = {
    name: "BUT Informatique",
    location: "IUT Amiens | UPJV",
    start: new Date(2023, 8),
    end: new Date(2026, 7),
    specialization: [
      { id: 3, name: "Réalisation d'applications" },
      { id: 4, name: "Conception, Développement, Validation" },
    ],
    projects: [
      { id: 1, year: 1, name: "Développement d’un jeu vidéo" },
      { id: 2, year: 1, name: "Création d’une base de données" },
      { id: 3, year: 2, name: "Création d’un site d’entreprise" },
      { id: 4, year: 2, name: "Création d’un site de cartographie" },
      { id: 5, year: 3, name: "Tetristoria (Tetris avec thème historique)" },
    ],
  };

  const DateFormatOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center">
      <div className="my-6 p-5 md:me-5 md:ms-5 md:w-2/5 w-4/5 flex flex-col justify-center gap-4">
        <div className="bg-slate-200 drop-shadow-lg rounded-4xl p-3 name_loc">
          <h3 className="font-semibold text-2xl">{Study2.name}</h3>
          <p className="font-bold">{Study2.location}</p>
          <p>
            {new Intl.DateTimeFormat("fr-FR", DateFormatOptions).format(
              Study2.start,
            )}{" "}
            -{" "}
            {new Intl.DateTimeFormat("fr-FR", DateFormatOptions).format(
              Study2.end,
            )}
          </p>
        </div>
        <div className="bg-slate-200 drop-shadow-lg rounded-4xl p-3">
          <b>
            <p className="mt-2">
              3<sup>ème</sup> année
            </p>
            <p>Projet réalisé</p>
          </b>
          {Study2.projects!.filter((project) => project.year === 3).map(
            (project) => (
              <p key={project.id}>{project.name}</p>
            ),
          )}
        </div>
        <div className="bg-slate-200 drop-shadow-lg rounded-4xl p-3">
          <b>
            <p className="mt-2">
              2<sup>ème</sup> année
            </p>
            <p>Parcours</p>
          </b>
          {Study2.specialization.map((spec) => (
            <p key={spec.id}>{spec.name}</p>
          ))}
          <b>
            <p>Projets réalisés</p>
          </b>
          {Study2.projects!.filter((project) => project.year === 2).map(
            (project) => (
              <p key={project.id}>{project.name}</p>
            ),
          )}
        </div>
        <div className="bg-slate-200 drop-shadow-lg rounded-4xl p-3">
          <b>
            <p className="mt-2">
              1<sup>ère</sup> année
            </p>
          </b>
          <b>
            <p>Projets réalisés</p>
          </b>
          {Study2.projects!.filter((project) => project.year === 1).map(
            (project) => (
              <p key={project.id}>{project.name}</p>
            ),
          )}
        </div>
      </div>
      <div className="my-6 p-5 md:me-5 md:ms-5 md:w-2/5 w-4/5 flex flex-col justify-center gap-4">
        <div className="bg-slate-200 drop-shadow-lg rounded-4xl p-3 name_loc">
          <h3 className="font-semibold text-2xl">{Study1.name}</h3>
          <p className="font-bold">{Study1.location}</p>
          <p>
            {new Intl.DateTimeFormat("fr-FR", DateFormatOptions).format(
              Study1.start,
            )}{" "}
            -{" "}
            {new Intl.DateTimeFormat("fr-FR", DateFormatOptions).format(
              Study1.end,
            )}
          </p>
        </div>
        <div className="bg-slate-200 drop-shadow-lg rounded-4xl p-3">
          <b>
            <p className="mt-2">Spécialtés</p>
          </b>
          {Study1.specialization.map((spec) => (
            <p key={spec.id}>{spec.name}</p>
          ))}
        </div>
        <div className="bg-slate-200 drop-shadow-lg rounded-4xl p-3">
          {Study1.mention && (
            <>
              <b>
                <p className="mt-2">Mention</p>
              </b>
              <p>{Study1.mention}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
