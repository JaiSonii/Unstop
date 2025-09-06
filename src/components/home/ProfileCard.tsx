"use client";
import Image from "next/image";
import assets from "@/assets";
import { Button } from "@/components/ui/button";

type Props = {
  name: string;
  email: string;
  gender?: string;
  onLogout: () => void;
};

const ProfileCard: React.FC<Props> = ({ name, email, gender, onLogout }) => {
  return (
    <div className="flex flex-col gap-3 border border-[#E2E2E2] rounded-[20px] p-5 w-full max-w-[340px] shadow-sm bg-white">
      <div className="w-[120px] h-[120px] rounded-full overflow-hidden mx-auto">
        <Image src={assets.profileImg} alt="Profile Image" width={120} height={120} className="object-cover" />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-center font-bold text-lg text-[#6358DC]">{name}</p>
        <div>
          <p className="text-center font-medium text-xs">{email}</p>
          {gender && <p className="text-center font-medium text-xs">{gender}</p>}
        </div>
      </div>
      <Button onClick={onLogout} className="border-none rounded-xl cursor-pointer">
        Logout
      </Button>
    </div>
  );
};

export default ProfileCard;