function chargerService(id, nomService) {
    document.getElementById("titreService").textContent = nomService;

    fetch("https://pachalik-service.onrender.com/service/" + id)
        .then(response => response.json())
        .then(data => {

            let liste = document.getElementById("listeDocuments");
            liste.innerHTML = "";

            data.forEach(doc => {
                liste.innerHTML += `
                    <li>${doc.nom_document}</li>
                `;
            });
        })
        .catch(error => {
            console.error(error);
        });
}