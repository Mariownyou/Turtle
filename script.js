var food = '🍅';
var turtle = jQuery('#input1').val();
var corn = jQuery('#input2').val();
var field = [];
var m = 10, n = 10;
var pos1 = random(0, m);
var pos2 = random(0, n);
var fpos1 = random(0, m);
var fpos2 = random(0, n);




maze = [
    ['🌵', '🌾', '🌾', '🌾', '🌾', '🌾', '🌾', '🌾', '🌾', '🌾'],
    ['🌾', '🌾', '🌾', '🌾', '🌾', '🌾', '🌾', '🌾', '🌾', '🌾'],
    ['🌾', '🌾', '🌾', '🌾', '🌾', '🌾', '🌾', '🌾', '🌾', '🌾'],
    ['🌾', '🌾', '🌾', '🌾', '🌾', '🌾', '🌾', '🌾', '🌾', '🌾'],
    ['🌾', '🌾', '🌾', '🌾', '🌾', '🌾', '🌾', '🌾', '🌾', '🌾'],
    ['🌾', '🌾', '🌾', '🌾', '🌾', '🌾', '🌾', '🌾', '🌾', '🌾'],
    ['🌾', '🌾', '🌾', '🌾', '🌾', '🌾', '🌾', '🌾', '🌾', '🌾'],
    ['🌾', '🌾', '🌾', '🌾', '🌾', '🌾', '🌾', '🌾', '🌾', '🌾'],
    ['🌾', '🌾', '🌾', '🌾', '🌾', '🌾', '🌾', '🌾', '🌾', '🌾'],
    ['🌾', '🌾', '🌾', '🌾', '🌾', '🌾', '🌾', '🌾', '🌾', '🌾']
]

function make_field(f){
    for (let i = 0; i < m; i++){
        f[i] = [];
        for (let j = 0; j < n; j++){
            f[i][j] = corn;
        }
    }
    f[pos1][pos2] = turtle;
    f[fpos1][fpos2] = food;
    return f;
}

function field_print(f){
    $( "#field" ).empty();
    for (let i = 0; i < f.length; i++){
        row = f[i].join(' ');
        jQuery("#field").append(row+'<br>');
    }
}

function field_update(f){
    if (pos1 == fpos1 && pos2 == fpos2){
        make_food();
    }
    $( "#field" ).empty();
    for (let i = 0; i < f.length; i++){
        row = f[i].join(' ');
        jQuery("#field").append(row+'<br>');
    }
}

function set_pos(f){
    f[fpos1][fpos2] = food;
    f[pos1][pos2] = turtle;
}

function random(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

jQuery('#play').on('click', function(){
    make_field(field); // заполняем массив
    set_pos(maze); // расставляем юниты
    field_print(maze); // выводим массив
    
});

$('#up').on('click', function(){
    maze[pos1][pos2] = corn;
    maze[pos1-=1][pos2] = turtle;
    field_update(maze);
})