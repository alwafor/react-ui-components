import PricingCard from '../ui/PricingCard';
import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.container}>
      <PricingCard
        description="some description"
        items={[
          {
            iconType: 'check',
            text: '20,000+ of PNG & SVG graphics',
            bold: true,
          },
          {
            iconType: 'check',
            text: 'Access to 100 million stock images',
            bold: true,
          },
          { iconType: 'cross', text: 'Upload custom icons and fonts' },
          { iconType: 'cross', text: 'Unlimited Sharing' },
          { iconType: 'cross', text: 'Upload graphics & video in up to 4k' },
          { iconType: 'cross', text: 'Unlimited Projects' },
          { iconType: 'cross', text: 'Instant Access to our design system' },
          { iconType: 'cross', text: 'Create teams to collaborate on designs' },
        ]}
        onClick={() => console.log('hello')}
        price={25}
        title="Professional"
      />
    </div>
  );
};

export default App;
