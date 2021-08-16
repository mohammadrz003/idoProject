import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import {
  JoinModal,
  JoinNowButton,
  PoolInputValue,
} from "../style/JoinPoolModal.style";
import JoinPoolRadioGroup from "./JoinPoolRadioGroup";

const JoinPoolModal = ({ isOpen, setIsOpen }) => {
  function closeJoinPoolModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          onClose={closeJoinPoolModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <JoinModal className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded">
                <Dialog.Title
                  as="h3"
                  className="text-2xl font-semibold leading-6"
                >
                  Buy your token right now
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-base text-gray-300 font-medium">
                    some plans available.
                  </p>
                </div>

                <JoinPoolRadioGroup />
                <p className="text-gray-400 text-xs mb-2">
                Enter your purchase amount
                </p>

                <PoolInputValue placeholder="Purchase amount" />
                <JoinNowButton
                  className="text-lg font-semibold mt-2 rounded"
                  type="button"
                >
                  Join Now
                </JoinNowButton>
              </JoinModal>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default JoinPoolModal;
