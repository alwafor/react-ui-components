import React, { ReactNode } from 'react';
import { StatusIcon, StatusIconVariant } from './StatusIcon';
import styles from './StatusElement.module.css';
import clsx from 'clsx';

interface StatusElementProps {
  children: ReactNode;
  iconVariant: StatusIconVariant;
  className?: string;
}

const StatusElement = ({
  children,
  iconVariant,
  className,
}: StatusElementProps) => {
  return (
    <div className={clsx(styles.element, className)}>
      <StatusIcon className={styles.statusIcon} variant={iconVariant} />
      {children}
    </div>
  );
};

export default StatusElement;
