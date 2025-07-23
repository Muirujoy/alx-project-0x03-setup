// Used in pages/index.tsx
export interface PageRouteProps {
  pageRoute: string;
}

// Used in components/layouts/Layout.tsx
export interface LayoutProps {
  children: React.ReactNode;
}

// Used in components/common/Button.tsx
export interface ButtonProps {
  buttonLabel: string;
  buttonSize?: string;
  buttonBackgroundColor?: 'red' | 'blue' | 'orange' | 'green';
  action?: () => void;
}
