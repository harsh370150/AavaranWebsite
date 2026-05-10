export type Page = 'home' | 'catalog' | 'visualizer' | 'partners';

export interface NavItem {
  id: Page | 'about';
  label: string;
  subItems?: { label: string; href?: string }[];
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'catalog', label: 'Catalog' },
  { id: 'visualizer', label: 'Visualizer' },
  { id: 'partners', label: 'Partners' },
  { 
    id: 'about', 
    label: 'About Us', 
    subItems: [
        { label: 'Aavaran The Paint Planet' },
        { label: 'Aavaran Furnishing' },
        { label: 'Navkar Interior' },
    ]
  },
];
