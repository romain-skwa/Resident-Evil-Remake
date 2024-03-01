import { useState } from "react";

export default function Personnages(
    {
        nom, 
        ajoutPerso = "Je dois écrire mon avis personnel sur ce personnage", 
        ligneSup, 
        imagePerso, 
        quelMode,
        membreDesStars = true,
        infoEquipe = "Alpha", 
        listeJeux =[""], 
        filmOuPas =["Faut voir"],
        badge,
        jeChoisis,
        ...info
    }) {
    console.log(info);
    // State
    const [modeMercenaire, setModeMercenaire] = useState();

    const [dansFilm, setDansFilm] = useState(false);

    return(        
        <div className="encadrePersonnage" >
            <img className="imagePersonnage" src={imagePerso} alt={`${nom} portrait`} />

            <h2 onClick={() => jeChoisis(nom)}>{nom}</h2>

          {membreDesStars &&   <p className="membre">Membre de l&apos;équipe {infoEquipe} des S.T.A.R.S.</p> }

            <div className="monAvis">
                <p>{ajoutPerso}</p>
                <p>{ligneSup}</p>
            </div>

            <div className="listeJeux">
                Personnage présent dans : <br />
                <ul>
                    <li>Resident Evil</li>
                    {listeJeux.map((jeu) => (
                        <li key={jeu}>{jeu}</li>
                    ))}
                </ul>
            </div>

            <p onClick={() => setModeMercenaire(quelMode)}>Dans quel mode trouve-t-on ce personnage ?</p>
            <p>{modeMercenaire}</p>

            <div className="listeFilm">
                <p onClick={() => setDansFilm((valeurActuelleDuState) => !valeurActuelleDuState)}>
                   {dansFilm === true ?
                    "Masquer la liste de films" :
                    "Voit-on ce personnage dans un des films ?"}</p>
                <div>
                    {
                    dansFilm === true ?
                        <ul>
                            {filmOuPas.map((film) => (
                                <li key={film}>{film}</li>
                            ))}   
                        </ul>
                        : null 
                    }   
                </div>
            </div>
            <div >
                    {badge === true ? <img className="badge" src="../../public/portrait/badge-stars.png" alt="Badge des stars" /> : null }
            </div>
            <p>{badge === true ? "Vous avez décerné à " + nom + " le badge du personnage préféré." : null}</p>
        </div>
    )
}