import nusLogo from "../assets/nus-logo.jpg";

function Home() {
    return (
        <section className="page home">
            <img src={nusLogo} className="home-logo" alt="NUS logo" />
            <p className="home-tagline">NUS is a leading research university in Asia</p>
        </section>
    );
}

export default Home;