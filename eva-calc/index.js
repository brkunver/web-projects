// Burakhan Ünver 21.01.2021

/* First Section - Calculator */
function sum() {
  let num1 = parseInt($("#calc-num-1").val());
  let num2 = parseInt($("#calc-num-2").val());
  result = num1 + num2;
  $("#calc-eva-alert").html("Result : " + result);
}

function sub() {
  let num1 = parseFloat($("#calc-num-1").val());
  let num2 = parseFloat($("#calc-num-2").val());
  result = num1 - num2;
  $("#calc-eva-alert").html("Result : " + result);
}

function division() {
  let num1 = parseFloat($("#calc-num-1").val());
  let num2 = parseFloat($("#calc-num-2").val());
  result = num1 / num2;
  $("#calc-eva-alert").html("Result : " + result.toFixed(2));
}

function multi() {
  let num1 = parseFloat($("#calc-num-1").val());
  let num2 = parseFloat($("#calc-num-2").val());
  result = num1 * num2;
  $("#calc-eva-alert").html("Result : " + result);
}

$("#m-button").on("click", multi);
$("#sum-button").on("click", sum);
$("#sub-button").on("click", sub);
$("#div-button").on("click", division);

/* Second Section - Quadratic Equation */

function findQuadratic() {
  let a = parseFloat($("#q-a").val());
  let b = parseFloat($("#q-b").val());
  let c = parseFloat($("#q-c").val());

  let delta = ( b * b) - (4 * a * c);

  if (delta < 0) {
    $("#second-alert").html("Delta is :" + delta + " , So There is no root");
  } else {
    let x1 = (-b - Math.pow(delta, 0.5)) / (2 * a);
    let x2 = (-b + Math.pow(delta, 0.5)) / (2 * a);

    $("#second-alert").html("x1 = " + x1.toFixed(2) + " , x2 = " + x2.toFixed(2));
  }
}

$("#q-button").on("click", findQuadratic);


/* Third Section - Hypotenuse Equation */

function hypo() {
  let side1 = parseInt($("#hypo-1").val());
  let side2 = parseInt($("#hypo-2").val());

  let hypoC = Math.pow( Math.pow(side1,2) + Math.pow(side2,2) , 0.5);
  $("#hypo-alert").html("Hypotenuse is : " + hypoC.toFixed(2));
}

$("#h-button").on("click", hypo);

/* Fourth Section - Sphere */

function sp() {
    let rad = parseFloat( $("#rad").val());
    let area = 4 * Math.PI * rad * rad ;
    $("#sp-alert").html("Area is : " + area.toFixed(2));
}

$("#sp-button").on("click" , sp);