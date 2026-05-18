"use client";
import { useToastContext } from "@/app/providers/ToastProvider";
import { useEffect } from "react";

const Toast = () => {
  const { message, setMessage, visible, setVisible } = useToastContext();

  useEffect(() => {
    if (!message) return;

    setVisible(true);
    const timer = setTimeout(() => {
      setVisible(false);
      setMessage("");
    }, 3000);

    return () => clearTimeout(timer);
  }, [message, setMessage, setVisible]);

  return (
    <div
      className={`${!visible ? "hidden" : ""} fixed top-[10%] left-[50%] translate-x-[-50%] bg-(--platinum) px-4 py-2 text-(--graphite) rounded-lg shadow-lg border border-(--cloud)`}
    >
      <p>{message}</p>
    </div>
  );
};

export default Toast;
