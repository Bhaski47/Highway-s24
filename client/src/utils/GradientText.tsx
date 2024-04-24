import React from "react";

interface GradientTextProps {
  text: string;
  gradient: string;
  wing: string;
  roleName: string;
}

const GradientText: React.FC<GradientTextProps> = ({
  text,
  gradient,
  wing,
  roleName,
}) => {
  const style: React.CSSProperties = {
    backgroundImage: gradient,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    color: "transparent",
  };

  return (
    <>
      {roleName === "null" ? (
        <h1 style={style}>{text}</h1>
      ) : roleName === "techteam" ? (
        <h3>Role: <span style={style}>{text}</span></h3>
      ) : roleName === "designteam" ? (
        <h3>Role: <span style={style}>{text}</span></h3>
      ) : (
        <h1 style={style}>{text}</h1>
      )}
    </>
  );
};

export default GradientText;
