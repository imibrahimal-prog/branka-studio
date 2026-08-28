"use client";

import React, { createContext, useContext, useState, useCallback } from "react";

type ServiceModalContextType = {
  isOpen: boolean;
  selectedService: string;
  openModal: (service?: string) => void;
  closeModal: () => void;
};

const ServiceModalContext = createContext<ServiceModalContextType | undefined>(
  undefined,
);

export function ServiceModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const openModal = useCallback((service?: string) => {
    if (service) {
      setSelectedService(service);
    }
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <ServiceModalContext.Provider
      value={{ isOpen, selectedService, openModal, closeModal }}
    >
      {children}
    </ServiceModalContext.Provider>
  );
}

export function useServiceModal() {
  const context = useContext(ServiceModalContext);
  if (!context) {
    throw new Error(
      "useServiceModal must be used within a ServiceModalProvider",
    );
  }
  return context;
}
