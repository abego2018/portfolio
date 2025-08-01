import React from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import "../components/styles.css";

const ScrollToTopArrow = ({ onClick }) => {
  return (
    <div className="scroll-to-top-arrow" onClick={onClick}>
      <ArrowUpwardIcon color="primary" fontSize="large" />{" "}
    </div>
  );
};

export default ScrollToTopArrow;
