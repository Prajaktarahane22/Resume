
import MyNavBar from "./components/MyNavBar";

import{BrowserRouter , Route , Routes} from 'react-router-dom'

import Home from "./components/Home";
import VehicleList from "./components/VehicleList";
import AddVehicle from "./components/AddVehicle";
import About from "./components/About";
import UpdateVehicle from "./components/UpdateVehicle";

function App(){
return (
    <>
    
      <h1>Welcome to My Projects</h1>
      <p>Learning react..........</p>
        
     <MyNavBar/>
     
     <BrowserRouter>
     <Routes>
     
      {/*<Route path="/myresume" element={<MyResume/>}/>*/}

      <Route path="/home" element={<Home/>}/>
      <Route path="/vehicle-list" element={<VehicleList/>}/>
      <Route path="/addvehicle" element={<AddVehicle/>}/>
      <Route path="/about" element={<About/>}/>

      <Route path="/update-vehicle" element={<UpdateVehicle/>}/>

      






      </Routes>
     </BrowserRouter>
      </>
  )
  
}

export default App;

