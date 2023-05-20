import About from "./About";
import Interest from "./Interest";

function Main() {
  return (
    <div className="main">
      <h1 className="main--title">Laura Smith</h1>
      <h4 className="main--subtitle">front End Developer</h4>
      <p className="main--website">Laurasmith.website</p>
      <div className="btn">
        <button className="btn--email">Email</button>
        <button className="btn--linkedln">Linkedln</button>
      </div>
      <About />
      <Interest />
    </div>
  );
}
export default Main;
