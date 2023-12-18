const form = document.getElementById('formulario')
const campos = document.querySelectorAll('.inputs')
const span = document.querySelectorAll('.span-required')
const emailregex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

form.addEventListener('submit',(event) => {
    event.preventDefault();
    validarNome();
    validarEmail();
    
})

//criar funçao validar nome 

function validarNome(){

    if(campos[0].value.length < 5)
    {
        console.log('Nome inválido')
        verErro(0)
    }
    else
    {
        console.log('Nome válido')
        removerErro(0)
    }
}

//criar funçao de erro

function verErro(index)
{
    campos[index].style.border = '2px solid #e63636'
    span[index].style.display = 'block'
}

function removerErro(index) {
    campos[index].style.border = "";
    span[index].style.display = "none";
  }

  //funçao que valida email
  function validarEmail()
  {
    if(emailregex.test(campos[1].value))
    {
        removerErro(1)
    }
    else
    {
        verErro(1)
    }
  
  }

  



