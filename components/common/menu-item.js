import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import styles from './menu-item.module.scss';
import useTranslation from '~/hooks/useTranslation';

const ItemText = styled.div`
  font-size: 18px;
  color: ${({theme})=>theme.text}
`;

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MenuItem = ({ item, index, children }) => {
  const { t } = useTranslation();
  return (
    <motion.li
      className={styles.li}
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {children ? children : <ItemText>{t(item.label)}</ItemText>}
    </motion.li>
  );
};
