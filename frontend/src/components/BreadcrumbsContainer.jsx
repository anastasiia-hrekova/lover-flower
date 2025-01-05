import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const titles = {
  'delivery&pay': 'Доставка і оплата',
  catalog: 'Каталог',
  about: 'Про нас',
  contacts: 'Контакти',
  corporation: 'Корпоративним клієнтам',
  product: 'Продукт',
  order: 'Оформлення замовлення',
};

const BreadcrumbsContainer = styled.nav`
  display: flex;
  align-items: left;
  gap: 0.3rem;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.8rem;
  letter-spacing: 0.04rem;
  text-transform: uppercase;
  margin-bottom: 6rem;
  margin-top: 5rem;
  font-family: 'Oswald', sans-serif;

  a{
  text-decoration: none;
  color: ${({ theme }) => theme.colors.textCColor};
  
  &:hover{
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.mainCColor}
  }
`;

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  return (
    <BreadcrumbsContainer>
      <Link to="/">Головна</Link>
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        const title = titles[value] || decodeURIComponent(value);

        return isLast ? (
          <span key={to}>/ {title}</span>
        ) : (
          <Link key={to} to={to}>
            / {title}
          </Link>
        );
      })}
    </BreadcrumbsContainer>
  );
};

export default Breadcrumbs;
