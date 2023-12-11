
            /*insurance,vehicle,fooding,extra */
let expense=[700,1000,2000,1000];
            /*salary, share, FD interest, PF by company */
let income=[30000,3000,300,3000];
function tds(){
    return income[0]*0.01;
}
function pf(){
    return income[0]*0.1;
}
function total_expense(){
    let total=0;
    for(var i=0;i<expense.length;i++){
        total+=expense[i];
    }
    return total+tds()+pf();
}
function total_income(){
    let total=0;
    for(var i=0;i<income.length;i++){
        total+=income[i];
    }
    return total;
}
function gross_salary(){
    return income[0]+income[3];
}
function net_salary(){
    return income[0]-income[3]-tds();
}
console.log("TDS: "+tds())
console.log("Provident fund: "+pf());
let total_gross;
total_gross=total_income()-total_expense();
console.log("The total gross is: "+total_gross)
console.log("Gross salary: "+gross_salary());
console.log("Net salary: "+ net_salary());
