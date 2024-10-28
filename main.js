//N1
// const num = [1, 2, 3, 4, 5]
// const sum = num.reduce((prev,item) => {
//     return prev + item
// }, 0)
// console.log(sum);

//N2
// const num2 = [1, 2, 3, 4]
// const product = num2.reduce((prev,item) => {
//     return prev * item
// }, 1)

// console.log(product);

// N3, N4
// const num3 = [10, 5, 8, 20, 3]
// const biggest = num3.reduce((perv, item) => {
//     if(item > perv) {
//         return item
//     }
//     else {
//         return perv
//     }
// })
// const smallest = num3.reduce((perv, item) => {
//     if(item < perv) {
//         return item
//     }
//     else {
//         return perv
//     }
// })
// console.log(biggest , smallest);

// N5
// const num4 = [1, 2, 3, 4, 5]
// const trimmed = num4.reduce((perv, item) => {
//     return String(perv + item)
// }, 0)
// console.log(trimmed);

// N6
// const value = [{ value: 10 }, { value: 20 }, { value: 30 }];
// const valueSum = value.reduce((perv,item) => {
//     return perv + item.value
// }, 0)
// console.log(valueSum);

// N7
// const or = ["да", "нет", "да", "нет", "да"];
// const isYes = or.reduce((perv, item) => {
//   return item == "да" ? perv + 1 : perv + 0;
// }, 0);
// console.log(isYes);

// N8
// const num5 = [1, 2, 2, 3, 4, 4, 5];
// const duplicate = num5.reduce((perv, item) => {
//     if(!perv.includes(item)){
//         perv.push(item)
//     }
//     return perv
// }, []);
// console.log(duplicate);

// N9
// const num6 = [1, 2, 2, 3, 3, 3, 4];
// const duplicatesNum = num6.reduce((perv,item) => {
//   perv[item] = (perv[item] || 0) + 1;
//   return perv
// }, {});
// console.log(duplicatesNum);
