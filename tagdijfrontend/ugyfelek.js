document.addEventListener("DOMContentLoaded",function(){
    const createButton = document.getElementById("create");
    const readButton = document.getElementById("read");
    const updateButton = document.getElementById("update");
    const deleteButton = document.getElementById("delete");    
    //const baseUrl ="http://localhost/pizzakarbantartasa/pizzakarban/index.php?pizzakarban";

    createButton.addEventListener("click", async function () {
        const baseUrl ="http://localhost/";
        const formdata = new FormData(document.getElementById("nev"));
        let options = {
            method: "POST",
            mode: "cors",
            body: formdata
        };
        let response = await fetch(baseUrl, options);
        if(response.ok){
            console.log("Sikeres feltöltés")
        }else{
            console.error("Sikertelen megoldás")
        }
        return response;
    });

    deleteButton.addEventListener("click", async function () {
        const baseUrl =`http://localhost//${document.getElementById("azon").value}`;    
        let options = {
            method: "DELETE",        
        };
        let response = await fetch(baseUrl, options);
        return response;
    });

    updateButton.addEventListener("click", async function(){        
        const baseUrl ="http://localhost/";
        let object = {
            pazon: document.getElementById("azon").value,
            pnev: document.getElementById("nev").value,
            par: document.getElementById("ar").value
        };
        let options = {
            method: "PUT",
            mode: "cors",            
        };
        let response = await fetch(baseUrl, options);
        return response;
    });

    readButton.addEventListener("click", async function(){
        const baseUrl ="http://localhost/";
        let response = await fetch(baseUrl);
        if(response.ok){
            let data = await response.json();
            ugyfelListazas(data);
        }else{
            console.error("Hiba a szerver válaszában")
        }

    });

    function ugyfelListazas(ugyfelek){
        let ugyfelDiv = document.getElementById('ugyfellista');
        let tablazat = ugyfelFejlec();
        for(let ugyfel of ugyfelek){
            tablazat += ugyfelSor(ugyfel)
        }
        ugyfelDiv.innerHTML = tablazat + '</tbody></tbody>'
        return ugyfelDiv;
    }

    function ugyfelSor(ugyfel){
        let sor = `<tr>
        <td>${ugyfel.azon}</td>
        <td>${ugyfel.nev}</td>
        <td>${ugyfel.szulev}</td>
        <td>${ugyfel.irszam}</td>
        <td>${ugyfel.orsz}</td>
        <td><button type="button" class="btn btn-outline-secondary" onclick="adatBetoltes(${ugyfel.azon}, '${ugyfel.nev}', '${ugyfel.szulev}', '${ugyfel.irszam}', '${ugyfel.orsz}')"><i class="fa-regular fa-hand-point-left"></i>Kiválasztás</button></td>
        </tr>`;
        return sor
    }

    function ugyfelFejlec(){
        let fejlec = `<table class="table table-striped">
        <thead>
            <tr>
                <th>Azonosító: </th>
                <th>Név: </th>
                <th>Ár: </th>
                <th>Művelet: </th>
            </tr>
        </thead>
        <tbody>`;
        return fejlec;
    };
    
});

function adatBetoltes(azon, nev, szulev, irszam, orsz){
    let baseUrl='http://localhost/' + nev;
    let options={
        method: "GET",
        mode: "cors"
    };
    let response= fetch(baseUrl, options)
    document.getElementById("azon").value=azon;
    document.getElementById("nev").value=nev;
    document.getElementById("irszam").value=irszam;
    document.getElementById("orsz").value=orsz;    
    response.then(function(response){
        if(response.ok){
            let data= response.json();
        }
        else{
            console.error("Hiba a szerverben!");
        }
    });
}