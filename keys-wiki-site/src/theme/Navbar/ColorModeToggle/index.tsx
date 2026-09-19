import React from 'react';
import { useColorMode, useThemeConfig } from '@docusaurus/theme-common';
import ColorModeToggle from '@theme/ColorModeToggle';
import ThemePaletteToggle from '@site/src/components/core/ThemePaletteToggle';
import clsx from 'clsx';
import styles from './styles.module.css';

export interface Props {
  className?: string;
  buttonClassName?: string;
}

export default function NavbarColorModeToggle({
  className,
  buttonClassName,
}: Props): JSX.Element | null {
  const navbarStyle = useThemeConfig().navbar.style;
  const { disableSwitch, respectPrefersColorScheme } = useThemeConfig().colorMode;
  const { colorModeChoice, setColorMode } = useColorMode();

  return (
    <div className={clsx(styles.appearanceControlsGroup, className)}>
      <ThemePaletteToggle />
      {!disableSwitch && (
        <ColorModeToggle
          className={className}
          buttonClassName={
            navbarStyle === 'dark' ? styles.darkNavbarColorModeToggle : buttonClassName
          }
          respectPrefersColorScheme={respectPrefersColorScheme}
          value={colorModeChoice}
          onChange={setColorMode}
        />
      )}
    </div>
  );
}
