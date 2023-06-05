

const $graph = document.querySelector("#graph-gdp");

const tags = ["1960", "1961", "1962", "1963", "1964", "1965", "1966", "1967", "1968", "1969", "1970", "1971", "1972", "1973", "1974", "1975", "1976", "1977", "1978", "1979", "1980", "1981", "1982", "1983", "1984", "1985", "1986", "1987", "1988", "1989", "1990", "1991", "1992", "1993", "1994", "1995", "1996", "1997", "1998", "1999", "2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"];

const datosGDP = {

    label: "GDP Chile 1960-2022",
    data: ["4110000000", "4609727272.72727", "5416272727.27273", "5668187500", "5982347826.08696", "6026593750", "7072641025.64103", "7013196078.43137", "7167086956.52174", "8377093023.25581", "9126309734.51328", "10884114754.0984", "11853817307.6923", "16836261173.1844", "16210404183.5358", "7622217352.34216", "10341925249.0421", "13962893421.5413", "15989933708.1491", "21803696985.2349", "29036709871.7949", "34509878043.5897", "25325893205.657", "20355959237.2128", "19622527479.6913", "17702885393.5099", "18891048818.7425", "22255407684.6999", "26040229793.0697", "29885685142.9107", "33113887818.957", "37834793730.3133", "45964327558.8836", "49297773130.1185", "57008425295.8256", "73447063319.3034", "78574385335.5811", "85728899954.449", "81995304456.1038", "75596103237.1555", "78249883995.6255", "71517080040.6338", "70294892400.0639", "76507577234.5965", "99079230169.6389", "122314960843.922", "153840051814.059", "172565850839.158", "179663403196.985", "171412642047.328", "217105420016.533", "251224856981.294", "267175872540.066", "277239461340.404", "259405202008.001", "242496649874.236", "249298719723.108", "276364933679.626", "295402652037.155", "278584733103.01", "252727193710.018", "317058508651.76"],
    backgroundColor: 'rgba(117, 262, 23, 0.2)', // Color de fondo
    borderWidth: 3,// Ancho del borde
    fill: true,
    borderColor: 'rgb(117, 232, 23)',
    //pointRadius: 0.5,
    //pointHoverRadius: 0.5,
    lineTension: 0.05,
    
    pointStyle: 'circle',
    pointRadius: 4,
    pointHoverRadius: 8,
    pointBackgroundColor:'white',

};

new Chart($graph, {
    type: 'line',// Tipo de gráfica
    data: {
        labels: tags,
        datasets: [
            datosGDP,
            // Aquí más datos...
        ]
    },

    options: {
        responsive: true,
        legend: {
            labels: {
               color: 'white'
            },
        },
        scales: {
            x: { 
            ticks:{
                color:"black",
               
            },
            grid:{
                display: false,
            }

            },
            y: {
                ticks: { // max: 5, min: 200000, stepSize: 200000,
                    color: "black", 
                    callback: function (value, index, ticks) {
                        return (value < 1000000) ? '$ ' +value / 1000 + 'K' : '$ ' + value / 1000000 + 'M';
                    }
                },
                grid:{
                    display: false,
                }
            },
        },
        plugins:{
            tooltip:{
                displayColors: false,
                
                callbacks:{

                    label: function(tooltipItem, data) {
                        return '$ '+ tooltipItem.formattedValue;
                      },
                   
                }
            },
          
        }
    }
});