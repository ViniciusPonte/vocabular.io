import React, { createContext, useState, useContext, Component } from "react";

interface ModalContextProps {
    isVisible: boolean,
    setIsVisible: React.Dispatch<React.SetStateAction<boolean>>,
    modalContent: any,
    setModalContent: React.Dispatch<React.SetStateAction<any>>,
}

const ModalContext = createContext<ModalContextProps>({} as ModalContextProps);

export function ModalProvider({ children }) {
    const [isVisible, setIsVisible] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    return (
        <ModalContext.Provider value={{setIsVisible, isVisible, setModalContent, modalContent}}>
            {children}
        </ModalContext.Provider>
    );
}

export function useModal() {
  const context = useContext(ModalContext);
  const { setIsVisible, isVisible, setModalContent, modalContent } = context;
  return { setIsVisible, isVisible, setModalContent, modalContent };
}
