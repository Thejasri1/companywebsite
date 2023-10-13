/** @format */

const Contact = () => {
  return (
    <div style={{ backgroundColor: "black" }}>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3127753.1424617134!2d-77.36541756356556!3d40.04313726452832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c0fb959e00409f%3A0x2cd27b07f83f6d8d!2sNew%20Jersey%2C%20USA!5e0!3m2!1sen!2sin!4v1697193834500!5m2!1sen!2sin"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          className="location"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div
        style={{
          backgroundColor: "black",
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          padding: "30px",
          paddingTop: "40px",
          paddingBottom: "40px",
        }}
      >
        <div style={{ width: "900px" }}>
          <h1>GET IN TOUCH</h1>
          <p>Newark, New Jersey</p>
          <p>nwhitehurst@integritytechsol.com</p>
          <p>562-209-1649</p>
        </div>
        <div>
          <div>
            <input type="text" placeholder="name" />
            <input type="text" placeholder="email" />
          </div>
          <div>
            <input type="text" placeholder="phone" />
            <input type="text" placeholder="address" />
          </div>
          <input type="text" placeholder="subject" />
          <input type="text" placeholder="Type your text here..." />
          <button
            style={{
              width: "500px",
              color: "black",
              backgroundColor: "white",
              padding: "20px",
              marginTop: "40px",
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
export default Contact;
