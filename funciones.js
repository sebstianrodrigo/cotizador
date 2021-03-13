document.getElementById('cont2').style.display="none";
document.getElementById('cont3').style.display="none";
document.getElementById('cont4').style.display="none";
document.getElementById('cont5').style.display="none";
document.getElementById('cont6').style.display="none";
document.getElementById('cont7').style.display="none";
document.getElementById('cont8').style.display="none";
document.getElementById('cont9').style.display="none";
document.getElementById('cont10').style.display="none";
document.getElementById('cont11').style.display="none";
document.getElementById('cont12').style.display="none";

var conta=0;
function agre(){
    conta=conta+1;
    if(conta==1){
        document.getElementById('cont2').style.display="block";
    }
    else if (conta==2){
        document.getElementById('cont3').style.display="block";
    }
    else if (conta==3){
        document.getElementById('cont4').style.display="block";
    }
    else if (conta==4){
        document.getElementById('cont5').style.display="block";
    }
    else if (conta==5){
        document.getElementById('cont6').style.display="block";
    }
    else if (conta==6){
        document.getElementById('cont7').style.display="block";
    }
    else if (conta==7){
        document.getElementById('cont8').style.display="block";
    }
    else if (conta==8){
        document.getElementById('cont9').style.display="block";
    }
    else if (conta==9){
        document.getElementById('cont10').style.display="block";
    }
    else if (conta==10){
        document.getElementById('cont11').style.display="block";
    }
    else if (conta==11){
        document.getElementById('cont12').style.display="block";
    }
}   
var v1 =parseFloat(document.getElementById('value1').value);
var v2 =parseFloat(document.getElementById('value2').value);
var v3 =parseFloat(document.getElementById('value3').value);
var v4 =parseFloat(document.getElementById('value4').value);
var v5 =parseFloat(document.getElementById('value5').value);
var v6 =parseFloat(document.getElementById('value6').value);
var v7 =parseFloat(document.getElementById('value7').value);
var v8 =parseFloat(document.getElementById('value8').value);
var v9 =parseFloat(document.getElementById('value9').value);
var v10 =parseFloat(document.getElementById('value10').value);
var v11 =parseFloat(document.getElementById('value11').value);
var v12 =parseFloat(document.getElementById('value12').value);

v2= 0;
v3= 0;
v4= 0;
v5= 0;
v6= 0;
v7= 0;
v8= 0;
v9= 0;
v10= 0;
v11= 0;
v12= 0;


