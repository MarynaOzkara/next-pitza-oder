import Image from "next/image";
import MenuItem from "../menu/MenuItem";
import SectionHeders from "./SectionHeders";

export default function HomeMenu() {
  return (
    <section>
      <div className="relative h-full w-full">
        <div className="absolute -left-4 -top-36 -z-10">
          <Image src={"/sallad1.png"} width={109} height={189} alt={"sallad"} />
        </div>
        <div className="absolute -right-4 -top-[200px] -z-10">
          <Image src={"/sallad2.png"} width={107} height={195} alt={"sallad"} />
        </div>
      </div>
      <div className="text-center">
        <SectionHeders subHeader="Check out" mainHeader="Menu" />
      </div>
      <div className="grid grid-cols-3 gap-4 py-4">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </section>
  );
}
