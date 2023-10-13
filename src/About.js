/** @format */
import "./App.css";
const About = () => {
  return (
    <div className="aboutUsContainer">
      <div className="headerContainer">
        <h1 className="whoWeAreText">WHO WE ARE</h1>
        <h1 className="pt-2 pb-3 dreamersText">Innovators. Dreamers.</h1>
        <p className="aboutUsPara">
          We’re a young and talented group of entrepreneurs and engineers with a
          <br />
          groundbreaking idea designed to contribute towards a better tomorrow.
          We
          <br />
          provide smart solutions for companies of all sizes and pride ourselves
          <br />
          on our unparalleled, dedicated service.
        </p>
        <p className="aboutUsPara">
          At Integrity Tech Solutions, we believe that the right understanding
          and
          <br />
          technological edge can lead companies towards a successful future.
          With
          <br />
          our innovative and insightful technology, we strive to enhance our
          <br />
          users’ everyday experiences.
        </p>
        <p className="aboutUsPara">
          We have worked tirelessly to bring Integrity Tech Solutions to <br />
          forefront of the industry and will continue to work relentlessly to
          <br />
          become the technological standard, providing big-picture insights and
          <br />
          solutions for companies of all sizes. Get in touch to learn more.
          <br />
        </p>
      </div>
      <div>
        <img src="/images/ccg.jpg" width={500} height={500} />
        <h1 style={{ fontFamily: "serif", fontSize: "100px" }}>CCG</h1>
      </div>
    </div>
  );
};
export default About;
