"use client";

import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";

const LogoutComponent = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const response = await fetch("/api/logout", {
        method: "GET",
      });
      const data = await response.json();

      if (response.status === 200 && data.message === "Logout Success") {
        router.push("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Button type="button" onClick={handleLogout}>
      Logout
    </Button>
  );
};

export default LogoutComponent;
