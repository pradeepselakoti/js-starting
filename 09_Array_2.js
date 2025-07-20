const mh = ["thor", "superman","batman"]
const dc = ["flash", "clash", "deadpool"]

//   mh.push(dc)
//  console.log(mh)
//  console.log(mh[3][2])

const all_heros =mh.concat(dc)
// console.log(all_heros)

const all_neew_heros = [...mh,...dc]
//  console.log(all_neew_heros)

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_Another_array = another_array.flat(1)
// console.log(real_Another_array)

//  console.log(Array.isArray("pradeep"))
//  console.log(Array.from("Pradeep"))

 console.log(Array.from({name:"klkll"}))

const score1  = 100
const score2 = 200
const score3 = 300

//  console.log(Array.of(score1,score2,score3))