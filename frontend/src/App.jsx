import Sidebar from "./components/Sidebar";
function App() {
  return (
    <div className="app">
      <Sidebar />
      
      <style jsx>{`
        .app {
          display: flex;
        }
        .content {
          margin-left: 16rem; /* Sidebar width */
          padding: 2rem;
          flex-grow: 1;
        }
      `}</style>
    </div>
  );
}

export default App;
