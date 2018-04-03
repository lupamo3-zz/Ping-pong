//business logic


function pingPong (number){
   var numbersToBePingponged = [];
   for (var index = 1; index <= number; index+=1){
       if(index % 15 === 0){
           numbersToBePingponged.push("pingpong");
       }
       else if(index % 5 === 0){
           numbersToBePingponged.push("pong");
       }
       else if(index % 3 === 0){
           numbersToBePingponged.push("ping");
       }
       else{
           numbersToBePingponged.push(index);
       }
   }
   return numbersToBePingponged
}


//user interface logic

$(document).ready(function(){
  $("form#pingpong").submit(function(event){
     event.preventDefault();
     $('ul#output').empty();
     var number = parseInt($("input#number").val());
     var numbersToBePingponged=pingPong(number);
     for (var i=0; i<number; i+=1){
        $("ul#output").append('<li>' + numbersToBePingponged[i] + "</li>");
    }
});
});
