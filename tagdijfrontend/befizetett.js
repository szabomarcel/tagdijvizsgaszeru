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
            azon: document.getElementById("azon").value,
            datum: document.getElementById("datum").value,
            osszeg: document.getElementById("osszeg").value,
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
        let ugyfelDiv = document.getElementById('befizetettlista');
        let tablazat = ugyfelFejlec();
        for(let ugyfel of ugyfelek){
            tablazat += ugyfelSor(ugyfel)
        }
        ugyfelDiv.innerHTML = tablazat + '</tbody></tbody>'
        return ugyfelDiv;
    }

    function ugyfelSor(ugyfel){
        let sor = `<tr>
        <td>${befiz.azon}</td>
        <td>${befiz.datum}</td>
        <td>${befiz.osszeg}</td>
        <td><button type="button" class="btn btn-outline-secondary" onclick="adatBetoltes(${befiz.azon}, '${befiz.datum}', '${befiz.osszeg}')"><i class="fa-regular fa-hand-point-left"></i>Kiválasztás</button></td>
        </tr>`;
        return sor
    }

    function ugyfelFejlec(){
        let fejlec = `<table class="table table-striped">
        <thead>
            <tr>
                <th>Azonosító: </th>
                <th>Dátum: </th>
                <th>Összeg: </th>                
            </tr>
        </thead>
        <tbody>`;
        return fejlec;
    };
    
});

function adatBetoltes(azon, datum, osszeg){
    let baseUrl='http://localhost/' + azon;
    let options={
        method: "GET",
        mode: "cors"
    };
    let response= fetch(baseUrl, options)
    document.getElementById("azon").value=azon;
    document.getElementById("datum").value=datum;
    document.getElementById("osszeg").value=osszeg;
    response.then(function(response){
        if(response.ok){
            let data= response.json();
        }
        else{
            console.error("Hiba a szerverben!");
        }
    });
}