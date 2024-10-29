import Landing from "../sections/Landing";
import AboutMe from "../sections/AboutMe";

export default function Home() {
    return (
        <div className="font-sans font-medium">
            <Landing />

            <AboutMe />
        </div>
    );
}
