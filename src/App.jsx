import { useState } from "react";
import EmployeeWelfare from "./components/EmployeeWelfare";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-gray-100 min-h-screen">
      <EmployeeWelfare />
    </div>
  );
}

export default App;
