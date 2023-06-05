let file = "http://localhost:8080/phone-service/company/1"
fetch (file)
.then(x => x.text())
.then(y => document.getElementById("demo").innerHTML = y);