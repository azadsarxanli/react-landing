import { motion } from "framer-motion";
import "./App.scss";

export const MyComponent = () => {
  const list = { visible: { opacity: 1 } };
  const item = { visible: { x: 40, opacity: 1 } };

  return (
    <motion.ul className="nav" animate="visible" variants={list}>
      <motion.li variants={item}>helli</motion.li>
      <motion.li variants={item}>helli</motion.li>
      <motion.li variants={item}>helli</motion.li>
    </motion.ul>
  );
};
