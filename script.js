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