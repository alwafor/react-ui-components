import PricingCard from '../ui/PricingCard';
import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.container}>
      <PricingCard
        description="some description"
        items={[{ active: true, text: 'item' }]}
        onClick={() => console.log('hello')}
        price={25}
        title="Professional"
      />
    </div>
  );
};

export default App;
