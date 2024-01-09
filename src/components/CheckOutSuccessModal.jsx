import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { IoMdCheckmark } from "react-icons/io";
import { useGlobalData } from "../contexts/DataContext";

export default function MyModal() {
  const [isModalOpen, setIsModalOpen] = useOutletContext();
  const navigate = useNavigate();
  const { state } = useGlobalData();
  const cartItem = state.cart;
  const substringsToRemove = ["headphones", "speaker", "earphones"];
  const calculateTotal = () => {
    return cartItem.reduce((total, item) => {
      return total + item.price * item?.quantity;
    }, 0);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    navigate("/checkout");
  };
  const backToHome = () => {
    setIsModalOpen(false);
    navigate("/home");
  };
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center"></div>

      <Transition appear show={isModalOpen} as={Fragment}>
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

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center  sm:mt-24 sm:items-start">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className=" transform overflow-hidden rounded-2xl bg-white p-8  shadow-xl transition-all sm:p-12">
                  <Dialog.Title
                    as="h3"
                    className="w-full text-lg font-medium leading-6 text-gray-900"
                  >
                    {cartItem.length === 0 ? null : (
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#D87D4A] sm:mb-9">
                        <IoMdCheckmark className="h-8 w-8 fill-white" />
                      </div>
                    )}
                  </Dialog.Title>
                  {cartItem.length === 0 ? (
                    <p className="mt-10 h-[100px] w-[400px] text-center">
                      Your cart is empty
                    </p>
                  ) : (
                    <div>
                      <div className="pt-6">
                        <p className="text-2xl font-bold uppercase leading-7 tracking-[0.9px] sm:w-[330px] sm:text-[32px] sm:leading-9 sm:tracking-[1.143px]">
                          THANK YOU FOR YOUR ORDER
                        </p>
                        <p className="mt-4 text-[15px] leading-[25px] sm:mb-8">
                          You will receive an email confirmation shortly.
                        </p>
                      </div>
                      <div className="flex flex-col sm:flex-row">
                        <div className="">
                          <div className="mt-6 flex h-[140px] w-[300px] flex-col rounded-lg bg-[#F1F1F1] px-8  pt-8 sm:mt-0 sm:rounded-lg">
                            <div className="flex  flex-row justify-between border-b border-black/20 pb-3">
                              <div className=" flex flex-row justify-between  ">
                                <img
                                  className="mr-7 h-12 w-12"
                                  src={cartItem[0]?.cartImg}
                                />
                                <div className="flex flex-col">
                                  <p className="text-[15px] font-bold uppercase leading-6">
                                    {cartItem[0]?.name
                                      .replace(
                                        new RegExp(
                                          substringsToRemove.join("|"),
                                          "gi",
                                        ),
                                        "",
                                      )
                                      .trim()}
                                  </p>
                                  <p className="mt-1 text-sm opacity-50">
                                    ${cartItem[0]?.price}
                                  </p>
                                </div>
                              </div>
                              <p className="pl-11">x{cartItem[0]?.quantity}</p>
                            </div>
                            <p className="mt-3 text-center text-[12px] font-bold tracking-[-0.214px] opacity-50">
                              and {cartItem.length - 1} other item(s)
                            </p>
                          </div>
                        </div>
                        <div className="flex w-[300px] flex-col rounded-b-lg bg-black px-6 text-white sm:h-[140px] sm:w-[200px] sm:items-center sm:justify-center sm:rounded-b-none  sm:rounded-r-lg sm:rounded-tr-lg">
                          <p className="self-start pb-2 pt-4 text-[15px] font-medium leading-6 opacity-50 sm:pt-0 ">
                            GRAND TOTAL
                          </p>

                          <p className="self-start pb-5 text-lg font-bold uppercase">
                            $ {calculateTotal()}
                          </p>
                        </div>
                      </div>
                      <div className="mt-4">
                        <button
                          type="button"
                          className="h-12 w-full cursor-pointer bg-[#D87D4A] text-center text-[13px] font-bold uppercase tracking-[1px] text-white hover:bg-[#FBAF85] sm:mt-12"
                          onClick={backToHome}
                        >
                          BACK TO HOME
                        </button>
                      </div>
                    </div>
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
