export interface PricingCardItem {
  iconType: 'check' | 'cross';
  text: string;
  bold?: boolean;
  gray?: boolean;
  white?: boolean;
}

export interface PricingCardProps {
  title: string;
  description: string;
  price: number;
  perTime?: string;

  items: PricingCardItem[];

  buttonText?: string;
  onClick: (e: React.MouseEvent) => void;

  variant?: 'white' | 'blue';

  className?: string;
}
