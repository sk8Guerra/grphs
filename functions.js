$(document).ready( function () {
  $( "#graphLimits" ).click( function () {

    let func = $( "#func" ).val().trim()

    functionPlot( {
      target: '#quadratic',
       xAxis: {domain: [-2, 12]},
       data: [{
         fn: '3 + sin(x)',
         range: [2, 8]
       },

       
       {
         fn: 'x^2',
         range: [10, 20]
       }
      ]
    } );

   } );
} );
