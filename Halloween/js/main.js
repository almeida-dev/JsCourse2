//Generate salutations
//t - top, l - left, c - colour, s - font-size, z - z-index, id - class

function sals(t, l, c, s, z, id){
    var sal = document.getElementsByClassName(id);
    sal[0].style.top = t;
    sal[0].style.left = l;
    sal[0].style.color = c;
    sal[0].style.fontSize = s;
    sal[0].style.zindex = z;
}

sals('5%', '50%', '#FFFFFF', '250px', '20', "GB");
sals('1%', '10%', '#FFFFFF', '150px', '19', "ES");
sals('15%', '30%', '#FFFFFF', '100px', '18', "FR");
sals('35%', '60%', '#FFFFFF', '170px', '17', "IT");
sals('54%', '20%', '#FFFFFF', '170px', '16', "GE");
sals('10%', '55%', '#FFFFFF', '80px', '14', "RU");
sals('27%', '21%', '#FFFFFF', '100px', '13', "KO");
sals('37%', '31%', '#FFFFFF', '65px', '12', "PO");
sals('67%', '51%', '#FFFFFF', '125px', '11', "HI");
sals('47%', '11%', '#FFFFFF', '115px', '10', "HE");
