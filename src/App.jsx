import { useState } from "react";
import CreateImage from "./components/CreateImage";
import Downloads from "./components/Downloads";
import Navbar from "./components/Navbar";

function App() {
  const [activeTab, setActiveTab] = useState("create");

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Glow */}
      <div className="fixed -bottom-1/4 right-0 ">
        <div className="h-96 w-96 bg-linear-to-r from-pink-600 to-indigo-400 rotate-90 rounded-full blur-[180px] "></div>
      </div>

      <Navbar setActiveTab={setActiveTab} activeTab={activeTab} />
      {activeTab === "create" ? <CreateImage /> : <Downloads />}
    </div>
  );
}

export default App;
