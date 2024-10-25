import React, { useEffect, useState } from "react";

const PageLoading = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 8000);
  }, []);

  return <div>{loading && "PageLoading"}</div>;
};

export default PageLoading;
