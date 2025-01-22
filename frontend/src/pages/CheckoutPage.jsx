import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';
import Container from '../styles/Container';
import Cart from '../features/Cart';
import Breadcrumbs from '../components/BreadcrumbsContainer';
import Footer from '../components/Footer';

const OrderBlock = styled.div`
  position: relative;
  width: 100%;
  height: 260rem;
  padding-top: 10rem;
  background-image: url(images/order-page-back.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  content: '';
`;

const OrderBlockTitle = styled.h1`
  font-size: 10rem;
  font-weight: 400;
  line-height: 12rem;
  letter-spacing: 0.02rem;
  color: ${({ theme }) => theme.colors.textColor};
  font-family: 'Cormorant', serif;
  text-transform: uppercase;
  margin-bottom: 8rem;
`;

const OrderTitleSpan = styled.span`
  margin-left: 9.5rem;
`;

const OrderContent = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  gap: 22rem;
`;

const Order = styled.div`
  display: flex;
  align-items: left;
  flex-direction: column;
  width: 54rem;
`;

const OrderTitle = styled.h3`
  color: ${({ theme }) => theme.colors.mainColor};
  font-family: 'Oswald', sans-serif;
  font-size: 3rem;
  font-weight: 700;
  line-height: 4.5rem;
  letter-spacing: 0.04rem;
  text-transform: uppercase;
  margin-bottom: 4rem;
`;

const OrderForm = styled.form`
  display: flex;
  align-items: left;
  flex-direction: column;
  gap: 2rem;
`;

const FormTitles = styled.p`
  color: ${({ theme }) => theme.colors.mainColor};
  font-family: 'Oswald', sans-serif;
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 2.1rem;
  letter-spacing: 0.06rem;
  text-transform: uppercase;
`;

const FormLabels = styled.label`
  color: ${({ theme }) => theme.colors.textColor};
  font-family: 'Oswald', sans-serif;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2.1rem;
  letter-spacing: 0.06rem;
`;

const ContactsDataInput = styled.input`
  width: 100%;
  height: 6rem;
  padding: 2rem;
  background-color: transparent;
  border: 1px solid #555555;
  color: #555555;
  font-family: 'Oswald', sans-serif;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2.1rem;
  letter-spacing: 0.04rem;
`;

const CheckboxLabel = styled.label`
  position: relative;
  padding-left: 35px;
  cursor: pointer;
  font-family: 'Oswald', sans-serif;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2.1rem;
  letter-spacing: 0.04rem;
  text-transform: uppercase;
  color: ${props => (props.checked ? '#fff' : '#555555')};
  transition: all 0.3s ease;
`;

const CheckboxInput = styled.input`
  display: none;
`;

const OuterCircle = styled.div`
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 1.6rem;
  height: 1.6rem;
  background-color: transprent;
  border: 0.5px solid ${props => (props.checked ? '#fff' : '#555555')};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease;
`;

const InnerCircle = styled.div`
  content: '';
  position: absolute;
  left: 2.5px;
  top: 3px;
  width: 8.8px;
  height: 8.8px;
  background-color: ${props => (props.checked ? '#fff' : 'transparent')};
  border-radius: 50%;
  transition: transform 0.3s ease;
  transform: ${props => (props.checked ? 'scale(1)' : 'scale(0)')};
`;

const PromoBtn = styled.button`
  width: 16rem;
  height: 6rem;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.mainColor};
  border: 1px solid ${({ theme }) => theme.colors.mainColor};
  font-family: 'Oswald', sans-serif;
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 2.1rem;
  letter-spacing: 0.06rem;
`;

const ToPayBtn = styled.button`
  width: 25.5rem;
  height: 5rem;
  background-color: ${({ theme }) => theme.colors.mainColor};
  color: ${({ theme }) => theme.colors.backgroundColor};
  border: none;
  cursor: pointer;
  transition: 0.3s ease;
  font-family: 'Oswald', sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.8rem;
  letter-spacing: 0.1rem;
  text-transform: uppercase;

  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonHover};
    color: ${({ theme }) => theme.colors.textColor};
  }
`;

const ProductsBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  width: 35rem;
  margin-top: 10rem;
  color: ${({ theme }) => theme.colors.textColor};
`;

const TotalPrice = styled.p`
  color: ${({ theme }) => theme.colors.mainColor};
  font-family: 'Oswald', sans-serif;
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 2.1rem;
  letter-spacing: 0.02rem;
  text-transform: uppercase;
`;

