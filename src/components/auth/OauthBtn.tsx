
import { Button } from "@/components/ui/button";
import Image, { StaticImageData } from "next/image";

type BtnProps = {
  icnLink: StaticImageData;
  text: string;
};

const OauthBtn: React.FC<BtnProps> = ({ icnLink, text }) => {
  return (
    <Button
      type="button"
      className="bg-white border border-[#E2E2E2] rounded-xl pt-6 flex items-center justify-center gap-2.5 p-6 text-black hover:text-white w-full"
    >
      <Image src={icnLink} alt="Provider logo" width={32} height={32} className="w-8 h-8 object-contain" />
      <span className="font-medium text-[16px]">{text}</span>
    </Button>
  );
};

export default OauthBtn