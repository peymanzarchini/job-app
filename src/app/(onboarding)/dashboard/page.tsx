import LogoutComponent from "@/components/auth/logout/LogoutComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
};

const Dashboard = () => {
  return (
    <div>
      Dashboard
      <LogoutComponent />
    </div>
  );
};

export default Dashboard;
