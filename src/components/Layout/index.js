import { Outlet } from 'react-router-dom';
import Topbar from '../Topbar'

const Layout = () =>{
  return (
    <div className="layout">
        <Topbar />
      <div className="main">
        <Outlet />
      </div>
    </div>
  );
}
export default Layout