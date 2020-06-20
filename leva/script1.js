
var turtle = '🐢';
var corn = '🌾';
var food = '🍅';
var field = [];
var m = 10, n = 10;
var pos1 = pos(0, m);
var pos2 = pos(0, n);
var Fpos1 = pos(0, m);
var Fpos2 = pos(0, n)
var nr = Math.round(n/2);
var mr = Math.round(m/2);


function pos(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function food(){
    if (pos1 == Fpos1 && pos2 == Fpos2){
        foodPos();
        field[Fpos1][Fpos2] = food;
    }
}

function field_update(){
    $( "#field" ).empty();
    for (let i = 0; i < field.length; i++){
        row = field[i].join(' ');
        jQuery("#field").append('<div>'+row+'</div>');
    }
}

function field_make(){
    for (let i = 0; i < m; i++){
        field[i] = [];
        for (let j = 0; j < n; j++){
            field[i][j] = corn;
        }
    }
    field[pos1][pos2] = turtle;
    field[Fpos1][Fpos2] = food;
}

//функции движения
//------------------------------------------
function left(){
    if (pos2 == 0){
        field[pos1][pos2]=corn;
        field[pos1][pos2+=nr]=turtle;
    }
    field[pos1][pos2]=corn;
    field[pos1][pos2-=1]=turtle;
}

function right(){
    if (pos2 == n-1){
        field[pos1][pos2]=corn;
        field[pos1][pos2-=nr]=turtle;
    }
    field[pos1][pos2]=corn;
    field[pos1][pos2+=1]=turtle;
}

function up(){
    if (pos1 == 0){
        field[pos1][pos2]=corn;
        field[pos1+=mr][pos2]=turtle;
    }
    field[pos1][pos2]=corn;
    field[pos1-=1][pos2]=turtle;
}

function down(){
    if (pos1 == m-1){
        field[pos1][pos2]=corn;
        field[pos1-=mr][pos2]=turtle;
    }
    field[pos1][pos2]=corn;
    field[pos1+=1][pos2]=turtle;
}
//------------------------------------------
//функции движения

function keys(event){
    switch(event.key){
        case 'ArrowRight':{
            right();
            break;
        }
        case 'ArrowLeft':{
            left();
            break;
        }
        case 'ArrowUp':{
            up();
            break;
        }
        case 'ArrowDown':{
            down();
            break;
        }
    }
}
  
jQuery('document').ready(function(){
    jQuery('#play').on('click', function fieldPrint(){
        turtle = jQuery('#input1').val();
        corn = jQuery('#input2').val();
        pos1 = pos(0, m);
        pos2 = pos(0, n);
        Fpos1 = pos(0, m);
        Fpos2 = pos(0, n);
        field_make();
        field_update();
        
        document.addEventListener("keydown", function move(event) {
            keys(event);
            field_update();
            console.log(pos1, pos2);
        });
        jQuery('#left').on('click',function moveB(){
            left();
            field_update();
        });
        jQuery('#right').on('click',function moveB(){
            right();
            field_update();
        });
        jQuery('#up').on('click',function moveB(){
            up();
            field_update();
        });
        jQuery('#down').on('click',function moveB(){
            down();
            field_update();
        });
    });
});

