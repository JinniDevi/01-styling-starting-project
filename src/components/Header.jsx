import logo from "../assets/logo.png";
import headerModuleCss from "./Header.module.css";

export default function Header() {
  return (
    <>
      <p className={headerModuleCss.paragraph}> waiting for you.</p>
      <header>
        <img src={logo} alt="A canvas" />
        <h1>ReactArt</h1>
        <p>A community of artists and art-lovers.</p>
      </header>
    </>
  );
}
