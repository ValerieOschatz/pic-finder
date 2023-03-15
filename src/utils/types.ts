interface Card {
  urls: {
    regular: string;
    small: string;
  };
  alt_description: string;
  id: string;
}

interface CardsResponse {
  results: Card[];
  total_pages: number;
}

interface CardProps {
  card: Card;
  link: string;
  alt: string;
  onCardClick?: (card: Card) => void;
  onBack?: () => void;
}

interface FormProps {
  query: string;
  onSubmit: (e: any) => void;
  onChangeQuery: (e: any) => void;
}

interface MainProps extends FormProps {
  cards: Card[];
  onCardClick: (card: Card) => void;
  onRandomClick: () => void;
}

export { FormProps, CardProps, MainProps, Card, CardsResponse };
