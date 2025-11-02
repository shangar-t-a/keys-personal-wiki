import React from 'react';
import clsx from 'clsx';
import styles from './GradientHeading.module.css';

// Props:
// - icon: a React element (for SVG or icon)
// - children: heading text
// - as: the HTML tag to use ('h1', 'h2', etc.)
// - gradientFrom, gradientTo: color values for the gradient
export default function GradientHeading({
    icon,
    children,
    as: Tag = 'h1',
    gradientFrom = '#48b1f3',
    gradientMid = '#52e5e7',
    gradientTo = '#9f6eed',
    className,
}) {
    return (
        <Tag
            className={clsx(styles.container, className)}
            style={{
                '--gradient-from': gradientFrom,
                '--gradient-mid': gradientMid,
                '--gradient-to': gradientTo,
            }}
        >
            {icon && <span className={styles.icon}>{icon}</span>}
            <span className={styles.gradientText}>{children}</span>
        </Tag>
    );
}
