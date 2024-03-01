import { useState } from "react";
import Personnages from "./Personnages";

export default function PresentationPersos(){
    // State
    const [badgePour, setBadgePour] = useState();
    // Fonction
    const fonctionBadge = (nom) => {
        setBadgePour(nom);
    }

    return(
        <section>
            {/* Personnage 1*/}
            <Personnages 
            imagePerso="../../public/portrait/jill-valentine.png"
            nom="Jill Valentine"
            ajoutPerso="Jill est mon personnage préféré."
            listeJeux={["Resident Evil 3", "Resident Evil 5"]}
            quelMode="Mercenaires"
            filmOuPas={["Resident Evil: Degeneration","Resident Evil : Death Island"]}
            badge={badgePour == "Jill Valentine"}
            jeChoisis={fonctionBadge}
            />

            {/* Personnage 2*/}
            <Personnages 
            imagePerso="../../public/portrait/chris-redfield.png"
            nom="Chris Redfield"
            ajoutPerso="J&apos;aime aussi ce personnage."
            listeJeux={["Resident Evil : Code Veronica", "Resident Evil 5", "Resident Evil 6"]}
            quelMode="Mercenaires & Réunion de mercenaires"
            filmOuPas={["Resident Evil: Degeneration", "Resident Evil: Vendetta", "Resident Evil : Death Island"]}
            badge={badgePour == "Chris Redfield"}
            jeChoisis={fonctionBadge}
            />

            {/* Personnage 3*/}
            <Personnages 
            imagePerso="../../public/portrait/barry-burton.png"
            nom="Barry Burton"
            ajoutPerso="Personnage secondaire que j&apos;aurais aimé voir plus."
            quelMode="Réunion de mercenaires"
            filmOuPas={["Non"]}
            badge={badgePour == "Barry Burton"}
            jeChoisis={fonctionBadge}
            />

            {/* Personnage 4*/}
            <Personnages 
            imagePerso="../../public/portrait/albert-wesker.png"
            nom="Albert Wesker"
            ajoutPerso="Scientifique en plus d&apos;être membre des stars."
            ligneSup="Il est également un traitre."
            listeJeux={["Resident Evil 5", "Resident Evil : Code Veronica"]}
            quelMode="Mercenaires"
            filmOuPas={["Non"]}
            badge={badgePour == "Albert Wesker"}
            jeChoisis={fonctionBadge}
            />

            {/* Personnage 5*/}
            <Personnages 
            imagePerso="../../public/portrait/rebecca-chambers.png"
            nom="Rebecca Chambers"
            infoEquipe = "Bravo"
            ajoutPerso="C&apos;était super de lui consacrer un jeu."
            listeJeux={["Resident Evil 0"]}
            quelMode="Réunion de mercenaires"
            filmOuPas={["Resident Evil : Death Island"]}
            badge={badgePour == "Rebecca Chambers"}
            jeChoisis={fonctionBadge}
            />
            
      </section>
    )
}