﻿var turtle = '🐢';
var corn = '🌾';
var food = '🍅';
var field = [];
var m = 10, n = 10;
var pos1 = random(0, m);
var pos2 = random(0, n);
var fpos1 = random(0, m);
var fpos2 = random(0, n);
var nr = Math.round(n/2);
var mr = Math.round(m/2);


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

function field_update(f){
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
//------------------------------------------
//функции движения
function left(field){
    if (pos2 == 0){
        field[pos1][pos2]=corn;
        field[pos1][pos2+=nr]=turtle;
    }
    field[pos1][pos2]=corn;
    field[pos1][pos2-=1]=turtle;
}

function right(field){
    if (pos2 == n-1){
        field[pos1][pos2]=corn;
        field[pos1][pos2-=nr]=turtle;
    }
    field[pos1][pos2]=corn;
    field[pos1][pos2+=1]=turtle;
}

function up(field){
    if (pos1 == 0){
        field[pos1][pos2]=corn;
        field[pos1+=mr][pos2]=turtle;
    }
    field[pos1][pos2]=corn;
    field[pos1-=1][pos2]=turtle;
}

function down(field){
    if (pos1 == m-1){
        field[pos1][pos2]=corn;
        field[pos1-=mr][pos2]=turtle;
    }
    field[pos1][pos2]=corn;
    field[pos1+=1][pos2]=turtle;
}
//------------------------------------------
//функции движения

jQuery('document').ready(function(){
    jQuery('#play').on('click', function(){
        turtle = jQuery('#input1').val();// обновляем черепашку
        corn = jQuery('#input2').val();// обновляем поле
        make_field(field); // заполняем массив
        set_pos(field); // расставляем юниты
        field_update(field); // выводим массив
        
    });

    $('#up').on('click', function(){
        up(field);
        field_update(field);
    });
    $('#down').on('click', function(){
        down(field);
        field_update(field);
    });
    $('#left').on('click', function(){
        left(field);
        field_update(field);
    });
    $('#right').on('click', function(){
        right(field);
        field_update(field);
    });
});