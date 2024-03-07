import Nav from "./components/Navbar";
import Login from "./components/Login";
import "./output.css";

function App() {
  return (
    <div className="dark:border-gray-700 dark:bg-gray-800 w-full min-h-screen">
      <Nav />
      <Login />
    </div>
  );
}

export default App;
