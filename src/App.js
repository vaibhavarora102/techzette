// import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Sidebar from "./components/sidebar/Sidebar";
import SinglePost from "./components/singlePost/SinglePost";
import Write from "./pages/write/Write";
import Single from "./pages/single/Single";

function App() {
  return (
    <div className="App">
      <TopBar/>
      {/* <Home /> */}
      {/* <Single />*/}
      <Write />

      {/* <SinglePost />*/}
      {/* <Sidebar />  */}
    </div>
  );
}

export default App;
