export interface Dress {
    id: number;
    name: string;
    description: string;
    category: 'T-shirt' | 'Shirt' | 'Polo shirt' | 'Outerwear' |'Dress' |' Other';
    image: string;
     [index: number]: any;
  };
  
