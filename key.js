
function btn_ch(){
    var btnValue = document.getElementById("nightModeBtn").value;
    if(btnValue=="Black Lit Mode")
    {
        var cl=document.getElementsByClassName("all_key");
        for(let i=0;i<cl.length;i++){
            cl[i].style.animation="border_effect 3s linear infinite";
        }
        document.body.style.backgroundColor="black";
        document.getElementById("up_btn").style.animation="color_anime 3s linear infinite";
        document.getElementById("nightModeBtn").value="Normal Mode";
    }
    else{
        var cl=document.getElementsByClassName("all_key");
        for(let i=0;i<cl.length;i++){
            cl[i].style.animation="none";
        }
        document.body.style.backgroundColor="#fff";
        document.getElementById("up_btn").style.animation="none";
        document.getElementById("nightModeBtn").value="Black Lit Mode"; 
        
    }
}

/*  //Alternative way
function night_mode(){
    var cl=document.getElementsByClassName("all_key");
    for(let i=0;i<cl.length;i++){
        cl[i].style.animation="border_effect 3s linear infinite";
    }
    document.body.style.backgroundColor="black"
    document.getElementById("up_btn").style.animation="color_anime 3s linear infinite";
    document.getElementById("bump1").style.animation="color_anime 3s linear infinite";
    document.getElementById("bump2").style.animation="color_anime 3s linear infinite"; 
}


$(document).ready(function(){
    $("#nightModeBtn").click(function(){
        $("#nightModeBtn").hide();
        $("#DayModeBtn").show();
    });
});
$(document).ready(function(){
    $("#DayModeBtn").click(function(){
        $("#DayModeBtn").hide();
        $("#nightModeBtn").show();
    });
});

function day_mode(){
    var cl=document.getElementsByClassName("all_key");
    for(let i=0;i<cl.length;i++){
        cl[i].style.animation="none";
    }
    document.body.style.backgroundColor="#fff";
    document.getElementById("up_btn").style.animation="none";
    document.getElementById("bump1").style.animation="none";
    document.getElementById("bump2").style.animation="none";
}
*/