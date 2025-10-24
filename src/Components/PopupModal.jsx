import { Check, X } from "lucide-react";
import React from "react";

const PopupModal = ({ text, cb }) => {
  //   <button
  //     className="btn"
  //     onClick={() => document.getElementById("my_modal_5").showModal()}
  //   ></button>;

  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle text-center">
        <div className="modal-box">
          <p className="font-medium text-lg py-4">{text}</p>
          <div className="flex gap-2 justify-center">
            <button onClick={cb} className="btn btn-square bg-green-500 hover:bg-green-600 text-white">
              <Check />
            </button>
            <button
              onClick={() => document.getElementById("my_modal_5").close()}
              className="btn btn-square bg-rose-500 hover:bg-rose-700 text-white"
            >
              <X />
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default PopupModal;
