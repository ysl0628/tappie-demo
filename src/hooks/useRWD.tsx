import { useEffect, useState } from "react";

export default function useRWD() {
  const [device, setDevice] = useState("PC");
  const handleRWD = () => {
    if (window.innerWidth > 767) {
      setDevice("PC");
      return;
    }
    if (window.innerWidth < 767) setDevice("mobile");
  };

  useEffect(() => {
    window.addEventListener("resize", handleRWD);
    handleRWD();
    return () => {
      window.removeEventListener("resize", handleRWD);
    };
  }, []);
  return device;
}
