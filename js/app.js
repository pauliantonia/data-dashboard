//BARRA DE NAVEGACIÓN: enlaces y datos.
//guardar los datos en arrays:
var titulos=new Array();
var enlaces=new Array();
//Datos de los submenús
titulos[0]=new Array(
          "2015-I",
          "2015-II",
          "2016-I",
          "2016-II",
          "2017-II AM",
          "2017-II PM");
enlaces[0]=new Array("#","#","#","#");

          var menu=new Array()
          var submenu=new Array()

          window.onload = function() {
          //BARRA DE NAVEGACIÓN: Crear desplegables:
          for (i=0;i<titulos.length;i++) {
               //localizar elementos principales
               menu[i]=document.getElementById("seccion"+i);
               //crear elemento menu desplegable
               menu[i].innerHTML+="<div id='subseccion"+i+"'></div>"
               //localizar elemento menu desplegable
               submenu[i]=document.getElementById('subseccion'+i);
               //escribir menu desplegable
               for (j=0;j<titulos[i].length;j++) {
                   submenu[i].innerHTML += "<p><a href='"+enlaces[i][j]+"'>"+titulos[i][j]+"</a></p>";
                   }
               //estilo de los submenús
               
               submenu[i].style.position="absolute";
               submenu[i].style.top="100%";
               submenu[i].style.left="0px";
               submenu[i].style.backgroundColor="#faa819";
               submenu[i].style.font="normal 15px arial";
               submenu[i].style.padding="30px 60px";
               submenu[i].style.display="none"
               

               }
          //eventos para ver - ocultar menu
          for (i=0;i<titulos.length;i++) {
              menu[i].onmouseover = ver;
              menu[i].onmouseout = ocultar;
              }
          }
          //función para ver los menús desplegables.
          function ver() {
                   muestra=this.getElementsByTagName("div")[0];
                   muestra.style.display="block"
                   }
          //funcion para ocultar los menús desplegables.
          function ocultar() {
                   oculta=this.getElementsByTagName("div")[0];
                   oculta.style.display="none"
                   }
                   
/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
//console.log(data);