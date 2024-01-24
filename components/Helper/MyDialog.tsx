import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, ReactNode } from "react";
import { AiOutlineClose } from "react-icons/ai";

interface MyDialogProps {
  dialogTitle: string;
  children: ReactNode;
  isModalOpen: boolean;
  closeModal(): void;
}

export const MyDialog = ({
  dialogTitle,
  children,
  isModalOpen,
  closeModal,
}: MyDialogProps) => {
  return (
    <Transition appear show={isModalOpen} as={Fragment}>
      <Dialog onClose={() => {}}>
        <Transition.Child
          as="div"
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div onClick={closeModal} className="fixed inset-0 z-30 bg-black bg-opacity-25" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Dialog.Panel className="flex-col w-full h-full  md:w-10/12 lg:w-2/4 md:h-[75vh] bg-primary-50 md:rounded-md absolute z-30 flex inset-0 m-auto">
            <div className="font-semibold py-4 h-16 border-b w-11/12 mx-auto inset-0 sticky text-2xl flex items-center justify-between z-10">
              <h4 className="text-lg text-[#23A6F0] md:text-xl text-center">{dialogTitle}</h4>
              <AiOutlineClose
                onClick={closeModal}
                className="h-fit w-fit text-2xl cursor-pointer"
              />
            </div>
            <div className="w-11/12 mx-auto mt-4 overflow-y-auto px-3 pb-20">{children}</div>
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};
