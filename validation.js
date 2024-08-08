let nomeIsOk;
function validaEmail(event){
    // pega o valor digitado no elemento input
    const inputEmail = event.target;
    // cria uma expressão regular: <texto>@<texto>.<texto>
    var regex = /\S+@\S+\.\S+/;
    // se o email estiver correto muda a cor para verde
    if(regex.test(inputEmail.value)){
       
        inputEmail.style.color = "green";
    }
    // caso contrário, para vermelho
    else 
        inputEmail.style.color = "red";
}
function validaTelefone(event){
    const inputPhone = event.target;
    let formatedPhone = inputPhone.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
    console.log(formatedPhone);
    inputPhone.value = !formatedPhone[2] ? formatedPhone[1] : '(' + formatedPhone[1] + ') ' + formatedPhone[2] + (formatedPhone[3] ? '-' + formatedPhone[3] : '');
}
function validacpf(event){
    const inputCPF = event.target;
    let formattedCPF = inputCPF.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,2})/);
    console.log(formattedCPF);
    inputCPF.value = !formattedCPF[2] ? formattedCPF[1] : formattedCPF[1] + '.' + formattedCPF[2] + (formattedCPF[3] ? '.' + formattedCPF[3] : '') + (formattedCPF[4] ? '-' + formattedCPF[4] : '');
}
function validaEndereco(event) {
    const inputEndereco = event.target;
    let cleanedEndereco = inputEndereco.value.replace(/[^a-zA-Z0-9\s]/g, '');
    let formattedEndereco = cleanedEndereco.replace(/(\d+)([a-zA-Z\s]*)/, '$1 $2');
    inputEndereco.value = formattedEndereco;
}
function validaRenda(event) {
    const inputRenda = event.target;
    let cleanedRenda = inputRenda.value.replace(/[^\d,]/g, '');
    cleanedRenda = cleanedRenda.replace(',', '.');
    let numericRenda = parseFloat(cleanedRenda).toFixed(2);
    let formattedRenda = parseFloat(numericRenda).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    inputRenda.value = formattedRenda;
}
