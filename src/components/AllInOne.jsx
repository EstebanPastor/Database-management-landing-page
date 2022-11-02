import { AiFillCheckCircle } from "react-icons/ai";

const AllInOne = () => {
  return (
    <div name="platforms" className="w-full my-32">
      <div className="max-w-[1240px] mx-auto px-2">
        <h2 className="text-5xl font-bold text-center">All-In-One Platform</h2>
        <p className="text-2xl py-8 text-gray-500 text-center">
          All your products only in one platform
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          <div className="flex">
            <div>
              <AiFillCheckCircle className="w-7 mr-4 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Cloud storage</h3>
              <p className="text-lg pt-2 pb-4">
                Work with the best cloud companies
              </p>
            </div>
          </div>
          <div className="flex">
            <div>
              <AiFillCheckCircle className="w-7 mr-4 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Security</h3>
              <p className="text-lg pt-2 pb-4">
                All your files are safe with us
              </p>
            </div>
          </div>
          <div className="flex">
            <div>
              <AiFillCheckCircle className="w-7 mr-4 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Unlimited storage</h3>
              <p className="text-lg pt-2 pb-4">
                With the best plans for unlimited storage
              </p>
            </div>
          </div>
          <div className="flex">
            <div>
              <AiFillCheckCircle className="w-7 mr-4 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Low prices</h3>
              <p className="text-lg pt-2 pb-4">
                Low and excellent prices for companies
              </p>
            </div>
          </div>
      
        
          </div>
        </div>
      </div>
   
  );
};

export default AllInOne;
