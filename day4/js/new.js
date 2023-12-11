let item_price=30000
let discount=0.035
let redeem_coin = 20
let delivery_distance=120
let VAT=0.13
let voucher="20KVC"
function checkVoucher(v){
    if (v=="20KVC"){
    if(item_price>=20000){
        return 1500
    }else if(v=="10KVC"){
    if(item_price>=10000){
        return 500
   
}}else if(v=="1KVC"){
    if(item_price>=1000){
        return 100
    }
}else{
    return 0
}
}}
function redeemCoin(coin){
    return (0.5/2)*coin
}
function distance_check(dst){
    if(dst<=10){
        return 60
    }else if(dst>=10){
        return 60+(dst-10)*2
    }
}
function discountAmount(dst,coin,v,rate,price){
    let dis=rate*price;
    return dis+distance_check(dst)+redeemCoin(coin)+checkVoucher(v);
}
function payable(price,v,coin,dst){
    let total =price- checkVoucher(v)-redeemCoin(coin)-distance_check(dst);
    return (total - VAT*total)
}
console.log("discount Amount:"+discountAmount(delivery_distance,redeem_coin,voucher,discount,item_price))
console.log("total redeem amount: " + redeemCoin(redeem_coin));
console.log("deliver charge: " +distance_check(delivery_distance));
console.log("Voucher discount amount: " +checkVoucher(voucher));
console.log("Total price: " +item_price);
console.log("payable amout: " +payable(item_price,voucher,redeem_coin,delivery_distance))
