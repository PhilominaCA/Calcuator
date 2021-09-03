var h1 = document.createElement("h1");
h1.innerHTML = "Calculator";
h1.style.color = "brown";
document.body.appendChild(h1);
document.body.appendChild(document.createElement("br"));

var txtnode = document.createElement("input");
txtnode.setAttribute('type', 'text');
txtnode.id = "txtnode";
document.body.appendChild(txtnode);
document.body.appendChild(document.createElement("br"));

var tabparent = document.createElement("table");
var tabro1 = document.createElement("tr");
var button1 = document.createElement("button");
var tabcol1 = document.createElement("td");
button1.innerHTML = "1";
button1.value = "1";
button1.id = "number";
button1.setAttribute("onclick", "showup('1')");
tabcol1.appendChild(button1);
tabro1.appendChild(tabcol1);
var tabcol2 = document.createElement("td");
var button2 = document.createElement("button");
button2.innerHTML = "2";
button2.value = "2";
button2.id = "number";
button2.setAttribute("onclick", "showup('2')");
tabcol2.appendChild(button2);
tabro1.appendChild(tabcol2);

var tabcol3 = document.createElement("td");
var button3 = document.createElement("button");
button3.innerHTML = "3";
button3.value = "3";
button3.id = "number";
button3.setAttribute("onclick", "showup('3')");
tabcol3.appendChild(button3);
tabro1.appendChild(tabcol3);

var tabadd = document.createElement("td");
var buttonadd = document.createElement("button");
buttonadd.innerHTML = "+";
buttonadd.value = "+";
buttonadd.id = "add";
buttonadd.setAttribute("onclick", "showup('+')");
tabadd.appendChild(buttonadd);
tabro1.appendChild(tabadd);

tabparent.appendChild(tabro1);

var tabro2 = document.createElement("tr");
var tabcol4 = document.createElement("td");
var button4 = document.createElement("button");
button4.innerHTML = "4";
button4.value = "4";
button4.id = "number";
button4.setAttribute("onclick", "showup('4')");
tabcol4.appendChild(button4);
tabro2.appendChild(tabcol4);

var tabcol5 = document.createElement("td");
var button5 = document.createElement("button");
button5.innerHTML = "5";
button5.value = "5";
button5.id = "number";
button5.setAttribute("onclick", "showup('5')");
tabcol5.appendChild(button5);
tabro2.appendChild(tabcol5);

var tabcol6 = document.createElement("td");
var button6 = document.createElement("button");
button6.innerHTML = "6";
button6.value = "6";
button6.id = "number";
button6.setAttribute("onclick", "showup('6')");
tabcol6.appendChild(button6);
tabro2.appendChild(tabcol6);

var tabsub = document.createElement("td");
var buttonsub = document.createElement("button");
buttonsub.innerHTML = "-";
buttonsub.value = "-";
buttonsub.id = "sub";
buttonsub.setAttribute("onclick", "showup('-')");
tabsub.appendChild(buttonsub);
tabro2.appendChild(tabsub);

tabparent.appendChild(tabro2);

var tabro3 = document.createElement("tr");
var tabcol7 = document.createElement("td");
var button7 = document.createElement("button");
button7.innerHTML = "7";
button7.value = "7";
button7.id = "number";
button7.setAttribute("onclick", "showup('7')");
tabcol7.appendChild(button7);
tabro3.appendChild(tabcol7);

var tabcol8 = document.createElement("td");
var button8 = document.createElement("button");
button8.innerHTML = "8";
button8.value = "8";
button8.id = "number";
button8.setAttribute("onclick", "showup('8')");
tabcol8.appendChild(button8);
tabro3.appendChild(tabcol8);

var tabcol9 = document.createElement("td");
var button9 = document.createElement("button");
button9.innerHTML = "9";
button9.value = "9";
button9.id = "number";
button9.setAttribute("onclick", "showup('9')");
tabcol9.appendChild(button9);
tabro3.appendChild(tabcol9);

var tabmul = document.createElement("td");
var buttonmul = document.createElement("button");
buttonmul.innerHTML = "*";
buttonmul.value = "*";
buttonmul.id = "mul";
buttonmul.setAttribute("onclick", "showup('*')");
tabmul.appendChild(buttonmul);
tabro3.appendChild(tabmul);

tabparent.appendChild(tabro3);

var tabro4 = document.createElement("tr");
var tabcoldot = document.createElement("td");
var buttodot = document.createElement("button");
buttodot.innerHTML = ".";
buttodot.value = ".";
buttodot.id = "number";
buttodot.setAttribute("onclick", "showup('.')");
tabcoldot.appendChild(buttodot);
tabro4.appendChild(tabcoldot);

var tabcol0 = document.createElement("td");
var butto0 = document.createElement("button");
butto0.innerHTML = "0";
butto0.value = "0";
butto0.id = "number";
butto0.setAttribute("onclick", "showup('0')");
tabcol0.appendChild(butto0);
tabro4.appendChild(tabcol0);

var tabcoleq = document.createElement("td");
var buttoeq = document.createElement("button");
buttoeq.innerHTML = "=";
buttoeq.value = "=";
buttoeq.id = "equal";
buttoeq.setAttribute("onclick", "solve()");
tabcoleq.appendChild(buttoeq);
tabro4.appendChild(tabcoleq);

var tabmod = document.createElement("td");
var buttonmod = document.createElement("button");
buttonmod.innerHTML = "%";
buttonmod.value = "%";
buttonmod.id = "mod";
buttonmod.setAttribute("onclick", "showup('%')");
tabmod.appendChild(buttonmod);
tabro4.appendChild(tabmod);
tabparent.appendChild(tabro4);

var tabro5 = document.createElement("tr");

var clrtab = document.createElement("td");
var clrbutt = document.createElement("button");
clrbutt.innerHTML = "CLR";
clrbutt.value = "CLR";
clrbutt.id = "clr";
clrtab.setAttribute("colspan", "3");
clrtab.setAttribute("onclick", "clearsc()");
clrtab.appendChild(clrbutt);
tabro5.appendChild(clrtab);

var tabcoldiv = document.createElement("td");
var buttodiv = document.createElement("button");
buttodiv.innerHTML = "/";
buttodiv.value = "/";
buttodiv.id = "divv";
buttodiv.setAttribute("onclick", "showup('/')");
tabcoldiv.appendChild(buttodiv);
tabro5.appendChild(tabcoldiv);
tabparent.appendChild(tabro5);

document.body.appendChild(tabparent);

var numberkey = document.createElement("button");

//function abdjdjeueueyehegwhjdwhjdewhjwdhw()
//{}
function showup(val) {
    input.onkeypress = keypresshandle;
    document.getElementById("txtnode").value += val;
}

function solve() {
    let x = document.getElementById("txtnode").value;
    let y = evaluate(x);
    document.getElementById("txtnode").value = y;
}

function evaluate(formula) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.text = "window.a = " + formula + ";";
    console.log(window.a);
    console.log(script);
    document.body.appendChild(script);
    document.body.removeChild(script);
    var r = window.a;
    console.log(window.a);
    return r;
}

function clearsc() {
    document.getElementById("txtnode").value = "";
}
const input = document.querySelector('input');
input.onkeypress = keypresshandle;

function keypresshandle(event) {
    if (event.code[0] != 'D') {
        alert("Only Number keyPress is allowed");
        return false;
    }
}