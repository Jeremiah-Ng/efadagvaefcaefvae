var array=[];
function submit(){
    
    for(var i=1; i<=4; i++){
        var names=document.getElementById("name_of_the_student_"+i).value;
        if(names!=""){
        array.push(names);
        }
    }
    console.log(array);
    var display=[];
    var array_length=array.length;
    for (var k=0; k<array_length; k++){
    display.push("<h4>NAME - "+array[k]+"</h4>");
    }
    document.getElementById("display_name_with_commas").innerHTML=display;
    var remove=display.join(" ");
    console.log(remove);
    document.getElementById("display_name_without_commas").innerHTML=remove;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline";
}
function sorting(){
    array.sort();
    var display=[];
    var array_length=array.length;
    for (var k=0; k<array_length; k++){
    display.push("<h4>NAME - "+array[k]+"</h4>");
    }
    document.getElementById("display_name_with_commas").innerHTML=display;
    var remove=display.join(" ");
    console.log(remove);
    document.getElementById("display_name_without_commas").innerHTML=remove;
    document.getElementById("submit_button").style.display="inline";
    document.getElementById("sort_button").style.display="none";
}