import { Link} from "react-router-dom";
function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>
        <Link to={"/login"}>Login</Link>
      </p>
      <p>
        <Link to={"/register"}>Register</Link>
      </p>
    </div>
  );
}

export default Home