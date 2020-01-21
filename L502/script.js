const empty = (x) => x.children.length === 0;

// function empty(x){
//    return x.children.length == 0; // abrunebs trues
// }

let ul = document.getElementById('empty-list')
console.log(empty(ul))