import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import DashboardCards from "./DashboardCards";
import BookedAppointments from "./BookedAppointments";
import Charts from "./Charts";  // ✅ Import Charts component

const Dashboard = () => {
  return (
    <>
      <div className="h-screen flex flex-col">
        <Navbar />
        <div className="flex flex-1">
          <Sidebar />
          <div className="flex-1 p-6 bg-gray-100 ml-60 mt-16">
            <DashboardCards />
            
            <div className="mt-12">
              <BookedAppointments />
            </div>

            {/* ✅ Charts Section Below Appointments */}
            <div className="mt-12">
              <Charts />
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
