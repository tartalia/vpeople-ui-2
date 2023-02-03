//Importação de arquivo de estilo .css e bibliotecas
import './components_css/DropdownInput.css'

import { React, useState } from 'react';
import onClickOutside from 'click-outside-js';

//Cria o componente com suas variáveis e referenciando as informações necessárias
function DropdownInput({label,placeholder, optionsArray, count}) {

    //Cria e define as informações de checagem de seleção do dropdown para false
    const [isActive, setIsActive] = useState(false);
    const [selected, setSelected] = useState('');

    //Varia o id do componente de acordo com a variável 'count'(contagem) para que não haja confusões nas funcçoes que referenciam o id do componente em páginas com mais de um componente
    var fieldId = 'textBox' + count;

    var textBox = document.getElementById(fieldId);

    //Detecta interações fora do componente para fechá-lo (Função externa, script importado em 'click-outside-js')
    var el = textBox;
    onClickOutside(el, function() {
        setIsActive(false);
        textBox.classList.replace("open", "closed");
    })

    //Retorna o componente em si
    return (<div>
        <label  class="font-extralight pl-6" style={{color:"var(--subheading)"}}>{label}</label>
        
        {/* Card fechado */}
        <div id={fieldId} class="dropdownInput textBox relative w-60 h-12 mx-5 my-2 z-10 select-none closed">

            {/* Fecha o card ao clicar caso ele esteja aberto */}
            <input type="text" class="absolute top-0 left-0 w-full h-full py-3 px-5" placeholder={placeholder} onClick={(e) => {setIsActive(!isActive);textBox.classList.replace("open", "closed");}} value={selected} readOnly/>

            {/* Abre o card caso ele esteja fechado */}
            {isActive ? textBox.classList.replace("closed", "open") : ''}


            {//Mostra as opções do dropdown quando ele é ativado
                isActive && (<div class="options absolute w-full font-extralight mb-40 pt-12 -z-10 max-h-80 overflow-y-auto">

                    {/* Opção de seleção default do input */}
                    <div style={{color:"var(--grey2)"}} class="font-thin" onClick={(e) => {
                        setSelected("");
                        setIsActive(false);
                        textBox.classList.replace("open", "closed");
                    }}>Selecione</div>

                    {//Extende o campo de opções do dropdown com base nas opções indicadas
                        optionsArray.map((option) => (
                            <div class="" onClick={(e) => {
                                setSelected(option);
                                setIsActive(false);
                                textBox.classList.replace("open", "closed");
                            }}>

                            {option}
                            
                            </div>
                        ))
                    }

                </div>)
            }

        </div>  
    </div>)
}

export default DropdownInput;