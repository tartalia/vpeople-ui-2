//Importação de componentes e bibliotecas
import Navbar from "../../componets/Navbar";
import Footer from "../../componets/Footer";
import DashboardCard from "../../componets/DashboardCard";

import './dashboard.css'

//Retorna a referida página para a root
function Dashboard() {

    //Cards que serão mostrados na dashboard e os dados que serão mostrados
    const cardData = [
        {
            name: "Avaliação de Aderência de Cultura",
            status : true,
            periodo : "02/01/2023  à   27/01/2023",
            chartData : [
                { name: 'Não iniciaram', value: 200, color:'#FFBB28' },
                { name: 'Em progresso', value: 360, color:'#DE6830' },
                { name: 'Entregues', value: 540, color:'#0880AE' }
            ],
            published: true
        },
        {
            name: "Avaliação de Estagiários",
            status : false,
            periodo : "02/01/2023  à   27/01/2023",
            chartData : [
                { name: 'Não iniciaram', value: 300, color:'#FFBB28' },
                { name: 'Em progresso', value: 300, color:'#DE6830' },
                { name: 'Entregues', value: 900, color:'#0880AE' }
            ],
            published: false
        },
        {
            name: "Avaliação de Potencial",
            status : true,
            periodo : "02/01/2023  à   27/01/2023",
            chartData : [
                { name: 'Não iniciaram', value: 700, color:'#FFBB28' },
                { name: 'Em progresso', value: 360, color:'#DE6830' },
                { name: 'Entregues', value: 220, color:'#0880AE' }
            ],
            published: true
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

                        <i class="fa-solid fa-table-columns pr-3 pb-3 text-5xl"></i>

                        <h1 class="font-semibold text-3xl">Dashboard</h1>

                    </div>

                    {/* Breve descrição da página mostrada */}
                    <div class="w-64">
                        <h2 class="font-semibold text-xl break-normal" style={{color:"var(--info)"}}>Acompanhe os resultados das avaliações detalhadamente.</h2>
                    </div>
                </div>
                
                {//Gera um card de dashboard para cada item na variável 'cardData'
                    cardData.map((item, index) => (
                        <DashboardCard count={index} title={item.name} chartData={item.chartData} status={item.status} periodo={item.periodo} published={item.published}/>
                    ))
                }
                
            </section>
        </div>

        {/* Componente do footer */}
        <Footer/>
        
    </div>)
}

export default Dashboard;