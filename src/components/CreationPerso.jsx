import { useState } from "react";
import Personnages from "./Personnages";
import style from "./Creation.module.css";

export default function CreationPerso(){
    // State
    const [visible, setVisible] = useState(false);
    const [nomNouveau, setNomNouveau] = useState("Nom du personnage");
    const [ajoutImage, setAjoutImage] = useState();
    const [monAvis, setMonAvis] = useState("Je donne mon avis sur ce personnage");
    const [ajoutLigneSup, setAjoutLigneSup] = useState();

    const [starsOuPas, setStarsOuPas] = useState(false);
        console.log("Valeur de starOuPas " + starsOuPas);
    const cocherLaCase = (e) => {
        console.log("La checkbox est actuellement à " + e.target.checked);
        setStarsOuPas(e.target.checked);
    };

    const [alphaOuBravo, setAlphaOuBravo] = useState();
        console.log(alphaOuBravo);

    const [ present, setPresent ] = useState();
    
    return(
        <section >
            <Personnages 
                nom = {nomNouveau} 
                imagePerso = {ajoutImage}
                ajoutPerso = {monAvis}
                ligneSup ={ajoutLigneSup}
                membreDesStars= {starsOuPas}
                infoEquipe = {alphaOuBravo}
                listeJeux = {present}
                />

            <div className={style.creation}>
                <h3 onClick={() => setVisible(true)}>Crée ton propre personnage</h3>
                {visible === true ? 
                <div className={style.lesChamps}>
                    <input 
                        type="text" 
                        name="image" 
                        id="image" 
                        placeholder="Coller ici le lien d'une image" 
                        size="30"
                        value={ajoutImage}// Cette ligne seule ne suffit pas pour changer le nom
                        // Pour changer, on détecte l'évènement avec onChange
                            // Et on utilise un évènement et on cible sa valeur actuelle
                        onChange={(evenement) => setAjoutImage(evenement.target.value)}
                    />

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

                    <div className={style.checkboxStars}>
                    <p>Ce personnage est-il membre des Stars ?</p>
                        <div className={style.petite}>
                            <label htmlFor="stars">Oui</label>
                            <input type="checkbox" id="stars" name="stars" 
                                checked={starsOuPas} 
                                onChange={cocherLaCase}
                                />
                        </div>
                    </div>
                    
                    <div className={style.alphaOuBravo}>
                        <div>
                            <input type="radio" id="Alpha" name="quelleEquipe" 
                                value="Alpha"
                                onChange={(e) => setAlphaOuBravo(e.target.value)} 
                            />
                            <label htmlFor="Alpha">Alpha</label>
                        </div>

                        <div>
                            <input type="radio" id="Bravo" name="quelleEquipe" 
                                value="Bravo"
                                onChange={(e) => setAlphaOuBravo(e.target.value)} 
                            />
                            <label htmlFor="Bravo">Bravo</label>
                        </div>
                    </div>

                    <textarea 
                        name="avis" id="avis" cols="40" rows="5" 
                        placeholder="J'écris mon avis concernant ce nouveau personnage"
                        value={monAvis}
                        onChange={(evenement) => setMonAvis(evenement.target.value)}
                        >
                    </textarea>

                    <textarea 
                        name="ligneSup" id="ligneSup" cols="40" rows="5" 
                        placeholder="J'ajoute un nouveau paragraphe concernant ce nouveau personnage"
                        value={ajoutLigneSup}
                        onChange={(evenement) => setAjoutLigneSup(evenement.target.value)}
                        >
                    </textarea>
                </div>
                : null
                }
            </div>
        </section>
    )
}