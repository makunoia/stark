import React from "react";
import { Transition } from "@headlessui/react";

const ModalWrapper = ({ show, children, onClick }) => {
  return (
    <div className="z-10 overflow-hidden ">
      <Transition
        show={show}
        enter="transition-all ease-in-out duration-300"
        enterFrom="opacity-0 pointer-events-none"
        enterTo="opacity-1 pointer-events-auto"
        leave="transition-all ease-in-out duration-300"
        leaveFrom="opacity-1 pointer-events-auto"
        leaveTo="opacity-0 pointer-events-none"
      >
        <div
          className="h-full w-full flex fixed top-0 align-center justify-center pt-[10%] left-0 bottom-0 right-0 bg-black/80"
          onMouseDown={onClick}
        >
          <Transition.Child
            enter="transition-all ease-in-out duration-300"
            enterFrom="opacity-0 translate-y-24px pointer-events-none"
            enterTo="opacity-1 translate-y-0 pointer-events-auto"
            leave="transition-all ease-in-out duration-300"
            leaveFrom="opacity-1 translate-y-0 pointer-events-auto"
            leaveTo="opacity-0 translate-y-24px pointer-events-none"
          >
            {children}
          </Transition.Child>
        </div>
      </Transition>
    </div>
  );
};

export default ModalWrapper;
