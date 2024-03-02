import { useEffect, useRef, useState } from "react";
import Personnages from "./Personnages";
import style from "./Creation.module.css";

export default function CreationPerso(){
    // State ------------------------------------------------------------------------------------
    const [nomNouveau, setNomNouveau] = useState("Nom du personnage");
    const [ajoutImage, setAjoutImage] = useState();
    const [monAvis, setMonAvis] = useState("Je donne mon avis sur ce personnage");
    const [ajoutLigneSup, setAjoutLigneSup] = useState();

    const [starsOuPas, setStarsOuPas] = useState(false);
        console.log("Valeur de starOuPas " + starsOuPas);
        
    const [alphaOuBravo, setAlphaOuBravo] = useState();
        console.log(alphaOuBravo);
    
        const film1 = useRef();
        const film2 = useRef();
        const film3 = useRef();
        const film4 = useRef();

    const [listeFilms, setListeFilms] = useState([
        film1, film2, film3, film4 // ça marche pas
    ]);
    console.log(listeFilms);

    // Variables ------------------------------------------------------------------------------------
    const nomNouveauRef = useRef();
    const ajoutImageRef = useRef();
    const monAvisRef = useRef();
    const ajoutLigneSupRef = useRef();

    // Cycle ------------------------------------------------------------------------------------
        // Au moment où la variable monNouveau est mis à jour, le useEffect s'exécute.
        // Ici, un focus dans le champ "monAvisRef"
    useEffect(() => {monAvisRef.current.focus();}, [nomNouveau]);

    
    // Fonctions ------------------------------------------------------------------------------------
        // A l'évènement, au clic, le useState starsOuPas va prendre la valeur checked (true / false)
    const cocherLaCase = (e) => {
        console.log("La checkbox est actuellement à " + e.target.checked);
        setStarsOuPas(e.target.checked);
    };

    
    const sauvegarder = () => {
        console.log(`La donnée provenant du champ "Nom" quand on clique sur le bouton est `  + nomNouveauRef.current.value);
        setNomNouveau(nomNouveauRef.current.value);
        setAjoutImage(ajoutImageRef.current.value);
        setMonAvis(monAvisRef.current.value);
        setAjoutLigneSup(ajoutLigneSupRef.current.value);
        setListeFilms(ancienneListe => ({...ancienneListe, film1, film2, film3, film4}));
    }

    return(
        <section >
            <Personnages 
                nom = {nomNouveau} 
                imagePerso = {ajoutImage}
                ajoutPerso = {monAvis}
                ligneSup ={ajoutLigneSup}
                membreDesStars= {starsOuPas}
                infoEquipe = {alphaOuBravo}
                filmOuPas = {listeFilms}
                />

            <div className={style.creation}>
                <h3>Crée ton propre personnage</h3>

                {/*----------- IMAGE --------*/}
                <input 
                    type="text" 
                    name="image" 
                    id="image" 
                    placeholder="Coller ici le lien d'une image" 
                    size="30"
                    ref={ajoutImageRef}
                />

                {/*----------- NOM --------*/}
                <input 
                    type="text" 
                    name="nom" 
                    id="nom" 
                    placeholder="Inscrivez le nom du personnage" 
                    size="30"
                    ref={nomNouveauRef}
                />

                {/*----------- MEMBRE DES STARS ?  --------*/}
                <div className={style.checkboxStars}>
                <p>Ce personnage est-il membre des Stars ?</p>
                    <div className={style.petite}>
                        <label htmlFor="stars">Oui</label>
                        <input type="checkbox" id="stars" name="stars" 
                            checked={starsOuPas} // Deux valeurs possibles : true / false
                            onChange={cocherLaCase}
                            />
                    </div>
                </div>
                
                {/*----------- ALPHA ou BRAVO --------*/}
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

                {/*----------- AVIS --------*/}
                <textarea 
                    name="avis" id="avis" cols="40" rows="5" 
                    placeholder="J'écris mon avis concernant ce nouveau personnage"
                    ref={monAvisRef}
                    >
                </textarea>

                {/*----------- LIGNE SUPPLEMENTAIRE --------*/}
                <textarea 
                    name="ligneSup" id="ligneSup" cols="40" rows="5" 
                    placeholder="J'ajoute un nouveau paragraphe concernant ce nouveau personnage"
                    ref={ajoutLigneSupRef}
                    >
                </textarea>

                <input 
                    type="text" name="film1" id="film1" placeholder="Inscrivez le nom d'un film" size="40"
                    ref={film1}
                    />
                <input 
                    type="text" name="film2" id="film2" placeholder="Inscrivez le nom d'un film" size="40"
                    ref={film2}
                    />
                <input 
                    type="text" name="film3" id="film3" placeholder="Inscrivez le nom d'un film" size="40"
                    ref={film3}
                    />
                <input 
                    type="text" name="film4" id="film4" placeholder="Inscrivez le nom d'un film" size="40"
                    ref={film4}
                    />

                <button onClick={sauvegarder}>Envoyer les informations</button>
            </div>
        </section>
    )
}