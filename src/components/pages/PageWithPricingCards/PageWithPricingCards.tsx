import React from 'react';
import PricingCard from 'src/components/ui/PricingCard';
import { cardsItems } from './PageWithPricingCard.constants';
import styles from './PageWithPricingCards.module.css';

const PageWithPricingCards = () => {
  return (
    <div className={styles.wrapper}>
      <PricingCard
        description=""
        items={cardsItems}
        onClick={() => console.log('hello')}
        price={25}
        title="Professional"
      />
      <PricingCard
        description=""
        items={cardsItems}
        onClick={() => console.log('hello')}
        price={25}
        title="Professional"
      />
      <PricingCard
        description=""
        items={cardsItems}
        onClick={() => console.log('hello')}
        price={25}
        title="Professional"
      />
    </div>
  );
};

export default PageWithPricingCards;
