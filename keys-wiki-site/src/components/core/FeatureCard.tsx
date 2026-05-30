import React from 'react';
import Link from '@docusaurus/Link';
import styles from './FeatureCard.module.css';

interface FeatureCardProps {
  title: string;
  description: React.ReactNode;
  href?: string;
  icon?: React.ReactNode;
  badge?: string;
  tags?: string[];
}

export default function FeatureCard({
  title,
  description,
  href,
  icon,
  badge,
  tags,
}: FeatureCardProps) {
  const CardContent = (
    <>
      <div className={styles.cardHeader}>
        {icon && <div className={styles.iconWrapper}>{icon}</div>}
        {badge && <span className={styles.badge}>{badge}</span>}
      </div>
      
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
      
      {tags && tags.length > 0 && (
        <div className={styles.tagsContainer}>
          {tags.map((tag) => (
            <span key={tag} className={styles.tagPill}>
              {tag}
            </span>
          ))}
        </div>
      )}
      
      {href && (
        <div className={styles.learnMore}>
          <span>Explore Details</span>
          <svg className={styles.arrowIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      )}
    </>
  );

  if (href) {
    return (
      <Link to={href} className={styles.cardLink}>
        <div className={styles.cardContainer}>
          {CardContent}
        </div>
      </Link>
    );
  }

  return (
    <div className={styles.cardContainer}>
      {CardContent}
    </div>
  );
}
