import React from 'react';
import clsx from 'clsx';
import styles from './LeftAlignBody.module.css';

// Props:
// - children: body content
// - className: additional CSS classes
export default function LeftAlignBody({ children, className }) {
    return (
        <div className={clsx(styles.container, className)}>
            <div className={styles.bodyText}>{children}</div>
        </div>
    );
}
