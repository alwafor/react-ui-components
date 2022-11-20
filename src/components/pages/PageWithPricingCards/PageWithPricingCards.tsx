import React from 'react';
import PricingCard from 'src/components/ui/PricingCard';
import { cardsItems, cardsItems2, cardsItems3} from './PageWithPricingCard.constants';
import styles from './PageWithPricingCards.module.css';

const PageWithPricingCards = () => {
  return (
    <div className={styles.wrapper}>
      <PricingCard
        description="Amet minim mollit non deserunt ullamco est sit aliqua dolor."
        items={cardsItems}
        onClick={() => console.log('hello')}
        price={0}
        title="Freebie"
      />
      <PricingCard
        variant='blue'
        description="Amet minim mollit non deserunt ullamco est sit aliqua dolor."
        items={cardsItems2}
        onClick={() => console.log('hello')}
        price={25}
        title="Professional"
      />
      <PricingCard
        description="Amet minim mollit non deserunt ullamco est sit aliqua dolor."
        items={cardsItems3}
        onClick={() => console.log('hello')}
        price={100}
        title="Enterprise"
      />
    </div>
  );
};

export default PageWithPricingCards;
