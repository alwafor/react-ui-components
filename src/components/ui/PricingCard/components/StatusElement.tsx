import React, { ReactNode } from 'react';
import { StatusIcon, StatusIconVariant } from './StatusIcon';

interface StatusElementProps {
  children: ReactNode;
  iconVariant: StatusIconVariant;
}

const StatusElement = ({ children, iconVariant }: StatusElementProps) => {
  return (
    <div>
      <StatusIcon variant={iconVariant} />
      {children}
    </div>
  );
};

export default StatusElement;
