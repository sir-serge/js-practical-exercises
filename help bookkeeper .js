function stockList(books, categories) {
  //check first element matces which categories
  //add elemenst of each categories
  let obj = {};
categories.forEach((item, index) => {
  obj[item] = 0;
});
console.log(obj)
  for(let i=0;i<books.length;i++){
    if(obj[i]===categories[0].at(0)){
      let counter=parseInt(books.slice(books.indexOf(""),-1));
      console.log(counter);
          return obj[item]+=counter
    }
  }
// return obj
}
 console.log(stockList(["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"],
            ["A", "B", "C", "D"]));
