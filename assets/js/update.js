let runScripts=()=>{
  chart_bars=document.getElementById("chart-bars")
  icons=document.getElementsByTagName( "i" )
  cards=document.getElementsByClassName("card")
}

let modifyText=()=>{
  listOfP = document.getElementsByTagName("p")
  let elementP=listOfP[3]
  elementP.innerHTML='Dinero actual'
  listOfH4 = document.getElementsByTagName("h4")
  let elementH4=listOfH4[0]
  elementH4.innerHTML='$301k'
}

let updateData=() =>{
  let data = [{
      title: 'Usuarios actuales',
      value: '3,200'
    },
    {
      title: 'Nuevos clientes',
      value: '4,215'
    },
    {
      title: 'Ventas',
      value: '$121,520'
    }];  
  let [ users, clients, sales ] = data;

  let { title: title_users , value: value_users } = users;
  let { title: title_clients , value: value_clients } = clients;
  let { title: title_sales , value: value_sales } = sales;

  let message_users = `<p class="text-sm mb-0 text-capitalize">${title_users}</p><h4 class="mb-0">${value_users}</h4>`;
  let message_clients = `<p class="text-sm mb-0 text-capitalize">${title_clients}</p><h4 class="mb-0">${value_clients}</h4>`;
  let message_sales = `<p class="text-sm mb-0 text-capitalize">${title_sales}</p><h4 class="mb-0">${value_sales}</h4>`;
  
  let listOfElements = document.getElementsByClassName('text-end pt-1')
  let [ , second, third, fourth ] = listOfElements;

  second.innerHTML = message_users;
  third.innerHTML = message_clients;
  fourth.innerHTML = message_sales;
}

let updateChanges=() =>{
  let cambios = [
      {
        valor_previo: 250,
        valor_actual: 301,
        mensaje_tiempo: 'que la semana anterior'
      },
      {
        valor_previo: 3510,
        valor_actual: 3200,
        mensaje_tiempo: 'que la semana anterior'
      },
      {
        valor_previo: 3920,
        valor_actual: 4215,
        mensaje_tiempo: 'que ayer'
      },
      {
        valor_previo: 110200,
        valor_actual: 121520,
        mensaje_tiempo: 'que ayer'
      }
    ]
  
  let [cambio1,cambio2,cambio3,cambio4] = cambios
  let {valor_previo:valor_previo1 , valor_actual:valor_actual1, mensaje_tiempo: mensaje_tiempo1} =cambio1
  let {valor_previo:valor_previo2 , valor_actual:valor_actual2, mensaje_tiempo: mensaje_tiempo2} =cambio2
  let {valor_previo:valor_previo3 , valor_actual:valor_actual3, mensaje_tiempo: mensaje_tiempo3} =cambio3
  let {valor_previo:valor_previo4 , valor_actual:valor_actual4, mensaje_tiempo: mensaje_tiempo4} =cambio4
  
  let porcentaje_de_cambio = (valor_actual,valor_previo) => {return (valor_actual - valor_previo)*100/valor_previo}
  
  let clase_cambio= (porcentaje) => {
      let clase = porcentaje > 0? 'text-success':'text-danger';
      return clase;
  }
  let porcentaje1=porcentaje_de_cambio(valor_actual1,valor_previo1).toFixed(1)
  let porcentaje2=porcentaje_de_cambio(valor_actual2,valor_previo2).toFixed(1)
  let porcentaje3=porcentaje_de_cambio(valor_actual3,valor_previo3).toFixed(1)
  let porcentaje4=porcentaje_de_cambio(valor_actual4,valor_previo4).toFixed(1)

  let mensaje1= `<p class="mb-0"><span class="text-sm ${clase_cambio(porcentaje1)} font-weight-bolder"> ${porcentaje1}% </span> ${mensaje_tiempo1} </p>`
  let mensaje2= `<p class="mb-0"><span class="text-sm ${clase_cambio(porcentaje2)} font-weight-bolder"> ${porcentaje2}% </span> ${mensaje_tiempo2} </p>`
  let mensaje3= `<p class="mb-0"><span class="text-sm ${clase_cambio(porcentaje3)} font-weight-bolder"> ${porcentaje3}% </span> ${mensaje_tiempo3} </p>`
  let mensaje4= `<p class="mb-0"><span class="text-sm ${clase_cambio(porcentaje4)} font-weight-bolder"> ${porcentaje4}% </span> ${mensaje_tiempo4} </p>`


  let listOFFooters = document.getElementsByClassName("card-footer p-3")
  listOFFooters[0].innerHTML = mensaje1
  listOFFooters[1].innerHTML = mensaje2
  listOFFooters[2].innerHTML = mensaje3
  listOFFooters[3].innerHTML = mensaje4
}

runScripts()
modifyText()
updateData()
updateChanges()