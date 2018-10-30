$(document).ready( function () {
  $( "#graphLimits" ).click( function () {

    let func = $( "#func" ).val().trim()

    functionPlot( {
      target: '#quadratic',
       xAxis: {domain: [-2, 12]},
       data: [{
         fn: func,
         range: [2, 8]
       }]
    } );

   } );
} );
