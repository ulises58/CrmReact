import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div>
      <h1 className="text-6xl font-bold">CRM - REACT</h1>
      <Outlet />
    </div>
  );
};
