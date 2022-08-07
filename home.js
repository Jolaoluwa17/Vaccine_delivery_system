function visible() {
    var x = document.getElementById("box");
    var y = document.getElementById("test");
    var z = document.getElementById("upload-btn");
 // Note: 2 minutes in milliseconds is 120000   
    if (x.style.display === "none" && y.style.display === "none") {
      x.style.display = "block";
      y.style.display = "block";
      setTimeout(function() {
        x.style.display = "none";
        y.style.display = "none";
        document.getElementById("result").innerHTML = "Test Result"
        let a = parseInt( Math.floor(Math.random() * 100));
    document.getElementById("myNumber").innerHTML = "Viral Level: " + a + "%";
    if (a > 0 && a <= 50){
        document.getElementById("vaccine").innerHTML = "Vaccine to be administered: 1";
    }
    else{
        document.getElementById("vaccine").innerHTML = "Vaccine to be administered: 2";
    }
    document.getElementById("administer").innerHTML = "Go Ahead and Administer Vaccine"
    z.style.display = "block";
      },5000
      )
      
    } else {
      x.style.display = "none";
      y.style.display = "none";
    }
  }

// function genradomnumber(){
//     if(){
//     let a = parseInt( Math.floor(Math.random() * 100));
//     document.getElementById("myNumber").innerHTML = "Viral Level: " + a + "%";
//     if (a > 0 && a <= 50){
//         document.getElementById("vaccine").innerHTML = "one vaccine to be administered";
//     }
//     else{
//         document.getElementById("vaccine").innerHTML = "Two vaccines to be administered";
//     }
// }
// }

function defaultDate(){
    // document.getElementById('datePicker').valueAsDate = new Date();
    var today = new Date();
    document.getElementById("date").value = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);
}

function updatedate(){
    var date1 = new Date();
date1.setDate(date1.getDate() + 7);
document.getElementById("updatedate").value = date1.getDate() + '/' + (date1.getMonth() + 1) + '/' + date1.getFullYear();
}