import React from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
  const { photo, name, price, _id } = coffee;

  const handleDelete = (_id) => {

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {



        fetch(`http://localhost:3000/coffees/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <>
      <div>
        <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
          <img
            src={photo}
            alt=""
            className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
          />
          <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
              <p className="dark:text-gray-800">${price}</p>
            </div>
            <div className="flex justify-between">
              <Link to={`/update/${_id}`}
                
                className="flex items-center justify-center  p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50"
              >
                Edit
              </Link>
              <Link to={`/details/${_id}`}
                className="flex items-center justify-center  p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50"
              >
                view
              </Link>
              <button
                onClick={() => handleDelete(_id)}
                type="button"
                className="flex items-center justify-center  p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoffeeCard;
