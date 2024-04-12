import { motion } from "framer-motion";

const HeaderSlide: React.FC = () => {
  return (
    <div style={{ position: "absolute", width: "100%", overflow: "hidden",minHeight:"110%",marginTop:"6rem" }}>
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
            position:"relative",
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
    </div>
  );
};

export default HeaderSlide;
