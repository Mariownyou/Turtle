var food = '🍅';
var field = [];
var m = 10, n = 10;
var pos1 = random(0, m);
var pos2 = random(0, n);
var fpos1 = random(0, m);
var fpos2 = random(0, n);

function make_field(){
    for (let i = 0; i < m; i++){
        field[i] = [];
        for (let j = 0; j < n; j++){
            field[i][j] = corn;
        }
    }
    field[pos1][pos2] = turtle;
}

function field_update(){
    if (pos1 == fpos1 && pos2 == fpos2){
        make_food();
    }
    $( "#field" ).empty();
    for (let i = 0; i < field.length; i++){
        row = field[i].join(' ');
        jQuery("#field").append(row+'<br>');
    }
}

function make_food(){
    field[fpos1][fpos2] = food;
}

function random(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

jQuery('document').ready(function(){
    jQuery('#play').on('click', function(){
        turtle = jQuery('#input1').val();
        corn = jQuery('#input2').val();
        make_field();
        field_update();
    });
});