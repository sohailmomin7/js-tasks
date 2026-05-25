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

function validOtp(otp) {
    if(typeof otp !== 'string' || !otp.startsWith("ph-")){
        return "invalid"
    }else if(otp.startsWith("ph-") && otp.length<8 || otp.length>8){
        return false
    }else{
        return true
    }
}
const result=validOtp(12345678)
console.log(result)

function gonoVote(array) {
    if(!Array.isArray(array)){
        return "invalid"
    }else{
        let haCount = 0;
        let naCount = 0;
        for (arr of array){
            if(arr==="ha"){
                haCount+=1
            }else{
                naCount+=1
            }
        }
        return (haCount > naCount? true: haCount === naCount? "equal": false);
    }
}

console.log(gonoVote(12345))