import React from 'react';
import { motion } from "framer-motion";
import styles from './menu-toggle.module.scss';
import { useTheme } from "~/theme";

const Path = props => (
  <motion.path
    fill="transparent"
    strokeWidth="3"

    strokeLinecap="round"
    transition={{ duration: 0.3 }}
    {...props}
  />
);

export const MenuToggle = ({ toggle }) => {
  const { colors } = useTheme();
  return (
  <button className={styles['button']} onClick={toggle}>
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5", stroke: colors.inactiveMenu },
          open: { d: "M 3 16.5 L 17 2.5", stroke: colors.activeMenu }
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1, stroke: colors.inactiveMenu },
          open: { opacity: 0, stroke: colors.activeMenu }
        }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346", stroke: colors.inactiveMenu },
          open: { d: "M 3 2.5 L 17 16.346", stroke: colors.activeMenu }
        }}
      />
    </svg>
  </button>
)};
