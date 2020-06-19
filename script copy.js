var turtle = '🐢';
var field = '🌾';
var food = '🍅';
var field = [];
var m = 10, n = 10;

function make_field(){
    for (let i = 0; i < m; i++){
        field[i] = [];
        for (let j = 0; j < n; j++){
            field[i][j] = field;
        }
    }
}

function field_update(){
    if (pos1 == fpos1 && pos2 == fpos2){
        make_food()
    }
    $( "#field" ).empty();
    for (let i = 0; i < field.length; i++){
        row = field[i].join(' ');
        jQuery("#field").append('<div>'+row+'</div>');
    }
}

function make_food(){
    var fpos1 = random(0, m);
    var fpos2 = random(0, n);

    field[fpos1][fpos2] = food;
}

function random(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

jQuery('document').ready(function(){
    jQuery('#play').on('click', function fieldPrint(){
        make_field();
        field_update();
    });
});