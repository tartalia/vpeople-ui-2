//Importação de arquivo de estilo .css e componentes
import VtalLogo_black from '../assets/svgs/VtalLogo_black/export';

import './components_css/Footer.css'

//Cria o componente com suas variáveis e referenciando as informações necessárias
function Footer() {

    //Retorna o componente em si
    return(<div>

        <footer class="w-full h-32 flex justify-between items-end px-10 z-50" style={{background:"var(--grey1)"}}>
            <h5 class="pb-6 font-extralight">
                Copyright 2023 V.tal
            </h5>

            <div class="pb-6">
                <VtalLogo_black width={"7rem"}/>
            </div>
        </footer>

    </div>)
}

export default Footer;