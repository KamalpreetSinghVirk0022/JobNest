import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home.jsx";
import ApplyJob from "./pages/ApplyJob.jsx";
import Applications from "./pages/Applications.jsx";
import RecruiterLogin from "./components/RecruiterLogin.jsx";
import { useContext } from "react";
import { AppContext } from "./context/AppContext.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Managejobs from "./pages/Managejobs.jsx";
import ViewApplications from "./pages/ViewApplications.jsx";
import Addjob from "./pages/Addjob.jsx"
import 'quill/dist/quill.snow.css'

const App = () => {
  const { showRecruiterLogin } = useContext(AppContext);
  return (
    <div>
      {showRecruiterLogin && <RecruiterLogin />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply-job/:id" element={<ApplyJob />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="manage-jobs" element={<Managejobs />} />
          <Route path="view-applications" element={<ViewApplications />} />
          <Route path="add-job" element={<Addjob />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
