function refreshList(){
    $.get('/todo',function(data){
        $('ol').empty();
        data.map((item)=>{
        $('ol').append(`<li>${item}</li>`) 
        })
    })
}

$('button').on('click',function(){
    let value = $('input').val();
    $('input').val('');
    $.post('/todo',{value});
    refreshList();
})

refreshList();

