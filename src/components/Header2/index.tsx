import SvgIcon from '../SvgIcon';

const icons = import.meta.globEager('../../assets/icons/logo-*.svg');

const iconUrls = Object.values(icons).map((mod) => {
  // 如 ../../assets/icons/logo-1.svg -> logo-1
  const fileName = mod.default.split('/').pop();
  const [svgName] = fileName.split('.');
  return svgName;
});

console.log('icons', icons, iconUrls);

export const Header2 = () => {
  return (
    <div>
      {/* 渲染 svg 组件 */}
      {iconUrls.map((item) => (
        <SvgIcon name={item} key={item} width="50" height="50" />
      ))}
    </div>
  );
};
