import Image from "next/image";
import bg from "../../public/background/home-background.png";
import RenderModel from "../../src/app/components/RenderModel";
import Wizard from "./components/models/Wizard";
import Navigation from "../app/components/navigation/index"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      {/* Web Background */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Image src={bg} alt="background-image" fill className="object-cover object-center opacity-40" />
      </div>
      <div className="w-full h-screen relative z-10">
        {/* Navigation and 3D model */}
        <Navigation/>
        <RenderModel>
          <Wizard />
        </RenderModel>
      </div>
    </main>
  );
}
