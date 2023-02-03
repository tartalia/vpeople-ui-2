//Importação de componentes e bibliotecas
import Navbar from "../../componets/Navbar";
import Footer from "../../componets/Footer";
import DropdownCardLarge from "../../componets/DropdownCardLarge";
import FormTheme from "../../componets/FormTheme";
import BtnLight from "../../componets/BtnLight";

import './avaliacoes.css'

//Retorna a referida página para a root
function Avaliacoes() {

    //Variáveis de exemplo de conteúdo para a tela principal

    //Variáveis de exemplo de conteúdo dos cards de avaliação
    var formType = 'Pares'
    var formName = 'Aderência à Cultura (2023)'
    var formUsers = ['Felipe Gomes Rodrigues dos Santos', 'Inayan Leonardo Silva', 'Fabrício Metzker', 'Kil Mateus']
    var formStatus = [
        {
            status:'Pendente', 
            color:'var(--neg)'
        },
        {
            status:'Em progresso', 
            color:'var(--indeterm)'
        },
        {
            status:'Entregue', 
            color:'var(--confirm)'
        },
        {
            status:'Em progresso', 
            color:'var(--indeterm)'
        }
    ]

    //Variável que gera as perguntas (assunto) do questionário
    var formQuestions = [
        {
            name: "Relacionamento",
            color: "#FE8B55",
            question1: "Trouxe os problemas à mesa e buscou ajuda quando necessário?",
            question2: "Teve Inteligência emocional, monitorou os seus setimentos e dos do outros para guiar o seu raciocínio e comportamento?",
            question3:  "Trabalhou de forma parceira e colaborativa, dando crédito às pessoas?"
        },

        {
            name: "Resultados",
            color: "#065B38",
            question1: "Ficou incomodado e não desanimou facilmente?",
            question2: "Buscou soluções equilibrando custo, recursos, qualidade, prazos e interesses conflitantes, não precisou ser cobrado?",
            question3: "Mediu e acompanhou a eficiência de suas ações, trazendo fatos e dados dos resultados alcançados? *"
        },

        {
            name: "Inovação e Aprendizado",
            color: "#3568EC",
            question1: "Desafiou o status quo e implementou melhoria continua de processos?",
            question2: "Identificou os caminhos necessários para aprovar e entregar projetos com agilidade, não deu desculpas e encontrou solução?",
            question3: "Criou pilotos para experimentar suas ideias e soluções, errando e corrigindo rapidamente a rota?"
        },

        {
            name: "Ambiente",
            color: "#4AE16B",
            question1: "Liderou com leveza, positividade e equilíbrio em cenários ambíguos e de mudança?",
            question2: "Expôs sem hesitar a sua opinião de forma honesta, respeitosa e transparente, independente do fórum?",
            question3: "Estabeleceu vínculos com as pesssoas, independetende do seu nível hierárquico e da área (sejam níveis sêniores ou mais júniores)?"
        }
    ]

    //Variável que gera as respostas (escala) do questionário
    var formScaleCultural = [
        {
            value: "insuficiente",
            label: "Atitude Insuficiente"
        },
        {
            value: "pontual",
            label: "Atitude Pontual"
        },
        {
            value: "consistente",
            label: "Atitude Consistente"
        },
        {
            value: "excepcional",
            label: "Atitude Excepcional"
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

                        <i class="fa-solid fa-table-list pr-3 pb-3 text-5xl"></i>

                        <h1 class="font-semibold text-3xl">Avaliações</h1>
                        
                    </div>
                </div>

                {//Gera um card de avaliação para cada usuário indicado na variável 'formUsers'

                    formUsers.map((user, index) => (
                        
                        //CardDropdown onde é mostrado o referente formulário
                        <DropdownCardLarge count={index} title={`${formType}: ${formUsers[index]}`} 
                        headerContent={<div class="flex flex-row justify-between pr-20">

                            {/* Cabeçalho do card onde inica o seu nome, tipo e status */}
                            <div class="flex flex-col pt-4 pb-4">
                                <h3 class="font-semibold pr-1" style={{color:"var(--info)"}}>Qustionário: {formType} - {formName}</h3>
                                <br />  
                            </div>
                            <div class="p-2 h-fit" style={{borderRadius:"10px", background:formStatus[index].color}}>
                                <h1 class="font-semibold" style={{color:"var(--base)"}}>{formStatus[index].status}</h1>
                            </div>
                            
                        </div>} 
                        content={<div>

                            {/* Conteúdo do card aberto (formulário) */}
                            <form>

                                {//Gera um campo de pergunstas para cada assunto
                                    formQuestions.map((item, index) => (
                                        <FormTheme title={item.name}
                                        color={item.color}
                                        question1={item.question1}
                                        question2={item.question2}
                                        question3={item.question3}
                                        scale={formScaleCultural}/>
                                    ))
                                }

                                {/* Botão para envio do formulário */}
                                <div class="flex justify-center p-5 w-full">
                                    <BtnLight text={"Enviar"}/>
                                </div>

                            </form>
                            
                        </div>}/>
                    ))
                }
                
            </section>
        </div>

        {/* Componente do footer */}
        <Footer/>

    </div>)
}

export default Avaliacoes;