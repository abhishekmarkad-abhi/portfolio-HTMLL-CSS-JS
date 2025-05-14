
function BookClick(){
    document.getElementById("btnQuickBooking").style.display = "none";
    document.getElementById("summaryContainer").style.display = "block";

    document.getElementById("lblMovie") .textContent = document.getElementById("lstMovies").value;
    document.getElementById("lblDate")  .textContent = document.getElementById("lstDate").value;
    document.getElementById("lblCinema").textContent = document.getElementById("lstCinema").value;
    document.getElementById("lblTime")  .textContent = document.getElementById("lstTime").value;

    poster = document.getElementById("imgPoster");
    movieName = document.getElementById("lstMovies").value;

    if(movieName=="ODELA-2") {
        poster.src = "../public/images/odela2.jpg";
    } else {
        poster.src = "../public/images/sinners.jpg";
    }

}

function ModifyClick(){
    document.getElementById("title").innerHTML = "Modify Booking";
    document.getElementById("btnBook").innerHTML = "Save";
    document.getElementById("btnBook").className = "btn btn-success";
}   