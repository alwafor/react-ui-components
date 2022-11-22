import clsx from 'clsx';
import StatusElement from './components/StatusElement';
import { StatusIconVariant } from './components/StatusIcon';
import styles from './PricingCard.module.css';
import globalStyles from 'src/assets/styles/Global.module.css';
import { PricingCardProps } from './PricingCard.interfaces';

type StylesKey = keyof typeof styles;

type StylesVariantClasses =
  | 'card'
  | 'title'
  | 'description'
  | 'price'
  | 'perTime';

const getIconVariantForCard = (
  cardVariant: 'white' | 'blue',
  iconType: 'check' | 'cross',
) => {
  if (cardVariant === 'blue') {
    return ('white' +
      iconType[0].toUpperCase() +
      iconType.slice(1)) as StatusIconVariant;
  } else {
    if (iconType === 'cross') return 'grayCross';
    else return 'blueCheck';
  }
};

function getStyleVariant(
  cardVariant: 'white' | 'blue',
  selectorStyle: StylesVariantClasses,
): StylesKey {
  if (cardVariant === 'white') {
    return selectorStyle as StylesKey;
  } else {
    return (selectorStyle +
      cardVariant[0].toUpperCase() +
      cardVariant.slice(1)) as StylesKey;
  }
}

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
    <div className={clsx(styles[getStyleVariant(variant, 'card')], className)}>
      <div className={styles[getStyleVariant(variant, 'title')]}>{title}</div>
      <div className={styles[getStyleVariant(variant, 'description')]}>
        {description}
      </div>
      <div className={styles.priceWrapper}>
        <div className={styles[getStyleVariant(variant, 'price')]}>
          ${price}
        </div>
        <div className={styles[getStyleVariant(variant, 'perTime')]}>
          / {perTime}
        </div>
      </div>

      <button className={styles.button} onClick={onClick}>
        {buttonText}
      </button>

      <div className={clsx(styles.itemsWrapper)}>
        {items.map((item) => (
          <StatusElement
            key={item.text}
            iconVariant={getIconVariantForCard(variant, item.iconType)}
          >
            <span
              className={clsx(
                styles.elementSpan,
                item.bold && globalStyles.medium,
                item.gray && globalStyles.gray,
                item.white && globalStyles.white,
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
