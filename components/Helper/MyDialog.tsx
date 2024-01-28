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
          <div onClick={closeModal} className="dialog_overlay" />
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
          <Dialog.Panel className="dialog_panel">
            <div className="dialog_panel_title_bg">
              <h4 className="dialog_title">{dialogTitle}</h4>
              <AiOutlineClose onClick={closeModal} className="dialog_close_icon" />
            </div>
            <div className="dialog_content">{children}</div>
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};
