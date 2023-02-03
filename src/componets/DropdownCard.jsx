//Importação de arquivo de estilo .css e bibliotecas
import './components_css/DropdownCard.css'

import { useState } from 'react';

//Cria o componente com suas variáveis e referenciando as informações necessárias
function DropdownCard({text,content,count}) {

    //Cria e define as informações de checagem do dropdown para false
    const [isActive, setIsActive] = useState(false);

    //Varia o id do componente de acordo com a variável 'count'(contagem) para que não haja confusões nas funcçoes que referenciam o id do componente em páginas com mais de um componente
    var fieldId = "cardBox" + count;

    var cardBox = document.getElementById(fieldId);

    //Retorna o componente em si
    return(<div><br />

        {/* Card fechado */}
        <div id={fieldId} class="card flex flex-col justify-between overflow-clip dropdownCard h-fit closed">

            {/* Fecha o card ao clicar caso ele esteja aberto */}
            <div class="cardHeader flex items-center py-2 px-4 w-full" onClick={(e) => {setIsActive(!isActive);cardBox.classList.replace("open", "closed")}}>

                {/* Abre o card caso ele esteja fechado */}
                {isActive ? cardBox.classList.replace("closed", "open") : ''}

                {/* Titulo do card */}
                <h1 class="font-semibold">{text}</h1>
            </div>

            {/* Conteúdo mostrado com o card aberto */}
            <section class="px-7 py-5">{content}</section>
            
        </div>

    <br /></div>)
}

export default DropdownCard;