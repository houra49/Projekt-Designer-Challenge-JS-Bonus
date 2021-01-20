function bonus() {
    console.log("your email is:" + document.getElementById("email").value)
    document.getElementById("challenge").style.border = "1px solid rgb(211, 209, 209)"
    document.getElementById("challenge").style.boxShadow = "rgb(211, 209, 209) 3px 3px 3px 3px"
    document.getElementById("h1").innerHTML = "YOUR EMAIL HAS BEEN CONFIRMED." + "<br>" + "THANKS FOR SUBSCRIBING!" + " "
    document.getElementById("h1").style.fontSize = "30px"
    document.getElementById("p").innerHTML = "Now we just need to confirm your email address.Please click the link in the email we sent you.Thanks!"
    let element = document.getElementById("email")
    element.parentNode.removeChild(element)
    document.getElementById("subscribe").innerHTML = "BACK TO DESIGNERCHALLENGE.COM"
    document.getElementById("subscribe").style.backgroundColor = "#3C30FF"
    document.getElementById("subscribe").style.border = "#3C30FF"
    document.getElementById("subscribe").style.marginLeft = "30%"
}