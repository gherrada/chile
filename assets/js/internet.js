const $graphInternet = document.querySelector("#graph-internet");

const tagsInternet=["1990","1991","1992","1993","1994","1995","1996","1997","1998","1999","2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020","2021","2022"];

const datosInternet={

    label:"Individuals using the Internet (% of population)",
    data:["0","0","0","0.036548938","0.071783144","0.141084507","0.346980781","0.68347561","1.057092496","1.662322022","4.103419297","16.6","19.1","22.1","25.47377889","28.17791012","31.17534703","34.49775117","35.9","37.3","41.56","45","52.24960729","55.05","58","61.11","76.62959195","83.55858602","82.32748693","84.9","85.01758384","86.37099516","90.19336882"],
    backgroundColor: 'rgba(54, 162, 235, 0.2)', // Color de fondo
    borderColor: 'rgba(54, 162, 235, 1)', // Color del borde
    borderWidth: 2,// Ancho del borde

};

new Chart($graphInternet, {
    type: 'bar',// Tipo de gráfica
    data: {
        labels: tagsInternet,
        datasets: [
            datosInternet,
            // Aquí más datos...
        ]
    }

});
