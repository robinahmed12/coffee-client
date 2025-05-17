import React from "react";
import Swal from "sweetalert2";

const Addcoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const coffeeData = Object.fromEntries(formData.entries());
    console.log(coffeeData);

    // create user

    fetch("http://localhost:3000/coffees", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(coffeeData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {

          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Coffee added successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <>
      <div className="min-h-screen bg-[#F4F3F0] flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 font-['Inter',_sans-serif]">
        {/* Background pattern - optional, similar to the image's subtle background if any */}
        {/* You might need to add a div here with a background image or SVG pattern if you want to replicate the top/bottom decorative borders */}
        {/* For simplicity, a solid background color is used here */}

        <div className="max-w-4xl w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-4xl font-extrabold text-[#331A15]">
              Add New Coffee
            </h2>
            <p className="mt-4 text-center text-sm text-gray-600 max-w-2xl mx-auto">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here.
            </p>
          </div>

          <form
            onSubmit={handleAddCoffee}
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
                    type="text"
                    autoComplete="off"
                    required
                    className="appearance-none rounded-md relative block w-full px-3 py-2.5 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-amber-500 focus:border-amber-500 focus:z-10 sm:text-sm bg-white"
                    placeholder="Enter coffee price"
                  />
                </div>

                <div>
                  <label
                    htmlFor="supplier"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Supplier
                  </label>
                  <input
                    id="supplier"
                    name="supplier"
                    type="text"
                    autoComplete="off"
                    required
                    className="appearance-none rounded-md relative block w-full px-3 py-2.5 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-amber-500 focus:border-amber-500 focus:z-10 sm:text-sm bg-white"
                    placeholder="Enter coffee supplier"
                  />
                </div>

                <div>
                  <label
                    htmlFor="category"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Category
                  </label>
                  <input
                    id="category"
                    name="category"
                    type="text"
                    autoComplete="off"
                    required
                    className="appearance-none rounded-md relative block w-full px-3 py-2.5 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-amber-500 focus:border-amber-500 focus:z-10 sm:text-sm bg-white"
                    placeholder="Enter coffee category"
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
                    type="text"
                    autoComplete="off"
                    required
                    className="appearance-none rounded-md relative block w-full px-3 py-2.5 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-amber-500 focus:border-amber-500 focus:z-10 sm:text-sm bg-white"
                    placeholder="Enter coffee taste"
                  />
                </div>

                <div>
                  <label
                    htmlFor="details"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Details
                  </label>
                  <input
                    id="details"
                    name="details"
                    type="text"
                    autoComplete="off"
                    required
                    className="appearance-none rounded-md relative block w-full px-3 py-2.5 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-amber-500 focus:border-amber-500 focus:z-10 sm:text-sm bg-white"
                    placeholder="Enter coffee details"
                  />
                </div>
              </div>
            </div>

            {/* Photo URL - Spans full width */}
            <div className="pt-2">
              {" "}
              {/* Added pt-2 for slight separation, adjust as needed */}
              <label
                htmlFor="photo"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Photo
              </label>
              <input
                id="photo"
                name="photo"
                type="url"
                autoComplete="off"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2.5 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-amber-500 focus:border-amber-500 focus:z-10 sm:text-sm bg-white"
                placeholder="Enter photo URL"
              />
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-lg font-medium rounded-md text-[#331A15] bg-[#D2B48C] hover:bg-[#c8a97e] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-700 mt-6"
              >
                Add Coffee
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Addcoffee;
