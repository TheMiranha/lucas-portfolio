import Header from '../../components/Header'
import Banner from './components/Banner'
import MainLanguage from './components/MainLanguage'
import Tools from './components/Tools'
import Footer from '../../components/Footer'

const Home = () => {
    return (
        <div>
            <Header/>
            <section id="banner">
                <Banner/>
            </section>
            <MainLanguage/>
            <Tools/>
            <section id="footer">
                <Footer/>
            </section>
        </div>
    )
}

export default Home;