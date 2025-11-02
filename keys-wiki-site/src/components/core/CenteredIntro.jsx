import React from 'react';
import clsx from 'clsx';
import styles from './CenteredIntro.module.css';

// Props:
// - icon: a React element (optional)
// - children: intro text
// - gradientFrom, gradientTo: color values for the background gradient
// - className: additional CSS classes
export default function CenteredIntro({
    icon,
    children,
    color,
    className,
}) {
    return (
        <div
            className={clsx(styles.container, className)}
            style={color ? { '--intro-bg': color } : {}}
        >
            {icon && <span className={styles.icon}>{icon}</span>}
            <div className={styles.introText}>{children}</div>
        </div>
    );
}
