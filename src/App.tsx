import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles/index.scss'
import Header from "./components/layout/Header";
import Landing from "./components/layout/Landing";
import Footer from "./components/layout/Footer";

function App() {

    return (
        <>
            <Header/>
            <div className="wrapper">
                <Landing />
                <Footer />
            </div>
        </>
    )
}

export default App
