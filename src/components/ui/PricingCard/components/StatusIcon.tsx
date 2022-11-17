import styles from './StatusIcon.module.css';
import clsx from 'clsx';

import { ReactComponent as IconCross } from './../../../../assets/images/cross.svg';
import { ReactComponent as IconCheck } from './../../../../assets/images/check.svg';

export type StatusIconVariant =
  | 'whiteCheck'
  | 'blueCheck'
  | 'whiteCross'
  | 'grayCross';

export interface StatusIconProps {
  variant?: StatusIconVariant;
}

const classesToShow = ['blueCheck', 'grayCross'];

export const StatusIcon = ({ variant = 'whiteCheck' }: StatusIconProps) => {
  const icon = variant.endsWith('Cross') ? <IconCross /> : <IconCheck />;

  return (
    <div
      className={clsx(
        styles.iconWrapper,
        classesToShow.includes(variant) && styles[variant],
      )}
    >
      {icon}
    </div>
  );
};
