//Importação de componentes e bibliotecas
import './avaliadores.css'
import Navbar from "../../componets/Navbar";
import Footer from "../../componets/Footer";
import PeopleListCard from '../../componets/PeopleListCard';
import userImage from '../../assets/images/user_placeholder.jpeg'

//Retorna a referida página para a root
function Avaliadores() {

    //Variáveis de exemplo de conteúdo para a tela principal
    var userName = "Kil Matheus Gomes Teixeira"

    var lider = [
        {
            name: "Fabricio Metzker",
            role: "Diretor de Sistema de Negócios",
            image: userImage
        }
    ]

    var liderados = [
        {
            name: "Felipe Gomes Rodrigues dos Santos",
            role: "Estagiário de tecnologia",
            image: userImage
        },
        {
            name: "Daniel Cunha",
            role: "Estagiário de tecnologia",
            image: userImage
        },
        {
            name: "Kil Mateus Gomes Teixeira",
            role: "Estagiário de tecnologia",
            image: userImage
        },
        {
            name: "Celine Souza",
            role: "Estagiário de tecnologia",
            image: userImage
        }
    ]

    var pares = [
        {
            name: "Rafale Tartalia",
            role: "Consultor de arquitetura TI",
            image: userImage
        },
        {
            name: "Izabella Carvalho",
            role: "Coordenadora do RH",
            image: userImage
        },
        {
            name: "Kil Mateus Gomes Teixeira",
            role: "Estagiário de tecnologia",
            image: userImage
        },
        {
            name: "Celine Souza",
            role: "Estagiário de tecnologia",
            image: userImage
        },
        {
            name: "Inayan Leonardo Silva",
            role: "Consultor de RH",
            image: userImage
        }
    ]

    //Retorna o conteúdo da página em si
    return(<div>

        {/* Componente da barra de navegação */}
        <Navbar/>

        {/* Campo principal da página onde é exibido todo seu conteúdo */}
        <div id="mainScreen" class="mainScreen p-16 pt-52">
            <section class="flex flex-col w-full">

                {/* Campo que indica a página mostrada */}
                <div class="cardLight flex flex-row items-center justify-between px-12 py-8 w-full">
                    <div class="flex flex-row items-center">

                        <i class="fa-solid fa-network-wired pr-3 pb-3 text-5xl"></i>

                        <h1 class="font-semibold text-3xl">Rede de Avaliadores</h1>

                    </div>
                </div>

                <br />

                {/* Espaço onde serão mostrados os líderes, liderados e pares do usuário */}
                <div class="card p-10">
                    <h1 class="font-semibold">{`Pessoas que avaliaram ${userName}`}</h1>

                    <br />

                    <section class="flex flex-row justify-between p-10">
                        <PeopleListCard title="Líder" peopleList={lider}/>
                        <PeopleListCard title="Liderados" peopleList={liderados}/>
                        <PeopleListCard title="Pares" peopleList={pares}/>
                    </section>
                </div>

                <br />

                {/* Espaço onde serão mostrados quem avalia os liderados do usuário */}
                <div class="card p-10">
                    <h1 class="font-semibold">{`Pessoas que avaliaram os Liderados de ${userName}`}</h1>

                    {//Gera uma divisão para cada liderado do usuário indicado na variável 'liderados'
                        liderados.map((item, index) => (<div>
                                <br />

                                <div class="flex flex-row justify-start items-center">
                                    <img src={item.image} alt="user" class="rounded-full bg-slate-500 h-14 w-14 user" />

                                    <div class="p-6 ">
                                        <div>
                                            <h1 class="font-semibold">{item.name.split(' ').slice(0, 2).join(' ')}</h1>
                                            <h2 style={{color:"var(--subheading)"}}>{item.role}</h2>
                                        </div>
                                    </div>                                       
                                </div>

                                <section class="flex flex-row justify-between p-10">
                                    <PeopleListCard title="Líder" peopleList={lider}/>
                                    <PeopleListCard title="Liderados" peopleList={liderados}/>
                                    <PeopleListCard title="Pares" peopleList={pares}/>
                                </section>

                        </div>))
                    }

                </div>

                <br />

            </section>     
        </div>

        {/* Componente do footer */}
        <Footer/>

    </div>)
}

export default Avaliadores;