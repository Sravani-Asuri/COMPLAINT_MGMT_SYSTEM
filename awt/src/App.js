import "./App.css";
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
BrowserRouter as Router,
Routes,
Route,
Navigate,
} from "react-router-dom";

import Cards from "./components/Cards";
import Contact from "./components/Contact";
import Feed from "./components/Feed";
import Login from "./components/Login";
import Reg_form from "./components/Reg_form";
import Help from "./components/Help";
import AdminHome from "./components/adminHome";
import SelectComplaints from "./components/select_complaints";
import MonitorComplaints from "./components/monitor_complaints";
import UserComplaints from "./components/see_complaints";
import AdminRoute from "./components/admin_protected_route";
import UserRoute from "./components/user_protected_route";
import Ans from "./components/Ans";


function App() {
return (
	<>
	<Router>
		<Routes>
		<Route path="/" element={<Ans/>} />
		<Route path="/select_complaints" element={<AdminRoute><SelectComplaints/></AdminRoute>}/>
		<Route path="/monitor_complaints" element={<AdminRoute><MonitorComplaints/></AdminRoute>}/>
		<Route path="/admin_home" element={<AdminRoute><AdminHome/></AdminRoute>}/>
		<Route path="/user_complaints" element={<UserRoute><UserComplaints/></UserRoute>}/>
		<Route path="/login" element={<Login/>} />
		<Route path="/home" element={<UserRoute><Cards/></UserRoute>} />
		<Route path="/Contact" element={<UserRoute><Contact/></UserRoute>} />
   		<Route path="/Feed" element={<UserRoute><Feed/></UserRoute>} />
		<Route path="/Reg_form" element={<UserRoute><Reg_form/></UserRoute>} />
		<Route path="/Help" element={<UserRoute><Help/></UserRoute>} />
		</Routes>
	</Router>
	</>
);
}

export default App;

