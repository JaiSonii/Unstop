"use client";
import Welcome from "@/components/common/Welcome";
import ProfileCard from "../../components/home/ProfileCard";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type AuthResponse = {
  accessToken: string;
  refreshToken: string;
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: "male" | "female" | string;
  image: string;
};

const Home = () => {
  const router = useRouter();
  const [user, setUser] = useState<AuthResponse | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("auth_token");
    const raw = localStorage.getItem("auth_user");
    if (!token || !raw) {
      router.replace("/auth/login");
      return;
    }
    try {
      const parsed = JSON.parse(raw);
      setUser(parsed);
    } catch {
      router.replace("/auth/login");
    }
  }, [router]);

  const logout = () => {
    localStorage.removeItem("auth_token");
    localStorage.removeItem("auth_user");
    localStorage.removeItem("remember_me");
    router.replace("/auth/login");
  };

  if (!user) {
    return (
      <div className="min-h-[100svh] w-full grid place-items-center p-8">
        <p className="text-sm text-gray-500">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-[100svh] w-full flex items-center justify-center p-6 md:p-16 text-center bg-[#F4F4F4]">
      <div className="flex flex-col items-center gap-10 md:gap-16">
        <Welcome />
        <ProfileCard
          name={user?.firstName ? `${user.firstName} ${user.lastName ?? ""}`.trim() : "User"}
          email={user?.email ?? "user@example.com"}
          gender={user?.gender}
          onLogout={logout}
        />
      </div>
    </div>
  );
};

export default Home;