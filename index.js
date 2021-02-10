
//My api key
var apiKey = {
    key: //"sua credencial AQUI"
}

//GET Fetch Requisition
fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=' +
       apiKey.key)
       .then((response)=>{
           if(!response.ok) throw new Error('Erro ao executar a requisição, status ' + response.status);
           return response.json();

       })    
       .then((api)=>{
         // Retorna todos os dados da API ->  
         console.log(api);
         var texto = "";

         for(let i = 0; i < 10; i++){

            texto = texto + `
                <div class="media">
                    <img src="cripto.png" class="algin-self-center mr-3" alt="coin" width="100" heigth="60">
                    <div class="d-flex flex-column">
                        <h5 class="mt-2">${api.data[i].name}</h5>
                        <div class="d-flex">
                        <p class="badge badge-pill badge-success d-flex align-items-center mr-3">${api.data[i].symbol}</p>
                        <p id="data">${api.data[i].first_historical_data}</p>
                        </div>
                       
                    </div>
                </div>    
            `;

            document.getElementById("coins").innerHTML = texto;
         }
       })
     