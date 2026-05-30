import React from 'react';
import styles from './CardGrid.module.css';

interface CardGridProps {
  children: React.ReactNode;
}

export default function CardGrid({ children }: CardGridProps) {
  return (
    <div className={styles.grid}>
      {children}
    </div>
  );
}
