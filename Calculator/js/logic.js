window.addEventListener('load',bindevents);

var a=0;
var operator;
var b=0;

function bindevents(){
    document.querySelector("#btn_0").addEventListener('click',number_press_fun);
    document.querySelector("#btn_1").addEventListener('click',number_press_fun);
    document.querySelector("#btn_2").addEventListener('click',number_press_fun);
    document.querySelector("#btn_3").addEventListener('click',number_press_fun);
    document.querySelector("#btn_4").addEventListener('click',number_press_fun);
    document.querySelector("#btn_5").addEventListener('click',number_press_fun);
    document.querySelector("#btn_6").addEventListener('click',number_press_fun);
    document.querySelector("#btn_7").addEventListener('click',number_press_fun);
    document.querySelector("#btn_8").addEventListener('click',number_press_fun);
    document.querySelector("#btn_9").addEventListener('click',number_press_fun);
    document.querySelector("#btn_decimal").addEventListener('click',number_press_fun);

    document.querySelector("#btn_plus").addEventListener('click',operation_press_fun);
    document.querySelector("#btn_minus").addEventListener('click',operation_press_fun);
    document.querySelector("#btn_mul").addEventListener('click',operation_press_fun);
    document.querySelector("#btn_divide").addEventListener('click',operation_press_fun);

    document.querySelector("#btn_ans").addEventListener('click',ans_press_fun);
    document.querySelector("#btn_ac").addEventListener('click',ac_press_fun);
    
    
}

function ac_press_fun(){
    a = "";
    b = "";
    ans = "";
    document.getElementById("input_box").value = "";
}

function number_press_fun(){
    // if(input_box == "0"){
    //     input_box = document.getElementById("input_box");
    // }
    console.log("Initial Value of input box :",document.getElementById("input_box").value);
    // let t = this;
    console.log("Button pressed :",this);
    
    document.getElementById("input_box").value = "" + document.getElementById("input_box").value + this.value;
    console.log("Final Value of input box :",document.getElementById("input_box").value);
    document.getElementById("input_box").innerHTML = document.getElementById("input_box").value;
}

function operation_press_fun(){
    a = parseInt(document.getElementById("input_box").value);
    console.log("Value of var a :",a);

    operator = this.value;
    console.log("operator :",operator);
    document.getElementById("input_box").value = "" + document.getElementById("input_box").value + this.value;
    console.log("Final Value of input box :",document.getElementById("input_box").value);

}

function ans_press_fun(){

    let str = document.getElementById("input_box").value;
    // console.log("Value of str :",str);
    // console.log("Length of str :",str.length);

    let aa = ""+a;
    // console.log("aa :",aa," Length :",aa.length);

    b = str.substr(aa.length +1, str.length);
    b = parseInt(b);
    console.log("Value of b:", b);

    let ans=0;

    switch(operator){
        case "+":
        console.log("Operator is +");
        ans = a+b;
        break;
        case "-":
        console.log("Operator is -");
        ans = a-b;
        break;
        case "*":
        console.log("Operator is *");
        ans = a*b;
        break;
        case "/":
        console.log("Operator is /");
        ans = a/b;
        break;      
    }

    console.log("Result :",ans);
    document.getElementById("input_box").value = ans;


}