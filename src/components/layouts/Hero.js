import Image from "next/image";
import Right from "../icons/Right";

export default function Hero() {
  return (
    <section className="hero py-8">
      <div className="py-24">
        <h1 className="text-4xl font-semibold">
          Everything
          <br /> is better
          <br /> with a <span className="text-primary">Pizza</span>
        </h1>
        <p className="my-8 text-gray-500">
          Pizza is the missing piece that makes every day complete,
          <br /> a simple yet delicious joy in life
        </p>
        <div className="flex gap-8  text-sm">
          <button className="bg-primary uppercase text-white px-4 py-2 rounded-full flex gap-2 items-center">
            Order now
            <Right />
          </button>
          <button className="flex gap-2 items-center py-2 text-gray-600 font-semibold">
            Learn more
            <Right />
          </button>
        </div>
      </div>

      <div className="relative">
        <Image
          src={"/pizza.png"}
          layout={"fill"}
          objectFit={"contain"}
          alt={"pizza"}
        />
      </div>
    </section>
  );
}