const CheckoutPage = () => {
  const location = useLocation();
  const { cart } = location.state || { cart: { items: [] } };
  const [checked, setChecked] = useState({});

  const handleChange = checkboxId => {
    setChecked(prevState => ({
      ...prevState,
      [checkboxId]: !prevState[checkboxId],
    }));
  };

  const totalProductAmount = cart.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <>
      <OrderBlock>
        <Container>
          <Breadcrumbs />
          <OrderBlockTitle>
            Оформлення <br />
            <OrderTitleSpan>замовлення</OrderTitleSpan>
          </OrderBlockTitle>
          <OrderContent>
            <Order>
              <OrderTitle>Оформлення замовлення</OrderTitle>
              <OrderForm>
                <FormTitles>Контактні данні</FormTitles>
                <FormLabels></FormLabels>
                <ContactsDataInput></ContactsDataInput>
                <FormLabels></FormLabels>
                <ContactsDataInput></ContactsDataInput>
                <FormLabels></FormLabels>
                <ContactsDataInput></ContactsDataInput>
                <FormLabels></FormLabels>
                <ContactsDataInput></ContactsDataInput>
                <FormLabels></FormLabels>
                <ContactsDataInput></ContactsDataInput>
                <FormLabels></FormLabels>
                <ContactsDataInput></ContactsDataInput>

                <FormTitles>Доставка</FormTitles>
                <CheckboxLabel checked={checked}>
                  <CheckboxInput
                    type="checkbox"
                    id="checkbox"
                    checked={checked}
                    onChange={handleChange}
                  />
                  <OuterCircle htmlFor="checkbox" checked={checked}>
                    <InnerCircle checked={checked} />
                  </OuterCircle>
                  Самовивіз
                </CheckboxLabel>
                <CheckboxLabel checked={checked}>
                  <CheckboxInput
                    type="checkbox"
                    id="checkbox"
                    checked={checked}
                    onChange={handleChange}
                  />
                  <OuterCircle htmlFor="checkbox" checked={checked}>
                    <InnerCircle checked={checked} />
                  </OuterCircle>
                  Доставка кур'єром
                </CheckboxLabel>
                <FormLabels></FormLabels>
                <ContactsDataInput></ContactsDataInput>
                <FormLabels></FormLabels>
                <ContactsDataInput></ContactsDataInput>
                <div>
                  <FormLabels></FormLabels>
                  <ContactsDataInput
                    style={{ width: '16rem' }}
                  ></ContactsDataInput>
                  <FormLabels></FormLabels>
                  <ContactsDataInput
                    style={{ width: '16rem' }}
                  ></ContactsDataInput>
                  <FormLabels></FormLabels>
                  <ContactsDataInput
                    style={{ width: '16rem' }}
                  ></ContactsDataInput>
                </div>
                <FormLabels></FormLabels>
                <ContactsDataInput
                  style={{ width: '16rem' }}
                ></ContactsDataInput>
                <p>Вартість доставки 0 грн</p>

                <FormTitles>Оплата</FormTitles>
                <CheckboxLabel checked={checked}>
                  <CheckboxInput
                    type="checkbox"
                    id="checkbox"
                    checked={checked}
                    onChange={handleChange}
                  />
                  <OuterCircle htmlFor="checkbox" checked={checked}>
                    <InnerCircle checked={checked} />
                  </OuterCircle>
                  Банківська карта
                </CheckboxLabel>
                <CheckboxLabel checked={checked}>
                  <CheckboxInput
                    type="checkbox"
                    id="checkbox"
                    checked={checked}
                    onChange={handleChange}
                  />
                  <OuterCircle htmlFor="checkbox" checked={checked}>
                    <InnerCircle checked={checked} />
                  </OuterCircle>
                  Готівкою
                </CheckboxLabel>
                <CheckboxLabel checked={checked}>
                  <CheckboxInput
                    type="checkbox"
                    id="checkbox"
                    checked={checked}
                    onChange={handleChange}
                  />
                  <OuterCircle htmlFor="checkbox" checked={checked}>
                    <InnerCircle checked={checked} />
                  </OuterCircle>
                  Apple pay
                </CheckboxLabel>
                <CheckboxLabel checked={checked}>
                  <CheckboxInput
                    type="checkbox"
                    id="checkbox"
                    checked={checked}
                    onChange={handleChange}
                  />
                  <OuterCircle htmlFor="checkbox" checked={checked}>
                    <InnerCircle checked={checked} />
                  </OuterCircle>
                  Goofle pay
                </CheckboxLabel>
                <CheckboxLabel checked={checked}>
                  <CheckboxInput
                    type="checkbox"
                    id="checkbox"
                    checked={checked}
                    onChange={handleChange}
                  />
                  <OuterCircle htmlFor="checkbox" checked={checked}>
                    <InnerCircle checked={checked} />
                  </OuterCircle>
                  Криптовалютою
                </CheckboxLabel>

                <div>
                  <FormTitles
                    style={{
                      textTransform: 'none',
                      marginBottom: '0.4rem',
                    }}
                  >
                    Промокод
                  </FormTitles>
                  <ContactsDataInput
                    style={{ width: '16rem' }}
                  ></ContactsDataInput>
                  <PromoBtn>Застосувати</PromoBtn>
                </div>

                <OrderTitle
                  style={{
                    margin: '0',
                  }}
                >
                  Загальна вартість замовлення грн
                </OrderTitle>
                <p>Знижка = 0 грн</p>
                <p>Доставка = 0 грн</p>
                <ToPayBtn>До сплати</ToPayBtn>
                <p>
                  Натискаючи на кнопку «До Оплати», я даю свою згоду на обробку
                  персональних даних, відповідно до
                  <span>Політики конфіденційності</span>, а також ознайомлений з
                  умовами оплати та доставки
                </p>
              </OrderForm>
            </Order>
            <ProductsBlock>
              <Cart />
              <TotalPrice>
                Попередній підсумок: {totalProductAmount.toFixed(2)} грн
              </TotalPrice>
            </ProductsBlock>
          </OrderContent>
        </Container>
      </OrderBlock>
      <Footer />
    </>
  );
};

export default CheckoutPage;
