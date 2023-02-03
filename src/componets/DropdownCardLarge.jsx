//Importação de arquivo de estilo .css e bibliotecas
import './components_css/DropdownCardLarge.css'
import { Divider } from '@mui/material';

import { useState } from 'react';

//Cria o componente com suas variáveis e referenciando as informações necessárias
function DropdownCardLarge({title,content,headerContent,count}) {

    //Cria e define as informações de checagem do dropdown para false
    const [isActive, setIsActive] = useState(false);

    //Varia o id do componente de acordo com a variável 'count'(contagem) para que não haja confusões nas funcçoes que referenciam o id do componente em páginas com mais de um componente
    var fieldId = "cardBoxLarge" + count;

    var cardBox = document.getElementById(fieldId);

    //Retorna o componente em si
    return(<div><br />

        {/* Card fechado */}
        <div id={fieldId} class="card flex flex-col justify-between items-start overflow-clip dropdownCardLarge closed">

            {/* Fecha o card ao clicar caso ele esteja aberto */}
            <div class="cardHeaderLarge flex items-center py-2 px-4 w-full h-36" onClick={(e) => {setIsActive(!isActive);cardBox.classList.replace("open", "closed")}}>

                {/* Abre o card caso ele esteja fechado */}
                {isActive ? cardBox.classList.replace("closed", "open") : ''}

                {/* Conteúdo do cabeçalho do card */}
                <div class="pt-5 px-3 w-full">
                    <h1 class="font-semibold text-xl">{title}</h1>
                    {headerContent}
                </div>

            </div>

            <section class="px-7 py-5 w-full">

                <Divider sx={{width:'100%',borderBottomWidth:".15rem",borderColor:"black"}}/>

                <br />
                
                {/* Conteúdo mostrado com o card aberto */}
                {content}

            </section>
            
        </div>

    <br /></div>)
}

export default DropdownCardLarge;