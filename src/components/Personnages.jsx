import { useState } from "react";
import { createPortal } from "react-dom";

export default function Personnages(
    {
        nom, 
        ajoutPerso = "Je dois écrire mon avis personnel sur ce personnage", 
        ligneSup, 
        imagePerso, 
        quelMode,
        membreDesStars = true,
        infoEquipe = "Alpha", 
        listeJeux =["Resident Evil"], 
        filmOuPas =["Faut voir"],
        badge,
        jeChoisis,
        ...info
    }) {
    console.log(info);
    // State
    const [modeMercenaire, setModeMercenaire] = useState();
    const [dansFilm, setDansFilm] = useState(false);
    const [afficherModale, setAfficherModale] = useState(false);
    // Fonction
    const fenetre = () => {
        setAfficherModale(true);
    }
    return(        
        <div className="encadrePersonnage" >
            <img className="imagePersonnage" src={imagePerso} alt={`${nom} portrait`} />

            <h2 onClick={() => jeChoisis(nom)}>{nom}</h2>

            {afficherModale && createPortal(
            <div
                style={{
                    background: "rgba(0, 0, 0, 0.9)",
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    top: 0,
                    left: 0,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "black",
                }}
                onClick={() => {
                    setAfficherModale(false);
                }}
            >
                <div style={{ background: "url(../../public/background/jill.jpg)" }}>
                    <img src="../../public/background/jill.jpg" alt="Arrière plan RE1 Jill" />
                </div>
            </div>, document.querySelector("body"),
            )}

          {membreDesStars &&   
          <p className="membre" onClick={(apparition) => fenetre(apparition)}>
            Membre de l&apos;équipe {infoEquipe} des S.T.A.R.S.
           </p>
           }

            <div className="monAvis">
                <p>{ajoutPerso}</p>
                <p>{ligneSup}</p>
            </div>

            <div className="listeJeux">
                Personnage présent dans : <br />
                <ul>
                    {/*<li>Resident Evil</li>*/}
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
//<div onClick={{e} => e.stopPropagation(); autreFonction()}>Bouton</div>