// src/components/RouteChangeTracker.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

const RouteChangeTracker = () => {
  const location = useLocation();

  useEffect(() => {
    NProgress.start();
    const timeout = setTimeout(() => {
      NProgress.done();
    }, 900); // Delay to ensure visual feedback

    return () => clearTimeout(timeout);
  }, [location]);

  return null;
};

export default RouteChangeTracker;
