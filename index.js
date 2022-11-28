// 1) Generar dos variables: usuarioConEmail y contrasenia. Asignarle un valor aleatorio. A través de tres prompts, pídale al usuario los siguientes datos.

/////////// PARA EL CASO LOGIN

// TODOS LOS PUNTOS TIENEN QUE HACERSE CON FUNCIONES. CADA PUNTO PUEDE EXPRESARSE COMO UNA FUNCIÓN. LAS RESPONSABILIDADES DEBEN ESTAR SEPARADAS.
//UTILICE FUNCIONES QUE RECIBAN PARÁMETROS Y PASE ARGUMENTOS EN LA LLAMADA.



// a) A través de 3 prompts, pídale al usuario que ingrese su nombre, usuario y su contraseña. Valide que el usuario y la contraseña coincidan con los datos de las variables, estos datos tienen que ser iguales entre sí. En el caso de que no lo sean, devuelva un mensaje en forma de alerta, para cada uno de los casos: "Su usuario es erróneo" o "Su contraseña es errónea". EN EL CASO DE QUE SE EQUIVOQQUE EN LOS DOS: "SU USUARIO Y CONTRASEÑA SO ERRÓNEOS".
// b) Luego de que el usuario se loguee exitosamente, envíe una alerta que notifique "Bienvenido ${nombre}". La alerta debe saludar al usuario que se loguea.


let usuarioConEmail = "cami@gmail.com"
let contrasenia = "camilaponce"

const nombre = prompt ("Ingrese su nombre")
const usuarioIngresado = prompt ("Ingrese su usuario")
const contraseniaIngresada = prompt ("Ingrese su contraseña")

if( usuarioConEmail === usuarioIngresado && contrasenia === contraseniaIngresada ){
    alert (`Bienvenido, ${nombre}`)
} else if ( usuarioConEmail !== usuarioIngresado && contrasenia === contraseniaIngresada){
    alert ("Su usuario es erróneo")
} else if (usuarioConEmail === usuarioIngresado && contrasenia !== contraseniaIngresada){
    alert ("Su contraseña es errónea")
} else if (usuarioConEmail !== usuarioIngresado && contrasenia !== contraseniaIngresada){
    alert ("Su usuario y constraseña son erróneos")
}

// c) Valide con un bucle que el usuario tiene una arroba. En el caso que no la contenga, envíe un prompt con el siguiente mensaje: "Ingrese nuevo email". Cambie el valor de la variable usuarioConEmail.

function verificar(){
    let tieneArroba = false
    let i = 0
    for ( i = 0; i < usuarioConEmail.length; i ++){
        if (usuarioConEmail[i] === "@"){
            tieneArroba = true
        }
    }

    if (tieneArroba !== true){
        usuarioConEmail = prompt ("Ingrese nuevo mail")
    }
}
verificar ()

// d) Valide si la contraseña del usuario tiene más de 8 caracteres. En el caso de que tenga más de ocho caracteres, no haga nada. De lo contrario, envíe un alerta con el siguiente mensaje: "Su contraseña es insegura."

function largo (){
    if ( contrasenia.length < 8){
        alert ("Su contraseña es insegura")
    }
}
largo ()


// e) Valide con un bucle que la contraseña al menos tenga un número. En el caso de que no tenga uno, envíe un prompt que exprese lo siguiente: "Su contraseña debe tener caracteres alfanuméricos. Desea cambiarla?". Si el usuario dice si, entonces cambie el valor de la contraseña.

function contra (){
    let tieneNumero = false
    let i = 0
    for (i = 0; i < contrasenia.length ; i++){
        const aNumero = Number (contrasenia[i])
        if (isNaN (aNumero) === false){
            tieneNumero = true            
        } 
    }
    if (tieneNumero === false ){
        const cambiarContrasenia = prompt ("Su contraseña debe tener caracteres alfanuméricos. Desea cambiarla?")
        if (cambiarContrasenia === "si"){
            contrasenia = prompt ("Ingrese nueva contraseña")
        }
    }
}
contra ()