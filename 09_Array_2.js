const mh = ["thor", "superman","batman"]
const dc = ["flash", "clash", "deadpool"]

  // mh.push(dc)
//  console.log(mh)                  [ 'thor', 'superman', 'batman', [ 'flash', 'clash', 'deadpool' ] ]
//  console.log(mh[3][2])             deadpool

const all_heros =mh.concat(dc)
// console.log(all_heros)           [ 'thor', 'superman', 'batman', 'flash', 'clash', 'deadpool' ]      


const all_neew_heros = [...mh,...dc]
//  console.log(all_neew_heros)       [ 'thor', 'superman', 'batman', 'flash', 'clash', 'deadpool' ]      

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_Another_array = another_array.flat(1)
// console.log(real_Another_array)  [ 1, 2, 3, 4, 5, 6, 7, 6, 7, [ 4, 5 ] ]

  // console.log(Array.isArray("pradeep"))      false
  // console.log(Array.from("Pradeep"))
//   [
//   'P', 'r', 'a',
//   'd', 'e', 'e',
//   'p'
// ]

//  console.log(Array.from({name:"klkll"}))   []

const score1  = 100
const score2 = 200
const score3 = 300

  // console.log(Array.of(score1,score2,score3))    [ 100, 200, 300 ]