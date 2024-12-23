import pic from "./ia-white.png";

export default function App() {
  return (
    <>
      <div className="app">
        <Profile />
        <Links />
      </div>
      <Footer />
    </>
  );
}

function Profile() {
  return (
    <div className="profile">
      <img src={pic} alt="profile pic" />
      <div className="details">
        <h1>Aliya Shaik</h1>
        <p>Andhra Pradesh, India</p>
      </div>
    </div>
  );
}

function Links() {
  return (
    <div className="links">
      <p>Software Engineer 🤍 Front-end developer.</p>
      <Button social={"GitHub"} url={"https://www.github.com/SkAliya"} />
      <Button
        social={"Frontend Mentor"}
        url={"https://www.frontendmentor.io/profile/SkAliya"}
      />
      <Button
        social={"LinkedIn"}
        url={"https://www.linkedin.com/in/sk-aliya-865a101a9/"}
      />
      <Button social={"CodePen"} url={"https://codepen.io/SkAliya"} />
    </div>
  );
}

function Button({ social, url }) {
  return (
    <button>
      <a href={url}>{social}</a>
    </button>
  );
}

function Footer() {
  return (
    <footer>
      <div class="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io/challenges/social-links-profile-UG32l9m6dQ">
          Frontend Mentor
        </a>
        . Coded by
        <a href="https://www.frontendmentor.io/profile/SkAliya">Aliya Shaik</a>.
      </div>
    </footer>
  );
}
