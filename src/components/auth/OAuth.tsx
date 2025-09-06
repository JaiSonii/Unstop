import OauthBtn from "./OauthBtn";
import assets from "@/assets";


const OAuth = () => {
  return (
    <div className="flex flex-col gap-4">
      <OauthBtn icnLink={assets.googleIcn} text="Login with Google" />
      <OauthBtn icnLink={assets.facebookIcn} text="Login with Facebook" />
    </div>
  );
};

export default OAuth;