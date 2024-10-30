import Landing from "../sections/Landing";
import AboutMe from "../sections/AboutMe";
import Lessons from "../sections/Lessons";
import Testimony from "../sections/Testimony";
import Contact from "../sections/Contact";

export default function Home() {
    return (
        <div className="font-sans font-medium">
            <section id="home">
                <Landing />
            </section>

            <section id="about">
                <AboutMe />
            </section>

            <section id="lessons">
                <Lessons />
            </section>

            <section id="testimony">
                <Testimony />
            </section>

            <section id="contact">
                <Contact />
            </section>
        </div>
    );
}
