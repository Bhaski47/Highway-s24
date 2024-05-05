import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { useLocation } from "react-router-dom";
import { useWindowSize } from "react-use";
const ConfettiPopper: React.FC = () => {
  const location = useLocation();
  const [isSponsor, setisSponsor] = useState<boolean>(false);
  useEffect(() => {
    const pathsMatch = "/sponsors" === window.location.pathname;
    setisSponsor(pathsMatch);
  }, [location.pathname]);
  const { width, height } = useWindowSize();
  return (
    <>
      {isSponsor ? (
        <Confetti
          width={width}
          style={{ position: "fixed", overflow: "hidden" }}
          height={height}
          recycle={false}
        />
      ) : (
        <></>
      )}
    </>
  );
};
export default ConfettiPopper;
