$(function() {
    $("#search").click(fetchPosts);
    $(document).on('click','.show-comment',function(ev){
        const butId = ev.target.id;
        //alert("but id: "+butId);
        fetchComments(butId);
    });
});

BASE_URL = "http://jsonplaceholder.typicode.com";

function fetchPosts() {
    let userId = $("#user-id").val();
    if(!userId){
        alert('Invalid input');
        return;
    }

    $.ajax(`${BASE_URL}/posts?userId=${userId}`, {
        "type": "get",
    }).done(parsePosts).fail(failReq);
}

function fetchComments(id) {

    $.ajax(`${BASE_URL}/comments?postId=${id}`, {
        "type": "get",
    }).done(function (data) {
        //console.log(data);
        let list = "<div class='comments'>";
        if(data.length > 0){
            data.map(g => {list += "<div class='comment col col-sm-auto ' id="+g.id+"><h5>"+g.name+"</h5><span class='text-primary'> comment by: "+g.email+"</span><p> "+g.body+"</p></div>"});
        }
        list += "</div><hr/>";
        $("#"+id).append(list);
    }).fail(failReq);
}

function failReq(xhr, error){
    alert(error);
}

function parsePosts(data) {
    //console.log(data);
    // var guestList = "You need to modify this method to display the updated guest list.  Remember to build the entire list before adding it to the DOM.";
    let list = "<div class='posts'>";
    if(data.length > 0){
        data.map(g => {list += "<div class='post col col-lg-9 col-md-9 col-sm-auto' id="+g.id+"><h3>"+g.title+"</h3><p> "+g.body+"</p><button id="+g.id+" class='show-comment btn btn-outline-primary'> comments </button><hr/></div>"});
    }
    list += "</div>";
    $("#main").html(list);

}