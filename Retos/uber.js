/*
    PRIMER PRUEBA DE CODIGO

Conocer el costo de un viaje en Uber, para ello se utiliza la formula: 
cost per minute * ride time + cost per mile * ride distance

Ejemplo:
ride time = 30
ride distance = 7
cost_per_minute = [0.2, 0.35, 0.4, 0.45]
cost_per_mile = [1.1, 1.8, 2.3, 3.5]

solucion:
[ '13.7', '23.1', '28.1', '38.0' ]

*/

const uberCost = (rideTime, rideDistance, costPerMinute, costPerMile) => {
    return costPerMinute.map((cost, index) => {
        const cost_per_mile = costPerMile[index];
        return parseFloat(cost * rideTime + cost_per_mile * rideDistance).toFixed(1);
    })
}

console.log(uberCost(30, 7, [0.2, 0.35, 0.4, 0.45], [1.1, 1.8, 2.3, 3.5]))
