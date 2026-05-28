"use client";

import { useEffect } from "react";

export default function AutoRedirect() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "https://www.instacoinxpay.com/getstarted";
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  return null;
}
