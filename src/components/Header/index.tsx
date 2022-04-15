import logoSvg from '@assets/logo.svg';
import './index.less';

export const Header = () => {
  return (
    <div className="vite-demo-header">
      Header
      <img src={logoSvg} width="80px" height="80px" alt="" />
    </div>
  );
};
