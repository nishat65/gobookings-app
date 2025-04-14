// src/contexts/AlertProvider.tsx
import { createContext, useContext, ReactNode } from "react";
import { ToastContainer, toast, ToastOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Define the context type
interface AlertContextType {
  success: (message: string, options?: ToastOptions) => void;
  error: (message: string, options?: ToastOptions) => void;
  info: (message: string, options?: ToastOptions) => void;
  warn: (message: string, options?: ToastOptions) => void;
}

// Create context
const AlertContext = createContext<AlertContextType | undefined>(undefined);

// Provider component
export const AlertProvider = ({ children }: { children: ReactNode }) => {
  const success = (message: string, options?: ToastOptions) =>
    toast.success(message, options);
  const error = (message: string, options?: ToastOptions) =>
    toast.error(message, options);
  const info = (message: string, options?: ToastOptions) =>
    toast.info(message, options);
  const warn = (message: string, options?: ToastOptions) =>
    toast.warn(message, options);

  return (
    <AlertContext.Provider value={{ success, error, info, warn }}>
      <ToastContainer position="top-right" autoClose={3000} theme="colored" />
      {children}
    </AlertContext.Provider>
  );
};

// Custom hook to use alert
export const useAlert = (): AlertContextType => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error("useAlert must be used within an AlertProvider");
  }
  return context;
};
