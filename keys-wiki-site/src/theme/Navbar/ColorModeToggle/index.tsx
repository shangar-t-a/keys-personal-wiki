import React from 'react';
import NavbarColorModeToggleOriginal from '@theme-original/Navbar/ColorModeToggle';
import ThemePaletteToggle from '@site/src/components/core/ThemePaletteToggle';
import clsx from 'clsx';
import styles from './styles.module.css';

export interface Props {
  className?: string;
  buttonClassName?: string;
}

export default function NavbarColorModeToggle(props: Props): JSX.Element {
  return (
    <div className={clsx(styles.appearanceControlsGroup, props.className)}>
      <ThemePaletteToggle />
      <span className={styles.separator} aria-hidden="true" />
      <NavbarColorModeToggleOriginal {...props} className={undefined} />
    </div>
  );
}
