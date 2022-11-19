import React, { ReactNode } from 'react';
import { StatusIcon, StatusIconVariant } from './StatusIcon';
import styles from './StatusElement.module.css';

interface StatusElementProps {
  children: ReactNode;
  iconVariant: StatusIconVariant;
}

const StatusElement = ({ children, iconVariant }: StatusElementProps) => {
  return (
    <div className={styles.element}>
      <StatusIcon className={styles.statusIcon} variant={iconVariant} />
      {children}
    </div>
  );
};

export default StatusElement;
