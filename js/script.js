const km = parseFloat(prompt ('Inserisci i chilometri che devi percorrere: '));
const age = parseInt(prompt ('Inserisci la tua età: '));
let km_routes = (km * 0.21 );
if ( age < 18) {
    let sale_underage = (km_routes * 20 / 100);
    console.log ('Visto che sei minorenne hai uno sconto del 20% paghi: ',sale_underage.toFixed(2) + ' ' + '€' );
}
else if (age > 65) {
    let sale_overage = (km_routes * 40 / 100);
    console.log ('Visto che sei ultra_sessantacinquenne hai uno sconto del 40% paghi: ',sale_overage.toFixed(2) + ' ' + '€' );
}
else {
    console.log ('Paghi:',km_routes.toFixed(2) + ' ' + '€');
}