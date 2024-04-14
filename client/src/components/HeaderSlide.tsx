import { motion } from "framer-motion";
const HeaderSlideContainer: React.FC = () => {
  return (
    <motion.div
      style={{
        position: "relative",
        // top:"30rem",
        left: "-80%",
        width: "200%",
        userSelect: "none",
      }}
    >
      <div
        style={{
          position: "relative",
          whiteSpace: "nowrap",
          // display: "flex",
          // flexDirection: "column",
          color: "#0a2019",
          transform: "rotate(330deg)",
          zIndex: "1",
        }}
      >
        {[...Array(29)].map((_, index) => (
          <motion.h1 key={index}>
            HIGHWAY'S 24 HIGHWAY'S 24 HIGHWAY'S 24 HIGHWAY'S 24 HIGHWAY'S 24
            HIGHWAY'S 24 HIGHWAY'S 24 HIGHWAY'S 24 HIGHWAY'S 24 HIGHWAY'S 24
            HIGHWAY'S 24 HIGHWAY'S 24 HIGHWAY'S 24 HIGHWAY'S 24 HIGHWAY'S 24
            HIGHWAY'S 24 HIGHWAY'S 24 HIGHWAY'S 24 HIGHWAY'S 24 HIGHWAY'S 24
            <br />
            HIGHWAY'S 24 HIGHWAY'S 24 HIGHWAY'S 24 HIGHWAY'S 24 HIGHWAY'S 24
            HIGHWAY'S 24 HIGHWAY'S 24 HIGHWAY'S 24 HIGHWAY'S 24 HIGHWAY'S 24
            HIGHWAY'S 24 HIGHWAY'S 24 HIGHWAY'S 24 HIGHWAY'S 24 HIGHWAY'S 24
            HIGHWAY'S 24 HIGHWAY'S 24 HIGHWAY'S 24 HIGHWAY'S 24 HIGHWAY'S 24
            HIGHWAY'S 24 HIGHWAY'S 24 HIGHWAY'S 24 HIGHWAY'S 24 HIGHWAY'S 24
            HIGHWAY'S 24 HIGHWAY'S 24 HIGHWAY'S 24 HIGHWAY'S 24 HIGHWAY'S 24
            HIGHWAY'S 24 HIGHWAY'S 24 HIGHWAY'S 24 HIGHWAY'S 24 HIGHWAY'S 24
            HIGHWAY'S 24 HIGHWAY'S 24 HIGHWAY'S 24 HIGHWAY'S 24 HIGHWAY'S 24
            HIGHWAY'S 24 HIGHWAY'S 24 HIGHWAY'S 24 HIGHWAY'S 24 HIGHWAY'S 24
            HIGHWAY'S 24 HIGHWAY'S 24 HIGHWAY'S 24 HIGHWAY'S 24 HIGHWAY'S 24
            HIGHWAY'S 24 HIGHWAY'S 24 HIGHWAY'S 24 HIGHWAY'S 24 HIGHWAY'S 24
            HIGHWAY'S 24 HIGHWAY'S 24 HIGHWAY'S 24 HIGHWAY'S 24 HIGHWAY'S 24
            HIGHWAY'S 24 HIGHWAY'S 24 HIGHWAY'S 24 HIGHWAY'S 24 HIGHWAY'S 24
            HIGHWAY'S 24 HIGHWAY'S 24 HIGHWAY'S 24 HIGHWAY'S 24 HIGHWAY'S 24
            HIGHWAY'S 24 HIGHWAY'S 24 HIGHWAY'S 24 HIGHWAY'S 24 HIGHWAY'S 24
            HIGHWAY'S 24 HIGHWAY'S 24 HIGHWAY'S 24 HIGHWAY'S 24 HIGHWAY'S 24
            HIGHWAY'S 24 HIGHWAY'S 24 HIGHWAY'S 24 HIGHWAY'S 24 HIGHWAY'S 24
            HIGHWAY'S 24 HIGHWAY'S 24 HIGHWAY'S 24 HIGHWAY'S 24 HIGHWAY'S 24
            HIGHWAY'S 24 HIGHWAY'S 24 HIGHWAY'S 24 HIGHWAY'S 24 HIGHWAY'S 24
            HIGHWAY'S 24 HIGHWAY'S 24 HIGHWAY'S 24 HIGHWAY'S 24 HIGHWAY'S 24
          </motion.h1>
        ))}
      </div>
    </motion.div>
  );
};
export default HeaderSlideContainer;
