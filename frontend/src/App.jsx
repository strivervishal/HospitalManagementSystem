import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="h-screen flex flex-col">
      {/* Navbar at the top */}
      <Navbar />

      {/* Sidebar + Content */}
      <div className="flex flex-1">
        {/* Sidebar takes space but does not overlap */}
        <Sidebar />

        {/* Main content with left margin to avoid overlap */}
        <div className="flex-1 p-4 bg-gray-100 ml-64">
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default App;
