interface Card {
  link: string;
  alt: string;
}

interface CardProps extends Card {
  card: Card;
  onCardClick: (card: Card) => void;
}


interface CardInfoProps extends Card {
  onBack: () => void;
}

interface FormProps {
  query: string;
  onSubmit: (e: any) => void;
  onChangeQuery: (e: any) => void;
}

interface MainProps extends FormProps {
  cards: Array<any>;
  onCardClick: (card: Card) => void;
  onRandomClick: () => void;
}

export { FormProps, CardProps, CardInfoProps, MainProps, Card };
