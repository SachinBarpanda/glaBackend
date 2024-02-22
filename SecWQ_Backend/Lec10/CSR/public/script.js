function refreshList(){
    
    $.get('/todo',function(data){
        $('ul').empty();
        data.map((data)=>{
            $('ul').append(`<li>${data}</li>`)
        })
    })
}

$('button').on('click',function(){
    let val = $('input').val();
    $('input').val('');
    console.log(val);
    $.post('todo',{val})
    refreshList();
})

refreshList();



