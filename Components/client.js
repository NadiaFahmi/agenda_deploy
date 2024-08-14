"use client";
import "react-toastify/dist/ReactToastify.css";
import { Toaster } from "react-toastify";

export default function Client({ children }) {
  return (
    <>
      {children}
      < Toaster theme="dark" />
    </>
  );
}
