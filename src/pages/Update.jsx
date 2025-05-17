import React from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const Update = () => {
  const data = useLoaderData();
  const { price, name, taste, chef, _id } = data;
  console.log(_id);

  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updateCoffee = Object.fromEntries(formData.entries());
    console.log(updateCoffee);

    fetch(`http://localhost:3000/coffees/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Coffee update successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <>
      <h1>update</h1>

      <div className="min-h-screen bg-[#F4F3F0] flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 font-['Inter',_sans-serif]">
        {/* Background pattern - optional, similar to the image's subtle background if any */}
        {/* You might need to add a div here with a background image or SVG pattern if you want to replicate the top/bottom decorative borders */}
        {/* For simplicity, a solid background color is used here */}

        <div className="max-w-4xl w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-4xl font-extrabold text-[#331A15]">
              Update Coffee
            </h2>
          </div>

          <form
            onSubmit={handleUpdateCoffee}
            className="mt-8 space-y-6 bg-[#F4F3F0] p-8 md:p-12 rounded-lg"
          >
            {/* Input fields container */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {/* Left Column */}
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    defaultValue={name}
                    type="text"
                    autoComplete="off"
                    required
                    className="appearance-none rounded-md relative block w-full px-3 py-2.5 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-amber-500 focus:border-amber-500 focus:z-10 sm:text-sm bg-white"
                    placeholder="Enter coffee name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="price"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    price
                  </label>
                  <input
                    id="name"
                    name="price"
                    defaultValue={price}
                    type="text"
                    autoComplete="off"
                    required
                    className="appearance-none rounded-md relative block w-full px-3 py-2.5 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-amber-500 focus:border-amber-500 focus:z-10 sm:text-sm bg-white"
                    placeholder="Enter coffee price"
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="chef"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Chef
                  </label>
                  <input
                    id="chef"
                    name="chef"
                    defaultValue={chef}
                    type="text"
                    autoComplete="off"
                    required
                    className="appearance-none rounded-md relative block w-full px-3 py-2.5 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-amber-500 focus:border-amber-500 focus:z-10 sm:text-sm bg-white"
                    placeholder="Enter coffee chef"
                  />
                </div>

                <div>
                  <label
                    htmlFor="taste"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Taste
                  </label>
                  <input
                    id="taste"
                    name="taste"
                    defaultValue={taste}
                    type="text"
                    autoComplete="off"
                    required
                    className="appearance-none rounded-md relative block w-full px-3 py-2.5 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-amber-500 focus:border-amber-500 focus:z-10 sm:text-sm bg-white"
                    placeholder="Enter coffee taste"
                  />
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-lg font-medium rounded-md text-[#331A15] bg-[#D2B48C] hover:bg-[#c8a97e] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-700 mt-6"
              >
                Update Coffee
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Update;