function coti(){
    var persona= document.getElementById('nombre').value;
    v1 =parseFloat(document.getElementById('value1').value);
    if(conta==1){
        v2=parseFloat(document.getElementById('value2').value);
    }
    else if (conta==2){
        v3 =parseFloat(document.getElementById('value3').value);
    }
    else if (conta==3){
        v4 =parseFloat(document.getElementById('value4').value);
    }
    else if (conta==4){
        v5 =parseFloat(document.getElementById('value5').value);
    }
    else if (conta==5){
        v6 =parseFloat(document.getElementById('value6').value);
    }
    else if (conta==6){
        v7 =parseFloat(document.getElementById('value7').value);
    }
    else if (conta==7){
        v8 =parseFloat(document.getElementById('value8').value);
    }
    else if (conta==8){
        v9 =parseFloat(document.getElementById('value9').value);
    }
    else if (conta==9){
        v10 =parseFloat(document.getElementById('value10').value);
    }
    else if (conta==10){
        v11=parseFloat(document.getElementById('value11').value);
    }
    else if (conta==11){
        v12=parseFloat(document.getElementById('value12').value);
    }
    ///VARIABLES DE OPCIONES
    var selectValue11 =document.getElementById('opcion11').value;
    var selectValue12 =document.getElementById('opcion12').value;

    var selectValue21 =document.getElementById('opcion21').value;
    var selectValue22 =document.getElementById('opcion22').value;

    var selectValue31 =document.getElementById('opcion31').value;
    var selectValue32 =document.getElementById('opcion32').value;

    var selectValue41 =document.getElementById('opcion41').value;
    var selectValue42 =document.getElementById('opcion42').value;

    var selectValue51 =document.getElementById('opcion51').value;
    var selectValue52 =document.getElementById('opcion52').value;

    var selectValue61 =document.getElementById('opcion61').value;
    var selectValue62 =document.getElementById('opcion62').value;

    var selectValue71 =document.getElementById('opcion71').value;
    var selectValue72 =document.getElementById('opcion72').value;

    var selectValue81 =document.getElementById('opcion81').value;
    var selectValue82 =document.getElementById('opcion82').value;

    var selectValue91 =document.getElementById('opcion91').value;
    var selectValue92 =document.getElementById('opcion92').value;

    var selectValue101 =document.getElementById('opcion101').value;
    var selectValue102 =document.getElementById('opcion102').value;

    var selectValue111 =document.getElementById('opcion111').value;
    var selectValue112 =document.getElementById('opcion112').value;

    var selectValue121 =document.getElementById('opcion121').value;
    var selectValue122 =document.getElementById('opcion122').value;
    ////Primer Div
    ////1.0 Div 
    if (selectValue11 == "none" && selectValue12 == "none"){
        v1 = v1*0;
    }
    else if (selectValue11 == "none" && selectValue12 == "natural"){
        v1 = v1*0;
    }
    else if (selectValue11 == "none" && selectValue12 == "rojo"){
        v1 = v1*0;
    }
    else if (selectValue11 == "none" && selectValue12 == "amarillo"){
        v1 = v1*0;
    }
    else if (selectValue11 == "none" && selectValue12 == "negro"){
        v1 = v1*0;
    }
    /// 1.1 Div
    else if (selectValue11 == "4x10x20" && selectValue12 == "none"){
        v1 = v1*0;
    }
    else if (selectValue11 == "4x10x20" && selectValue12 == "natural"){
        v1 = v1*22.10;
    }
    else if(selectValue11 == "4x10x20" && selectValue12 == "rojo"){
        v1 = v1*25.10;
    }
    else if(selectValue11 == "4x10x20" && selectValue12 == "amarillo"){
        v1= v1*24.50;
    }
    else if(selectValue11 == "4x10x20" && selectValue12 == "negro"){
        v1 = v1*25.80;
    }
    /// 1.2 Div
    else if (selectValue11 == "6x10x20" && selectValue12 == "none"){
        v1 = v1*0;
    }
    else if (selectValue11 == "6x10x20" && selectValue12 == "natural"){
        v1 = v1*25.70;
    }
    else if(selectValue11 == "6x10x20" && selectValue12 == "rojo"){
        v1 = v1*30.20;
    }
    else if(selectValue11 == "6x10x20" && selectValue12 == "amarillo"){
        v1= v1*29.20;
    }
    else if(selectValue11 == "6x10x20" && selectValue12 == "negro"){
        v1 = v1*32;
    }
    /// 1.3 Div
    else if (selectValue11 == "8x10x20" && selectValue12 == "none"){
        v1 = v1*0;
    }
    else if (selectValue11 == "8x10x20" && selectValue12 == "natural"){
        v1 = v1*29.70;
    }
    else if(selectValue11 == "8x10x20" && selectValue12 == "rojo"){
        v1 = v1*35.70;
    }
    else if(selectValue11 == "8x10x20" && selectValue12 == "amarillo"){
        v1= v1*34.40;
    }
    else if(selectValue11 == "8x10x20" && selectValue12 == "negro"){
        v1 = v1*36.30;
    }
//////////////////////////////////// segundo Div
    //Div 2.0
    if (selectValue21 == "none" && selectValue22 == "none"){
        v2 = v2*0;
    }
    else if (selectValue21 == "none" && selectValue22 == "natural"){
        v2 = v2*0;
    }
    else if (selectValue21 == "none" && selectValue22 == "rojo"){
        v2 = v2*0;
    }
    else if (selectValue21 == "none" && selectValue22 == "amarillo"){
        v2 = v2*0;
    }
    else if (selectValue21 == "none" && selectValue22 == "negro"){
        v2= v2*0;
    }
    /// 2.1 Div
    else if (selectValue21 == "4x10x20" && selectValue22 == "none"){
        v2 = v2*0;
    }
    else if (selectValue21 == "4x10x20" && selectValue22 == "natural"){
        v2 = v2*22.10;
    }
    else if(selectValue21 == "4x10x20" && selectValue22 == "rojo"){
        v2 = v2*25.10;
    }
    else if(selectValue21 == "4x10x20" && selectValue22 == "amarillo"){
        v2= v2*24.50;
    }
    else if(selectValue21 == "4x10x20" && selectValue22 == "negro"){
        v2 = v2*25.80;
    }
    /// 2.2 Div
    else if (selectValue21 == "6x10x20" && selectValue22 == "none"){
        v2 = v2*0;
    }
    else if (selectValue21 == "6x10x20" && selectValue22 == "natural"){
        v2 = v2*25.70;
    }
    else if(selectValue21 == "6x10x20" && selectValue22 == "rojo"){
        v2 = v2*30.20;
    }
    else if(selectValue21 == "6x10x20" && selectValue22 == "amarillo"){
        v2= v2*29.20;
    }
    else if(selectValue21 == "6x10x20" && selectValue22 == "negro"){
        v2 = v2*32;
    }
    /// 1.3 Div
    else if (selectValue21 == "8x10x20" && selectValue22 == "none"){
        v2 = v2*0;
    }
    else if (selectValue21 == "8x10x20" && selectValue22 == "natural"){
        v2 = v2*29.70;
    }
    else if(selectValue21 == "8x10x20" && selectValue22 == "rojo"){
        v2 = v2*35.70;
    }
    else if(selectValue21 == "8x10x20" && selectValue22 == "amarillo"){
        v2= v2*34.40;
    }
    else if(selectValue21 == "8x10x20" && selectValue22 == "negro"){
        v2 = v2*36.30;
    }
    ///Tercer div
    //Div 3.0
    if (selectValue31 == "none" && selectValue32 == "none"){
        v3 = v3*0;
    }
    else if (selectValue31 == "none" && selectValue32 == "natural"){
        v3 = v3*0;
    }
    else if (selectValue31 == "none" && selectValue32 == "rojo"){
        v3 = v3*0;
    }
    else if (selectValue31 == "none" && selectValue32 == "amarillo"){
        v3 = v3*0;
    }
    else if (selectValue31 == "none" && selectValue32 == "negro"){
        v3= v3*0;
    }
    /// 3.1 Div
    else if (selectValue31 == "4x10x20" && selectValue32 == "none"){
        v3 = v3*0;
    }
    else if (selectValue31 == "4x10x20" && selectValue32 == "natural"){
        v3 = v3*22.10;
    }
    else if(selectValue31 == "4x10x20" && selectValue32 == "rojo"){
        v3 = v3*25.10;
    }
    else if(selectValue31 == "4x10x20" && selectValue32 == "amarillo"){
        v3= v3*24.50;
    }
    else if(selectValue31 == "4x10x20" && selectValue32 == "negro"){
        v3 = v3*25.80;
    }
    /// 3.2 Div
    else if (selectValue31 == "6x10x20" && selectValue32 == "none"){
        v3 = v3*0;
    }
    else if (selectValue31 == "6x10x20" && selectValue32 == "natural"){
        v3 = v3*25.70;
    }
    else if(selectValue31 == "6x10x20" && selectValue32 == "rojo"){
        v3 = v3*30.20;
    }
    else if(selectValue31 == "6x10x20" && selectValue32 == "amarillo"){
        v3= v3*29.20;
    }
    else if(selectValue31 == "6x10x20" && selectValue32 == "negro"){
        v3 = v3*32;
    }
    /// 3.3 Div
    else if (selectValue31 == "8x10x20" && selectValue32 == "none"){
        v3 = v3*0;
    }
    else if (selectValue31 == "8x10x20" && selectValue32 == "natural"){
        v3 = v3*29.70;
    }
    else if(selectValue31 == "8x10x20" && selectValue32 == "rojo"){
        v3 = v3*35.70;
    }
    else if(selectValue31 == "8x10x20" && selectValue32 == "amarillo"){
        v3= v3*34.40;
    }
    else if(selectValue31 == "8x10x20" && selectValue32 == "negro"){
        v3 = v3*36.30;
    }
    ///Cuarto Div 
    //Div 4.0
    if (selectValue41 == "none" && selectValue42 == "none"){
        v4 = v4*0;
    }
    else if (selectValue41 == "none" && selectValue42 == "natural"){
        v4 = v4*0;
    }
    else if (selectValue41 == "none" && selectValue42 == "rojo"){
        v4 = v4*0;
    }
    else if (selectValue41 == "none" && selectValue42 == "amarillo"){
        v4 = v4*0;
    }
    else if (selectValue41 == "none" && selectValue42 == "negro"){
        v4= v4*0;
    }
    /// 4.1 Div
    else if (selectValue41 == "4x10x20" && selectValue42 == "none"){
        v4 = v4*0;
    }
    else if (selectValue41 == "4x10x20" && selectValue42 == "natural"){
        v4 = v4*22.10;
    }
    else if(selectValue41 == "4x10x20" && selectValue42 == "rojo"){
        v4 = v4*25.10;
    }
    else if(selectValue41 == "4x10x20" && selectValue42 == "amarillo"){
        v4= v4*24.50;
    }
    else if(selectValue41 == "4x10x20" && selectValue42 == "negro"){
        v4 = v4*25.80;
    }
    /// 4.2 Div
    else if (selectValue41 == "6x10x20" && selectValue42 == "none"){
        v4= v4*0;
    }
    else if (selectValue41 == "6x10x20" && selectValue42 == "natural"){
        v4 = v4*25.70;
    }
    else if(selectValue41 == "6x10x20" && selectValue42 == "rojo"){
        v4 = v4*30.20;
    }
    else if(selectValue41 == "6x10x20" && selectValue42 == "amarillo"){
        v4= v4*29.20;
    }
    else if(selectValue41 == "6x10x20" && selectValue42 == "negro"){
        v4 = v4*32;
    }
    /// 4.3 Div
    else if (selectValue41 == "8x10x20" && selectValue42 == "none"){
        v4 = v4*0;
    }
    else if (selectValue41 == "8x10x20" && selectValue42 == "natural"){
        v4 = v4*29.70;
    }
    else if(selectValue41 == "8x10x20" && selectValue42 == "rojo"){
        v4 = v4*35.70;
    }
    else if(selectValue41 == "8x10x20" && selectValue42 == "amarillo"){
        v4= v4*34.40;
    }
    else if(selectValue41 == "8x10x20" && selectValue42 == "negro"){
        v4 = v4*36.30;
    }

    ///Quinto Div
    //Div 5.0
    if (selectValue51 == "none" && selectValue52 == "none"){
        v5 = v5*0;
    }
    else if (selectValue51 == "none" && selectValue52 == "natural"){
        v5 = v5*0;
    }
    else if (selectValue51 == "none" && selectValue52 == "rojo"){
        v5 = v5*0;
    }
    else if (selectValue51 == "none" && selectValue52 == "amarillo"){
        v5 = v5*0;
    }
    else if (selectValue51 == "none" && selectValue52 == "negro"){
        v5= v5*0;
    }
    /// 5.1 Div
    else if (selectValue51 == "4x10x20" && selectValue52 == "none"){
        v5 = v5*0;
    }
    else if (selectValue51 == "4x10x20" && selectValue52 == "natural"){
        v5 = v5*22.10;
    }
    else if(selectValue51 == "4x10x20" && selectValue52 == "rojo"){
        v5 = v5*25.10;
    }
    else if(selectValue51 == "4x10x20" && selectValue52 == "amarillo"){
        v5= v5*24.50;
    }
    else if(selectValue51 == "4x10x20" && selectValue52 == "negro"){
        v5 = v5*25.80;
    }
    /// 5.2 Div
    else if (selectValue51 == "6x10x20" && selectValue52 == "none"){
        v5 = v5*0;
    }
    else if (selectValue51 == "6x10x20" && selectValue52 == "natural"){
        v5 = v5*25.70;
    }
    else if(selectValue51 == "6x10x20" && selectValue52 == "rojo"){
        v5 = v5*30.20;
    }
    else if(selectValue51 == "6x10x20" && selectValue52 == "amarillo"){
        v5= v5*29.20;
    }
    else if(selectValue51 == "6x10x20" && selectValue52 == "negro"){
        v5 = v5*32;
    }
    /// 5.3 Div
    else if (selectValue51 == "8x10x20" && selectValue52 == "none"){
        v5 = v5*0;
    }
    else if (selectValue51 == "8x10x20" && selectValue52 == "natural"){
        v5 = v5*29.70;
    }
    else if(selectValue51 == "8x10x20" && selectValue52 == "rojo"){
        v5 = v5*35.70;
    }
    else if(selectValue51 == "8x10x20" && selectValue52 == "amarillo"){
        v5= v5*34.40;
    }
    else if(selectValue51 == "8x10x20" && selectValue52 == "negro"){
        v5 = v5*36.30;
    }
    //Sexto Div
    //Div 6.0
    if (selectValue61 == "none" && selectValue62 == "none"){
        v6 = v6*0;
    }
    else if (selectValue61 == "none" && selectValue62 == "natural"){
        v6 = v6*0;
    }
    else if (selectValue61 == "none" && selectValue62 == "rojo"){
        v6 = v6*0;
    }
    else if (selectValue61 == "none" && selectValue62 == "amarillo"){
        v6 = v6*0;
    }
    else if (selectValue61 == "none" && selectValue62 == "negro"){
        v6= v6*0;
    }
    /// 6.1 Div
    else if (selectValue61 == "4x10x20" && selectValue62 == "none"){
        v6 = v6*0;
    }
    else if (selectValue61 == "4x10x20" && selectValue62 == "natural"){
        v6 = v6*22.10;
    }
    else if(selectValue61 == "4x10x20" && selectValue62 == "rojo"){
        v6 = v6*25.10;
    }
    else if(selectValue61 == "4x10x20" && selectValue62 == "amarillo"){
        v6= v6*24.50;
    }
    else if(selectValue61 == "4x10x20" && selectValue62 == "negro"){
        v6 = v6*25.80;
    }
    /// 6.2 Div
    else if (selectValue61 == "6x10x20" && selectValue62 == "none"){
        v6 = v6*0;
    }
    else if (selectValue61 == "6x10x20" && selectValue62 == "natural"){
        v6 = v6*25.70;
    }
    else if(selectValue61 == "6x10x20" && selectValue62 == "rojo"){
        v6 = v6*30.20;
    }
    else if(selectValue61 == "6x10x20" && selectValue62 == "amarillo"){
        v6= v6*29.20;
    }
    else if(selectValue61 == "6x10x20" && selectValue62 == "negro"){
        v6 = v6*32;
    }
    /// 6.3 Div
    else if (selectValue61 == "8x10x20" && selectValue62 == "none"){
        v6 = v6*0;
    }
    else if (selectValue61 == "8x10x20" && selectValue62 == "natural"){
        v6 = v6*29.70;
    }
    else if(selectValue61 == "8x10x20" && selectValue62 == "rojo"){
        v6 = v6*35.70;
    }
    else if(selectValue61 == "8x10x20" && selectValue62 == "amarillo"){
        v6= v6*34.40;
    }
    else if(selectValue61 == "8x10x20" && selectValue62 == "negro"){
        v6 = v6*36.30;
    }
    // Septimo Div
    //Div 7.0
    if (selectValue71 == "none" && selectValue72 == "none"){
        v7 = v7*0;
    }
    else if (selectValue71 == "none" && selectValue72 == "natural"){
        v7 = v7*0;
    }
    else if (selectValue71 == "none" && selectValue72 == "rojo"){
        v7 = v7*0;
    }
    else if (selectValue71 == "none" && selectValue72 == "amarillo"){
        v7 = v7*0;
    }
    else if (selectValue71 == "none" && selectValue72 == "negro"){
        v7= v7*0;
    }
    /// 7.1 Div
    else if (selectValue71 == "4x10x20" && selectValue72 == "none"){
        v7 = v7*0;
    }
    else if (selectValue71 == "4x10x20" && selectValue72 == "natural"){
        v7 = v7*22.10;
    }
    else if(selectValue71 == "4x10x20" && selectValue72 == "rojo"){
        v7 = v7*25.10;
    }
    else if(selectValue71 == "4x10x20" && selectValue72 == "amarillo"){
        v7= v7*24.50;
    }
    else if(selectValue71 == "4x10x20" && selectValue72 == "negro"){
        v7 = v7*25.80;
    }
    /// 7.2 Div
    else if (selectValue71 == "6x10x20" && selectValue72 == "none"){
        v7 = v7*0;
    }
    else if (selectValue71 == "6x10x20" && selectValue72 == "natural"){
        v7 = v7*25.70;
    }
    else if(selectValue71 == "6x10x20" && selectValue72 == "rojo"){
        v7 = v7*30.20;
    }
    else if(selectValue71 == "6x10x20" && selectValue72 == "amarillo"){
        v7= v7*29.20;
    }
    else if(selectValue71 == "6x10x20" && selectValue72 == "negro"){
        v7 = v7*32;
    }
    /// 7.3 Div
    else if (selectValue71 == "8x10x20" && selectValue72 == "none"){
        v7 = v7*0;
    }
    else if (selectValue71 == "8x10x20" && selectValue72 == "natural"){
        v7 = v7*29.70;
    }
    else if(selectValue71 == "8x10x20" && selectValue72 == "rojo"){
        v7 = v7*35.70;
    }
    else if(selectValue71 == "8x10x20" && selectValue72 == "amarillo"){
        v7= v7*34.40;
    }
    else if(selectValue71 == "8x10x20" && selectValue72 == "negro"){
        v7 = v7*36.30;
    }
    //Octavo Div
    //Div 8.0
    if (selectValue81 == "none" && selectValue82 == "none"){
        v8 = v8*0;
    }
    else if (selectValue81 == "none" && selectValue82 == "natural"){
        v8 = v8*0;
    }
    else if (selectValue81 == "none" && selectValue82 == "rojo"){
        v8 = v8*0;
    }
    else if (selectValue81 == "none" && selectValue82 == "amarillo"){
        v8 = v8*0;
    }
    else if (selectValue81 == "none" && selectValue82 == "negro"){
        v8= v8*0;
    }
    /// 8.1 Div
    else if (selectValue81 == "4x10x20" && selectValue82 == "none"){
        v8 = v8*0;
    }
    else if (selectValue81 == "4x10x20" && selectValue82 == "natural"){
        v8 = v8*22.10;
    }
    else if(selectValue81 == "4x10x20" && selectValue82 == "rojo"){
        v8 = v8*25.10;
    }
    else if(selectValue81 == "4x10x20" && selectValue82 == "amarillo"){
        v8= v8*24.50;
    }
    else if(selectValue81 == "4x10x20" && selectValue82 == "negro"){
        v8 = v8*25.80;
    }
    /// 8.2 Div
    else if (selectValue81 == "6x10x20" && selectValue82 == "none"){
        v8 = v8*0;
    }
    else if (selectValue81 == "6x10x20" && selectValue82 == "natural"){
        v8 = v8*25.70;
    }
    else if(selectValue81 == "6x10x20" && selectValue82 == "rojo"){
        v8 = v8*30.20;
    }
    else if(selectValue81 == "6x10x20" && selectValue82 == "amarillo"){
        v8= v8*29.20;
    }
    else if(selectValue81 == "6x10x20" && selectValue82 == "negro"){
        v8 = v8*32;
    }
    /// 8.3 Div
    else if (selectValue81 == "8x10x20" && selectValue82 == "none"){
        v8= v8*0;
    }
    else if (selectValue81 == "8x10x20" && selectValue82 == "natural"){
        v8 = v8*29.70;
    }
    else if(selectValue81 == "8x10x20" && selectValue82 == "rojo"){
        v8 = v8*35.70;
    }
    else if(selectValue81 == "8x10x20" && selectValue82 == "amarillo"){
        v8= v8*34.40;
    }
    else if(selectValue81 == "8x10x20" && selectValue82 == "negro"){
        v8 = v8*36.30;
    }
    //Div numero 9
    //Div 9.0
    if (selectValue91 == "none" && selectValue92 == "none"){
        v9 = v9*0;
    }
    else if (selectValue91 == "none" && selectValue92 == "natural"){
        v9 = v9*0;
    }
    else if (selectValue91 == "none" && selectValue92 == "rojo"){
        v9 = v9*0;
    }
    else if (selectValue91 == "none" && selectValue92 == "amarillo"){
        v9 = v9*0;
    }
    else if (selectValue91 == "none" && selectValue92 == "negro"){
        v9= v9*0;
    }
    /// 9.1 Div
    else if (selectValue91 == "4x10x20" && selectValue92 == "none"){
        v9 = v9*0;
    }
    else if (selectValue91 == "4x10x20" && selectValue92 == "natural"){
        v9 = v9*22.10;
    }
    else if(selectValue91 == "4x10x20" && selectValue92 == "rojo"){
        v9 = v9*25.10;
    }
    else if(selectValue91 == "4x10x20" && selectValue92 == "amarillo"){
        v9= v9*24.50;
    }
    else if(selectValue91 == "4x10x20" && selectValue92 == "negro"){
        v9 = v9*25.80;
    }
    /// 9.2 Div
    else if (selectValue91 == "6x10x20" && selectValue92 == "none"){
        v9 = v9*0;
    }
    else if (selectValue91 == "6x10x20" && selectValue92 == "natural"){
        v9= v9*25.70;
    }
    else if(selectValue91 == "6x10x20" && selectValue92 == "rojo"){
        v9 = v9*30.20;
    }
    else if(selectValue91 == "6x10x20" && selectValue92 == "amarillo"){
        v9= v9*29.20;
    }
    else if(selectValue91 == "6x10x20" && selectValue92 == "negro"){
        v9 = v9*32;
    }
    /// 9.3 Div
    else if (selectValue91 == "8x10x20" && selectValue92 == "none"){
        v9= v9*0;
    }
    else if (selectValue91 == "8x10x20" && selectValue92 == "natural"){
        v9 = v9*29.70;
    }
    else if(selectValue91 == "8x10x20" && selectValue92 == "rojo"){
        v9 = v9*35.70;
    }
    else if(selectValue91 == "8x10x20" && selectValue92 == "amarillo"){
        v9= v9*34.40;
    }
    else if(selectValue91 == "8x10x20" && selectValue92 == "negro"){
        v9 = v9*36.30;
    }
    ////Decimo Div
    //Div 10.0
    if (selectValue101 == "none" && selectValue102 == "none"){
        v10 = v10*0;
    }
    else if (selectValue101 == "none" && selectValue102 == "natural"){
        v10= v10*0;
    }
    else if (selectValue101 == "none" && selectValue102 == "rojo"){
        v10 = v10*0;
    }
    else if (selectValue101 == "none" && selectValue102 == "amarillo"){
        v10 = v10*0;
    }
    else if (selectValue101 == "none" && selectValue102 == "negro"){
        v10= v10*0;
    }
    /// 10.1 Div
    else if (selectValue101 == "4x10x20" && selectValue102 == "none"){
        v10 = v10*0;
    }
    else if (selectValue101 == "4x10x20" && selectValue102 == "natural"){
        v10 = v10*22.10;
    }
    else if(selectValue101 == "4x10x20" && selectValue102 == "rojo"){
        v10 = v10*25.10;
    }
    else if(selectValue101 == "4x10x20" && selectValue102 == "amarillo"){
        v10= v10*24.50;
    }
    else if(selectValue101 == "4x10x20" && selectValue102 == "negro"){
        v10 = v10*25.80;
    }
    /// 10.2 Div
    else if (selectValue101 == "6x10x20" && selectValue102 == "none"){
        v10 = v10*0;
    }
    else if (selectValue101 == "6x10x20" && selectValue102 == "natural"){
        v10= v10*25.70;
    }
    else if(selectValue101 == "6x10x20" && selectValue102 == "rojo"){
        v10 = v10*30.20;
    }
    else if(selectValue101 == "6x10x20" && selectValue102 == "amarillo"){
        v10= v10*29.20;
    }
    else if(selectValue101 == "6x10x20" && selectValue102 == "negro"){
        v10 = v10*32;
    }
    /// 10.3 Div
    else if (selectValue101 == "8x10x20" && selectValue102 == "none"){
        v10= v10*0;
    }
    else if (selectValue101 == "8x10x20" && selectValue102 == "natural"){
        v10 = v10*29.70;
    }
    else if(selectValue101 == "8x10x20" && selectValue102 == "rojo"){
        v10 = v10*35.70;
    }
    else if(selectValue101 == "8x10x20" && selectValue102 == "amarillo"){
        v10= v10*34.40;
    }
    else if(selectValue101 == "8x10x20" && selectValue102 == "negro"){
        v10 = v10*36.30;
    }
    ////onceavo div
    //Div 11.0
    if (selectValue111 == "none" && selectValue112 == "none"){
        v11 = v11*0;
    }
    else if (selectValue111 == "none" && selectValue112 == "natural"){
        v11= v11*0;
    }
    else if (selectValue111 == "none" && selectValue112 == "rojo"){
        v11 = v11*0;
    }
    else if (selectValue111 == "none" && selectValue112 == "amarillo"){
        v11 = v11*0;
    }
    else if (selectValue111 == "none" && selectValue112 == "negro"){
        v11= v11*0;
    }
    /// 11.1 Div
    else if (selectValue111 == "4x10x20" && selectValue112 == "none"){
        v11 = v11*0;
    }
    else if (selectValue111 == "4x10x20" && selectValue112 == "natural"){
        v11 = v11*22.10;
    }
    else if(selectValue111 == "4x10x20" && selectValue112 == "rojo"){
        v11 = v11*25.10;
    }
    else if(selectValue111 == "4x10x20" && selectValue112 == "amarillo"){
        v11= v11*24.50;
    }
    else if(selectValue111 == "4x10x20" && selectValue112 == "negro"){
        v11 = v11*25.80;
    }
    ///11.2 Div
    else if (selectValue111 == "6x10x20" && selectValue112 == "none"){
        v11 = v11*0;
    }
    else if (selectValue111 == "6x10x20" && selectValue112 == "natural"){
        v11= v11*25.70;
    }
    else if(selectValue111 == "6x10x20" && selectValue112 == "rojo"){
        v11 = v11*30.20;
    }
    else if(selectValue111 == "6x10x20" && selectValue112 == "amarillo"){
        v11= v11*29.20;
    }
    else if(selectValue111 == "6x10x20" && selectValue112 == "negro"){
        v11 = v11*32;
    }
    /// 11.3 Div
    else if (selectValue111 == "8x10x20" && selectValue112 == "none"){
        v11= v11*0;
    }
    else if (selectValue111 == "8x10x20" && selectValue112 == "natural"){
        v11 = v11*29.70;
    }
    else if(selectValue111 == "8x10x20" && selectValue112 == "rojo"){
        v11 = v11*35.70;
    }
    else if(selectValue111 == "8x10x20" && selectValue112 == "amarillo"){
        v11= v11*34.40;
    }
    else if(selectValue111 == "8x10x20" && selectValue112 == "negro"){
        v11 = v11*36.30;
    }
    ///Doceavo y ultimooo
    
    //Div 12.0
    if (selectValue121 == "none" && selectValue122 == "none"){
        v12 = v12*0;
    }
    else if (selectValue121 == "none" && selectValue122 == "natural"){
        v12= v12*0;
    }
    else if (selectValue121 == "none" && selectValue122 == "rojo"){
        v12 = v12*0;
    }
    else if (selectValue121 == "none" && selectValue122 == "amarillo"){
        v12 = v12*0;
    }
    else if (selectValue121 == "none" && selectValue122 == "negro"){
        v12= v12*0;
    }
    /// 12.1 Div
    else if (selectValue121 == "4x10x20" && selectValue122 == "none"){
        v12 = v12*0;
    }
    else if (selectValue121 == "4x10x20" && selectValue122 == "natural"){
        v12 = v12*22.10;
    }
    else if(selectValue121 == "4x10x20" && selectValue122 == "rojo"){
        v12 = v12*25.10;
    }
    else if(selectValue121 == "4x10x20" && selectValue122 == "amarillo"){
        v12= v12*24.50;
    }
    else if(selectValue121 == "4x10x20" && selectValue122 == "negro"){
        v12 = v12*25.80;
    }
    ///12.2 Div
    else if (selectValue121 == "6x10x20" && selectValue122 == "none"){
        v12 = v12*0;
    }
    else if (selectValue121 == "6x10x20" && selectValue122 == "natural"){
        v12= v12*25.70;
    }
    else if(selectValue121 == "6x10x20" && selectValue122 == "rojo"){
        v12 = v12*30.20;
    }
    else if(selectValue121 == "6x10x20" && selectValue122 == "amarillo"){
        v12= v12*29.20;
    }
    else if(selectValue121 == "6x10x20" && selectValue122 == "negro"){
        v12 = v12*32;
    }
    /// 12.3 Div
    else if (selectValue121 == "8x10x20" && selectValue122 == "none"){
        v12= v12*0;
    }
    else if (selectValue121 == "8x10x20" && selectValue122 == "natural"){
        v12 = v12*29.70;
    }
    else if(selectValue121 == "8x10x20" && selectValue122 == "rojo"){
        v12 = v12*35.70;
    }
    else if(selectValue121 == "8x10x20" && selectValue122 == "amarillo"){
        v12= v12*34.40;
    }
    else if(selectValue121 == "8x10x20" && selectValue122 == "negro"){
        v12 = v12*36.30;
    }




    



    
    
    
    document.getElementById('nombr').innerHTML = persona;
    document.getElementById('result').innerHTML = (v1+v2+v3+v4+v5+v6+v7+v8+v9+v10+v11+v12);
    document.getElementById('unit').innerHTML = "soles";    
}