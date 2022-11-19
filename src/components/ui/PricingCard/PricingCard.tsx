import clsx from 'clsx';
import StatusElement from './components/StatusElement';
import { StatusIconVariant } from './components/StatusIcon';
import styles from './PricingCard.module.css';
import globalStyles from 'src/assets/styles/Global.module.css';
import { PricingCardProps } from './PricingCard.interfaces';

const getIconVariantForCard = (
  cardVariant: 'white' | 'blue',
  iconType: 'check' | 'cross',
) => {
  if (cardVariant === 'blue') {
    return ('white' + iconType[0] + iconType.slice(1)) as StatusIconVariant;
  } else {
    if (iconType === 'cross') return 'grayCross';
    else return 'blueCheck';
  }
};

const PricingCard = ({
  title,
  description,
  price,
  perTime = 'month',
  items,
  buttonText = 'Get Started Now',
  onClick,
  variant = 'white',
  className,
}: PricingCardProps) => {
  return (
    <div className={clsx(styles.card, className)}>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
      <div className={styles.priceWrapper}>
        <div className={styles.price}>${price}</div>
        <div className={styles.perTime}> / {perTime}</div>
      </div>

      <button className={styles.button} onClick={onClick}>
        {buttonText}
      </button>

      <div className={styles.itemsWrapper}>
        {items.map((item) => (
          <StatusElement
            key={item.text}
            iconVariant={getIconVariantForCard(variant, item.iconType)}
          >
            <span
              className={clsx(
                item.bold && globalStyles.medium,
                item.gray && globalStyles.gray,
              )}
            >
              {item.text}
            </span>
          </StatusElement>
        ))}
      </div>
    </div>
  );
};

export default PricingCard;
