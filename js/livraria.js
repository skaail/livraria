const campos = [
    document.querySelector('#form-nome'),
    document.querySelector('#form-prec'),
    document.querySelector('#form-desc')
];

const tbody = document.querySelector('tbody');

document.querySelector('#btnCom').addEventListener('click', function(calcular){

    if (campos[0].value == ""){
        alert("Por favor preencha o campo nome")
    }else if (campos[1].value == ""){
        alert("Por favor preencha o campo de preço")
    }else if (campos[1].value == ""){
        alert("Por favor preencha o campo de desconto")
    }else {
        calcular.preventDefault();

        const tr = document.createElement('tr');
    
        campos.forEach(function(campo){
     
            const td = document.createElement('td');
            td.textContent = campo.value;
            tr.appendChild(td);
        });
    
            const td = document.createElement('td');
           
            td.textContent = (Number(campos[1].value)- ((Number(campos[2].value)/100)*Number(campos[1].value)) );
            tr.appendChild(td);
            tbody.appendChild(tr);
    }



document.querySelector('form').reset();
        campos[0].focus();
}); 