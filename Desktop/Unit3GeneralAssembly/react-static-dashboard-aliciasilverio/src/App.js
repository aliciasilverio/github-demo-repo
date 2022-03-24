import logo from './logo.svg';
import './App.css';
import SideMenuComponent from './sideMenuComponent/sideMenuComponent'
import DashboardComponent from './dashboardComponent/dashboardComponent';

function App() {
  return (
    <div className="App">
      <SideMenuComponent></SideMenuComponent>
      <DashboardComponent></DashboardComponent>
    </div>
  );
}

export default App;
