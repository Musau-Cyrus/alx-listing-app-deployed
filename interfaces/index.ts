// Props expected by the Card component
export interface CardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  location: string;
  price: number;
  onClick?: () => void;
}

// Props expected by the Button component
export interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  type?: 'button' | 'submit';
}

// Property interface for property detail page
export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  // Add more property fields as needed
}

export interface PropertyProps {
  name: string;
  description: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount: string;
}

export interface FooterLinksProps {
  title: string;
  links: {
    first: string;
    second: string;
    third: string;
    fourth?: string;
    fifth?: string;
  }
}

export interface ReviewProps {
  name: string;
  avatar: string;
  rating: number;
  comment: string;
}

export interface PillProps {
  label: string;
  isActive?: boolean;
  onClick: () => void
}