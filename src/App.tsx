import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Tasks from './components/Tasks';
import Employees from './components/Employees';
import Rankings from './components/Rankings';
import EmployeeDetails from './components/Employees/Details';
import TaskDetails from './components/Tasks/Details';
import CreateTask from './components/Tasks/Create';
import CreateEmployee from './components/Employees/Create';
import EditTask from './components/Tasks/Edit';
import EditEmployee from './components/Employees/Edit';
import Help from './components/Help';
import NotFound from './components/404Page';

function App() {


  return (
    <div>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path='tasks' element={<Tasks />}>
            <Route path=':taskId/edit' element={<EditTask />}></Route>
            <Route path='create' element={<CreateTask />}></Route>
          </Route>
          <Route path='employees' element={<Employees />}>
            <Route path=':employeeId/edit' element={<EditEmployee />}></Route>
            <Route path=':employeeId/details' element={<EmployeeDetails />}></Route>
            <Route path='create' element={<CreateEmployee />}></Route>
          </Route>
          <Route path='rankings' element={<Rankings />}></Route>
          <Route path="help" element={<Help />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>

      </Routes>
    </div >

  );
}

export default App;
