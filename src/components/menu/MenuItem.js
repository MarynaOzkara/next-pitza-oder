export default function MenuItem() {
  return (
    <div className="bg-gray-200 p-4 rounded-xl text-center hover:bg-white transition-all hover:shadow-md">
      <div className="text-center">
        <img
          className="max-h-auto max-w-32 mx-auto block"
          src="/pizza.png"
          alt="pizza"
        />
      </div>

      <h4 className="font-semibold text-xl my-3">Pepperoni Pizza</h4>
      <p className="text-gray-500 text-sm">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </p>
      <button className="bg-primary text-white mt-4 rounded-full px-8 py-2">
        Add to cart $12
      </button>
    </div>
  );
}
