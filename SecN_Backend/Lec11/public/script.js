function refreshList(){
    $.get('/todo',function(data){
        $('ul').empty();
        data.map(element=>
            $('ul').append(`<li>${element}</li>`)
        )
    })
}

$('button').on('click',function(){
    let value = $('input').val();
    $.post('/todo',{value});
    refreshList();
})
refreshList();