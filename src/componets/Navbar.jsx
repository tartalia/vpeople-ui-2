//Importação de arquivo de estilo .css e componentes
import './components_css/Navbar.css'
import userImage from '../assets/images/user_placeholder.jpeg'
import VtalLogo_black from '../assets/svgs/VtalLogo_black/export';

//Cria o componente com suas variáveis e referenciando as informações necessárias
function Navbar({userName}) {
    
    //Escreve uma string com a primeira letra maiúscula
    function capitalizeFirstLetter(string){
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
    //Nome de usuário para exemplo
    var userName = "Kil Mateus Gomes Teixeira"
    
    //Indica a página atual com base na rota
    var route = capitalizeFirstLetter(String(window.location.pathname).replace('/',''));

    //Compacta o nome de usuário para apenas os 2(dois) primeiros nomes
    var compactUserName = userName.split(' ').slice(0, 2).join(' '); // retorna primeiro e segundo nome
    
    //Variável necessária para animações baseadas no scroll da página
    var prevScrollpos = window.pageYOffset;
    
    //Retorna o componente em si
    return (<div>
        <header class="pb-0" style={{zIndex:100000}}>
            <div class="flex justify-between items-center flex-row z-30">

                {/* Links de navegação da Navbar */}
                <div class="flex justify-between items-center flex-row">
                    <a href="/home" class=""><VtalLogo_black width={"11rem"} alt="logo"/></a>

                    <ul class="flex justify-center items-center pl-11">
                        <li><a class="link" href="/home">Home</a></li>
                        <li><a class="link" href="/people">People</a></li>
                        <li><a class="link" href="/avaliacoes">Avaliações</a></li>
                        <li><a class="link" href="/avaliadores">Avaliadores</a></li>
                        <li><a class="link" href="/dashboard">Dashboard</a></li>
                        <li><a class="link" href="/exportar">Exportar</a></li>
                    </ul>
                </div>

                {/* Campo de usuário da Navbar */}
                <div class="flex flex-row justify-between items-center">
                    <i class="fa-regular fa-bell pr-3"></i>
                    <h2 class="pr-3">Bem vindo(a) {compactUserName}</h2>
                    <img src={userImage} alt="user" class="rounded-full bg-slate-500 h-14 w-14 user" />
                </div>
            </div>

            {/* Indica a página atual com base na rota */}
            <div id='scrollHidden' class="flex flex-col justify-center pb-3">
                <div class="bg-black h-1 mt-4"></div>
                <div class="flex flex-row pt-4 pl-2">
                    <a href={window.location.pathname}>{route}</a>
                </div>
            </div>

            {//Ajusta o tamanho da navbar e o expaçamento superior da página em si, baseado-se no scroll da página
                window.addEventListener("scroll", function(){
                    var header = document.querySelector("header");
                    var mainScreen = document.getElementById("mainScreen")
                    header.classList.toggle("sticky", window.scrollY >0);

                    //Diminui o espaçamento superior quando a página sai do topo (Scroll para baixo do topo máximo)
                    if (window.scrollY >0) {
                        mainScreen.classList.replace("pt-52","pt-36")
                    } 
                    
                    //Aumenta o espaçamento superior e altera a navbar para o tamanho máximo quando a página volta ao topo (Scroll para o topo máximo)
                    else {
                        mainScreen.classList.replace("pt-36","pt-52")
                        header.style.height ="11rem";
                    }
                })
            }

            {//Varia a navbar de acordo com a direção do scroll (Para cima ou para baixo)
                window.onscroll = function() {
                    var currentScrollPos = window.pageYOffset;
                    var header = document.querySelector("header");
                    var scrollHidden = this.document.getElementById("scrollHidden");

                    //Mostra o indicador da página atual e ajusta a navbar para o tamanho médio em ScrollUP (Scroll para cima)
                    if (prevScrollpos > currentScrollPos) {
                        scrollHidden.style.transition = '2s';
                        scrollHidden.style.visibility = 'visible';
                        scrollHidden.style.opacity = '1';
                        header.style.height = "8rem";
                    } 
                    
                    //Esconde o indicador da página atual e ajusta a navbar para o tamanho mínimo em ScrollDown (Scroll para baixo)
                    else {
                        scrollHidden.style.transition = '.25s';
                        scrollHidden.style.visibility = "hidden";
                        scrollHidden.style.opacity = '0';
                        header.style.height = "3.50rem";
        
                    }
                    prevScrollpos = currentScrollPos;
                }
            }

        </header>
    </div>)
}

export default Navbar;