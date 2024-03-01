import { useState } from "react";
import Personnages from "./Personnages";

export default function CreationPerso(){
    // State
    const [nomNouveau, setNomNouveau] = useState("Nom du personnage");
    const [monAvis, setMonAvis] = useState("Je donne mon avis sur ce personnage");

    const [starsOuPas, setStarsOuPas] = useState();
        console.log("Valeur de staroupas " + starsOuPas);
    const cocherLaCase = (e) => {
        console.log("La checkbox est actuellement à " + e.target.checked);
        setStarsOuPas(e.target.checked);
    };
    return(
        <section >
            <Personnages 
                nom = {nomNouveau} 
                ajoutPerso = {monAvis}
                membreDesStars= {starsOuPas}
                />

            <div className="creation">
                <h3>Crée ton propre personnage</h3>

                <input 
                    type="text" 
                    name="nom" 
                    id="nom" 
                    placeholder="Inscrivez le nom du personnage" 
                    size="30"
                    value={nomNouveau}// Cette ligne seule ne suffit pas pour changer le nom
                    // Pour changer, on détecte l'évènement avec onChange
                        // Et on utilise un évènement et on cible sa valeur actuelle
                    onChange={(evenement) => setNomNouveau(evenement.target.value)}
                />

                <div>
                    <input type="checkbox" id="stars" name="stars" 
                        checked={starsOuPas} 
                        onChange={cocherLaCase}
                        />
                    <label htmlFor="stars">Stars</label>
                </div>

                <textarea 
                    name="avis" id="avis" cols="40" rows="8" 
                    placeholder="J'écris mon avis concernant ce nouveau personnage"
                    value={monAvis}
                    onChange={(evenement) => setMonAvis(evenement.target.value)}
                    >
                </textarea>
            </div>
        </section>
    )
}