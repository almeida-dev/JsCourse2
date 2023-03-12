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

sals('30%', '65%', '#FFFFFF', '110px', '20', "GB");
sals('1%', '10%', '#FFFFFF', '150px', '19', "ES");
sals('35%', '60%', '#FFFFFF', '170px', '17', "IT");
sals('54%', '20%', '#FFFFFF', '170px', '16', "GE");
sals('12%', '55%', '#FFFFFF', '110px', '14', "RU");
sals('27%', '18%', '#FFFFFF', '100px', '13', "KO");
sals('39%', '11%', '#FFFFFF', '125px', '10', "HE");
