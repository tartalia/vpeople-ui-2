import Navbar from '../../componets/Navbar.jsx'
import Footer from '../../componets/Footer.jsx'

import './people.css'

function People() {

    var userName = "Kil Mateus Gomes Teixeira"
    var userArea = "Tecnologia"
    var userEmail = "kil.teixeira@vtal.com"
    var userManager = "Felipe Gomes Rodrigues dos Santos"
    var compactUserManager = userManager.split(' ').slice(0, 2).join(' ');

    return (
        <div>
            <Navbar />
            <div id="mainScreen" class="mainScreen p-16 pt-52">
                <section class="flex w-full">   
                    <div class="card h-12 w-8"></div>
                    <div></div>
                </section>
            </div>
            <Footer/>
        </div>
    )
}

export default People;