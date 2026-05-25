function newPrice(currentPrice, discount){
    if(typeof currentPrice !== "number" || typeof discount !== "number" || discount<0 || discount>100){
        console.log("invalid")
    }else{
        
        let discountPrice = (currentPrice * discount) / 100;
        let afterDiscount=currentPrice-discountPrice
        console.log(afterDiscount.toFixed(3))

    }
}
newPrice(500, "5")