import Navbar from "../components/Navbar";
import Main from "../components/Main";
import About from "../components/About";
import Team from "../components/Team";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <>
            <Navbar />
            <Main />
            <About />
            <Team />
            <Contact />
            <Footer />
        </>
    );
}