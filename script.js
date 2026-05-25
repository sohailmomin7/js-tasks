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


function analyzeText(str) {
  if(typeof str !== "string"){
    return "invalid"
  }else{
    let myArr=str.split(" ")
    let longestWord=""
    for(let i=0;i<myArr.length;i++){
        if(myArr[i].length>longestWord.length){
            longestWord=myArr[i]
        }
    }
    let spaceRem=str.replace(" ","").length
    let objReturn={longword:longestWord,token:spaceRem}
    return objReturn
  }
}
console.log(analyzeText("I am a little honest person"))

// 3rd solution
function finalScore(omr) {
    if(omr.right+omr.wrong+omr.skip!==100){
        return "invalid"
    }else{
        let total=(omr.right*1)+(omr.wrong*-0.5)+(omr.skip*0)
        return Math.round(total)
    }
}
console.log(finalScore({"right":67,"wrong":23,"skip":10}))