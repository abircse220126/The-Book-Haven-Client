import axios from "axios";
import React from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const UpdateModal = ({ updateInfo, onClose, bookId }) => {
  const navigate = useNavigate();

  const handleUpdate = (updateInfo) => {
    console.log("update button is clicked", updateInfo);

    axios
      .patch(`http://localhost:3000/update-book/${bookId}`, updateInfo)
      .then((res) => {
        console.log(res.data);
        onClose();
        Swal.fire({
          title: "Book is Updated",
          width: 600,
          padding: "3em",
          color: "#716add",
          background: "#fff url(/images/trees.png)",
          backdrop: `
    rgba(0,0,123,0.4)
    url("/images/nyan-cat.gif")
    left top
    no-repeat
  `,
        });
        navigate("/mybook");
      });
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      {/* Modal Box */}
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 text-center">
        {/* Icon */}
        <div className="mx-auto mb-4 flex items-center justify-center w-14 h-14 rounded-full bg-blue-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7 text-blue-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01M12 3a9 9 0 100 18 9 9 0 000-18z"
            />
          </svg>
        </div>

        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Confirm Update
        </h2>

        {/* Message */}
        <p className="text-gray-600 mb-6">
          Are you sure you want to update this information?
        </p>

        {/* Actions */}
        <div className="flex justify-center gap-4">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-lg border text-gray-600 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={() => handleUpdate(updateInfo)}
            className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
          >
            Yes, Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateModal;
