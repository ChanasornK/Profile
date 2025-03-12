import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Picture from "./picture";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target.id === "modal-backdrop") {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="modal-backdrop"
          className="fixed inset-0 flex items-center justify-center bg-opacity-50 backdrop-blur-md z-50"
          onClick={handleBackdropClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-gray-100 p-6 rounded-lg shadow-lg xl:w-[900px] border-2 border-amber-300 w-[750px]"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-between items-center border-b pb-2">
              <h3 className="text-xl font-semibold text-[#976C62]">
                More Information
              </h3>
              <button
                onClick={onClose}
                className="text-black hover:text-red-500 cursor-pointer"
              >
                ✖
              </button>
            </div>

            <div className="mt-4">
              <Picture />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
