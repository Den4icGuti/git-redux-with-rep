import { Layout } from "./Layout";
import { DashBoardPage } from "pages";
import { LoginForm } from './LoginForm';
import { Routes, Route,Navigate } from "react-router-dom";


export const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="login" element={<LoginForm />} />
      {/* <Route path="dashboard" element={<DashBoardPage />} /> */}
      <Route path="*" element={<Navigate to="/" replace />} />
      
    </Routes>
  );
};
