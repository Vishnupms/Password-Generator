import icon from "./assets/icons.png";
import "./PasswordGen.css";

function PasswordGen() {
  return (
    <>
      <div className="md:w-96 mx-auto p-4 bg-white rounded shadow-xl">
        <h2 className="text-2xl font-bold mb-4">Password Generator</h2>

        <div className="w-full h-12">
          <div className="flex items-center h-full">
            <div className="relative w-full h-full rounded-md">
              <input
                className="w-full h-full px-4 text-lg bg-blue-200 rounded-md outline-none"
                type="text"
                value=""
                disabled
                placeholder="Click on the Generate Password"
              />
              <img
                src={icon}
                alt="copyicon"
                className="absolute top-1/2 right-0 transform -translate-y-1/2 w-12 h-full p-3 bg-blue-500 rounded-r-md cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div className="m-2">
          <div className="flex justify-start">

          </div>
        </div>

        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Generate Password
        </button>
      </div>
    </>
  );
}

export default PasswordGen;
