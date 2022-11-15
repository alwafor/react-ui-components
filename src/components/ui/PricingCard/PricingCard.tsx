import styles from './PricingCard.module.css';

interface Item {
  active: boolean;
  text: string;
}

interface Props {
  title: string;
  description: string;
  price: number;
  perTime?: string;

  items: Item[];

  buttonText?: string;
  onClick: (e: React.MouseEvent) => void;

  variant?: 'white' | 'blue';
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
}: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
      <div className={styles.priceWrapper}>
        <div className={styles.price}>{price}</div>
        <div className={styles.perTime}> / {perTime}</div>
      </div>

      <button onClick={onClick}>{buttonText}</button>

      <div className={styles.itemsWrapper}>
        {items.map((item) => (
          <div key={item.text} className={styles.item}>
            <div className={styles.itemStatus}>{item.active ? '+' : '-'}</div>
            <div className={styles.itemText}>{item.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCard;
