import Sidenav from "./templets/Sidenav";
import Topnav from "./templets/Topnav";


const Home = () => {
    document.title = "MK Movie App";
  return (
    <>
    <Sidenav/>
    <div className="w-[80%] h-full ">
        <Topnav/>
    </div>

    </>
  )
}

export default Home
