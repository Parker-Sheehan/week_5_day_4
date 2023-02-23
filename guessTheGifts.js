

const presents = (presents,wishlist) => {
    arr = []
    for (let i = 0; i < wishlist.length; i++){
        for (let j = 0; j < presents.length; j++){
            if (wishlist[i].clatters === presents[j].clatters && wishlist[i].weight === presents[j].weight && wishlist[i].size === presents[j].size){
                arr.push(wishlist[i].name)
            }
        }
    }
    return(arr)
}

var w = [
    {name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light"},
    {name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium"},
    {name: "Card Game", size: "small", clatters: "no", weight: "light"}
];

var p = [
    {size: "medium", clatters: "a bit", weight: "medium"},
    {size: "small", clatters: "yes", weight: "light"}
];

console.log(presents(p,w))