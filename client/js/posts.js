/* Function used to update user's page on POST-requests */
function updateContent(posts){
    //jQuery function to set the innerHTML of the div with id = 'postsContent' to empty
    $('#postsContent').html('');
    var lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
    //loop over each post item in the posts array
    posts.forEach(function(post){
        //jQuery function to append to the innterHTML of the div with id = 'postsContent'
        $('#postsContent').append(
            '<nav class="navbar navbar-default" style="width:490px; margin:20px auto;">' +
            '<div style="margin:20px;" data-postId="' + post._id + '">' +
            '<img src="' + post.image + '"/>' +
            '<div class="container-fluid" style="padding:0px;margin:10px 0 0 0;">' +
            '<p>' + lorem + '</p></div>' + //post.comment
            '<ul class="nav navbar-nav navbar-right">' +
            	'<li><p class="navbar-text">Like Count: ' + // style="padding:0px 10px;margin:0px 0px;"
            		'<span id ="like' + post._id + '">' + post.likeCount + '</span></p></li>' + 
                '<li><button onclick="likeClick(\'' + post._id + '\');" class="btn btn-default navbar-btn">Like</button></li>' +
            '</ul></div></nav>'
        );
    });
}
//onLoad function, to be executed when page is completed loaded by browser
function onload(){
    //start a promise chain
    Promise.resolve()
    .then(function(){
        //jQuery function to request all the posts from the server
        //the 'return' is required. Otherwise, the subsequent then will not wait for this to complete
        return $.post('postsContent');
    })
    //when the server responds, we'll execute this code
    .then(function(posts){
    	return updateContent(posts);
    })
    .catch(function(err){
        //always include a catch for exceptions
        console.log(err);
    });
} // onload()

function onAddPost(){
    //start a promise chain
    Promise.resolve()
    .then(function(){
        //jQuery function to request all the posts from the server
        //the 'return' is required. Otherwise, the subsequent then will not wait for this to complete
        return $.post('addPost');
    })
    //when the server responds, we'll execute this code
    .then(function(posts){
    	return updateContent(posts);
    })
    .catch(function(err){
        //always include a catch for exceptions
        console.log(err);
    });
} // onAddPost()

function likeClick()
{
	
}