$(document).ready(function(){
    
manageData();

    /* manage data list */
    function manageData() {
        $.ajax({
            dataType: 'json',
            url: 'http://localhost/Todo-list-angularjs/api/getData.php'
        }).done(function(x){
            manageRow(x.tasks);
        });
    }
    
    
    /* Add new Item table row */
    function manageRow(tasks) {
        var	rows = '';
        $.each(tasks, function(key, value) {
            rows = rows + '<ul class="frm"><li>'+value.description+'</li>   <a href="http://localhost/Todo-list-angularjs/api/delete.php?idtask="+value.idTask+"" } > delete </a></ul>';
        });
        $('#tasks').append(rows);
    }

    /* Create new Item */
    $(".btn_insert").click(function(e){
        e.preventDefault();
        var description = $("#newtodo").val();

        if(newtodo != '' && description != ''){
            $.ajax({
                dataType: 'json',
                type:'GET',
                url: 'http://localhost/Todo-list-angularjs/api/create.php',
                data:{description:description}
            }).done(function(data){
                $("#newtodo").val("");
                $("#tasks").html("");
                manageData();
            });
        }else{
            alert('You are missing title or description.')
        }
    });

    /* Remove Item */
    $("body").on("click",".remove-item",function(){
        var id = $(this).parent("td").data('id');
        var c_obj = $(this).parents("tr");

        $.ajax({
            dataType: 'json',
            type:'GET',
            url: 'api/delete.php',
            data:{id:id}
        }).done(function(data){
            c_obj.remove();
            toastr.success('Item Deleted Successfully.', 'Success Alert', {timeOut: 3000});
        });

    });
    
});



 