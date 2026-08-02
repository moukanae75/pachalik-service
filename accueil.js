function toggleMenu(){

    let menu=document.getElementById("dropdown");

    if(menu.style.display==="block"){

        menu.style.display="none";

    }else{

        menu.style.display="block";

    }

}



function aboutApp(){

    alert(
`PACHALIK

Guide du citoyen

Version : 1.0

Développé pour faciliter l'accès aux services administratifs.`
    );

}



function helpApp(){

    alert(
`Aide

1. Choisissez un service.
2. Consultez les documents demandés.
3. Vérifiez les frais et la durée.`
    );

}
