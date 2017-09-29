$(document).ready(function(){
    console.log('hello')
    $('form').submit(()=>{
        event.preventDefault();
        var row1 = $('#firstName').val();
        var row2 = $('#lastName').val();
        var row3 = $('#email').val();
        var row4 = $('#contact').val();
        $('tbody').append(
            
            "<tr><td>",row1, "</td><td>", row2,"</td><td>",row3,"</td><td>",row4,"</td></tr>"
            
        );
    });
   
});