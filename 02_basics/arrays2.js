const marvel_heros = ["thor","spiderman","Ironman"]

const dc_heros = ["superman","flash","batman"]

//marvel_heros.push(dc_heros)

// console.log(marvel_heros);

// console.log(marvel_heros[3][1])

 //const all_Heros = marvel_heros.concat(dc_heros)

//console.log(all_Heros);

const all_new_heros = [...marvel_heros,  ...dc_heros]//spread method and concat are same but we prefer spread because it is easy to write a code
console.log(all_new_heros);





