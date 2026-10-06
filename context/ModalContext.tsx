"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface ModalContextType {
  isDonationOpen: boolean;
  openDonation: (plan?: string) => void;
  closeDonation: () => void;
  selectedPlan: string;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isDonationOpen, setIsDonationOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("full");

  const openDonation = (plan = "full") => {
    setSelectedPlan(plan);
    setIsDonationOpen(true);
  };

  const closeDonation = () => {
    setIsDonationOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{
        isDonationOpen,
        openDonation,
        closeDonation,
        selectedPlan,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}
