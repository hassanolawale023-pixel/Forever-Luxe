import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useNavigationLoader = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const navigateWithLoader = (path) => {
    setLoading(true);

    setTimeout(() => {
      navigate(path);
      setLoading(false);
    }, 50);
  };

  return { loading, navigateWithLoader };
};

export default useNavigationLoader;