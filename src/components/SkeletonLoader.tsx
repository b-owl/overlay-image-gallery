import React from "react";
import "../styles/skeletonLoader.css";

interface SkeletonLoaderProps {
  width: string | number;
  height: string | number;
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ width, height }) => {
  return <div className="skeleton-loader" style={{ width, height }} />;
};

export default SkeletonLoader;
