import React from 'react';
import { useThemeConfig } from '@docusaurus/theme-common';
import { useNavbarMobileSidebar } from '@docusaurus/theme-common/internal';
import NavbarItem from '@theme/NavbarItem';
import NavbarColorModeToggleOriginal from '@theme-original/Navbar/ColorModeToggle';
import ThemePaletteToggle from '@site/src/components/core/ThemePaletteToggle';
import styles from './styles.module.css';

function useNavbarItems() {
  return useThemeConfig().navbar.items;
}

export default function NavbarMobilePrimaryMenu(): JSX.Element {
  const mobileSidebar = useNavbarMobileSidebar();
  const items = useNavbarItems();

  return (
    <div className={styles.primaryMenuContainer}>
      {/* Prominent Appearance Section at the Top of Drawer */}
      <div className={styles.mobileAppearanceCard}>
        <div className={styles.cardHeader}>
          <span className={styles.cardHeaderIcon} aria-hidden="true">🎨</span>
          <span>Theme & Appearance</span>
        </div>
        <div className={styles.controlsRow}>
          <div className={styles.paletteWrapper}>
            <ThemePaletteToggle />
          </div>
          <div className={styles.modeWrapper}>
            <NavbarColorModeToggleOriginal />
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <ul className="menu__list">
        {items.map((item, i) => (
          <NavbarItem
            mobile
            {...(item as any)}
            onClick={() => mobileSidebar.toggle()}
            key={i}
          />
        ))}
      </ul>
    </div>
  );
}
