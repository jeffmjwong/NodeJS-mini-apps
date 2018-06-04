// const isTrue = true;

// if (!isTrue) {
//   console.log('yes');
// } else {
//   console.log('no');
// }

// const yesOrNo = isTrue ? 'yes' : 'no';
// console.log(yesOrNo);

// let day = 5;
//
// switch(day) {
//   case 0:
//     console.log('sunday');
//     break;
//
//   case 1:
//     console.log('monday');
//     break;
//
//   default:
//     console.log('haha');
//     break;
// }

function isAdult(age) {
  return age && age >= 18;
}

function countToFive(start = 1) {
  for (let i = start; i <= 5; i++) {
    console.log(i);
  }
}

function greet(name) {
  name && console.log(`Hi, ${name}!`);
}

greet('Simon');
