"use client";

import React, { createContext } from "react";

type TourContextType = {
  tourCompleted: boolean;
  setTourCompleted: (value: boolean) => void;
};

export const TourContext = createContext<TourContextType>({
  tourCompleted: false,
  setTourCompleted: () => {},
});