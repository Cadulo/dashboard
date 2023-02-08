let runScripts=()=>{
    chart_bars=document.getElementById("chart-bars")
    console.log( chart_bars )
    icons=document.getElementsByTagName( "i" )
    console.log(icons)
    cards=document.getElementsByClassName("card")
    console.log(cards)
}

let modifyText=()=>{
    listOfP = document.getElementsByTagName("p")
    let elementP=listOfP[3]
    elementP.innerHTML='Dinero actual'
    listOfH4 = document.getElementsByTagName("h4")
    let elementH4=listOfH4[0]
    elementH4.innerHTML='$301k'
    console.log(elementP)
    console.log(elementH4)
}
runScripts()
modifyText()