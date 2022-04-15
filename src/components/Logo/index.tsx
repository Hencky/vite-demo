import { ReactComponent as ReactLogo } from '@/assets/logo.svg';

export const Logo = () => {
  return (
    <div className="vite-demo-logo">
      <ReactLogo style={{ width: 200, height: 200 }} />
    </div>
  );
};
