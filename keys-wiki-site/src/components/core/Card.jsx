import React from 'react';
import styles from './Card.module.css';

export default function Card({ href, title, description }) {
    return (
        <a className={styles.card} href={href}>
            <div className={styles.cardHeader}>
                <h3>{title}</h3>
            </div>
            <p className={styles.cardDescription}>{description}</p>
        </a>
    );
}
