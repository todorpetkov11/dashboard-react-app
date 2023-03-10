import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Tasks from './components/Tasks';
import Employees from './components/Employees';
import Rankings from './components/Rankings';
import EmployeeDetails from './components/Employees/Details';
import TaskDetails from './components/Tasks/Details';

function App() {


  return (
    <div>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path='tasks' element={<Tasks />}>
            <Route path=':taskId/details' element={<TaskDetails />}></Route>
          </Route>
          <Route path='employees' element={<Employees />}>
            <Route path=':employeeId/details' element={<EmployeeDetails />}></Route>
          </Route>
          <Route path='rankings' element={<Rankings />}></Route>
        </Route>

      </Routes>
    </div>

  );
}

export default App;
