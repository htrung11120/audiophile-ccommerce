import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useGlobalData } from "../contexts/DataContext";

import Cartitems from "./Cartitems";
import { useNavigate } from "react-router-dom";

const CartModal = ({ closeModal, isOpen }) => {
  const { state, dispatch } = useGlobalData();
  const navigate = useNavigate();
  function checkout() {
    navigate("/checkout");
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto ">
            <div className="flex min-h-full items-center justify-center p-4 text-center sm:mt-28 sm:items-start sm:justify-end sm:pr-8">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all sm:p-10">
                  <Dialog.Title className="">
                    <div className="flex flex-row  justify-between tracking-[1.3px] sm:mt-8">
                      <div className="flex flex-row gap-1 text-xl font-bold uppercase">
                        <p>cart</p>
                        <p>({state.cart.length})</p>
                      </div>
                      <p
                        className="text-[15px] leading-[25px] underline decoration-black/30  opacity-50"
                        onClick={() => {
                          dispatch({ type: "REMOVE_ALL" });
                        }}
                      >
                        Remove all
                      </p>
                    </div>
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="mt-8 text-sm text-gray-500"></p>
                  </div>
                  <Cartitems />

                  <div className="mt-4">
                    <button
                      type="button"
                      className="h-12 w-full bg-[#D87D4A] text-[13px] font-bold uppercase tracking-[] text-white"
                      onClick={checkout}
                    >
                      checkout
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CartModal;
