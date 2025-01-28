import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectTotalPrice } from '../redux/slices/cartSlice';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Container from '../styles/Container';
import Cart from '../features/Cart';
import Breadcrumbs from '../components/BreadcrumbsContainer';
import Footer from '../components/Footer';

const OrderBlock = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  padding-top: 10rem;
  background-image: url(images/order-page-back.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  content: '';
`;

const OrderBlockTitle = styled.h1`
  position: relative;
  font-size: 10rem;
  font-weight: 400;
  line-height: 12rem;
  letter-spacing: 0.02rem;
  color: ${({ theme }) => theme.colors.textColor};
  font-family: 'Cormorant', serif;
  text-transform: uppercase;
  margin-bottom: 8rem;

  &::after {
    position: absolute;
    content: '';
    background-image: url(images/lover-flower-order.png);
    background-repeat: no-repeat;
    width: 30.5rem;
    height: 19rem;
    top: 50%;
  }
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
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 18.8rem;
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

const DeliveryTotal = styled.p`
  color: #555555;
  font-family: 'Oswald', sans-serif;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2.1rem;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  margin-bottom: 6rem;
`;

const TotalPriceAdd = styled.p`
  font-family: 'Oswald', sans-serif;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2.1rem;
  letter-spacing: 0.04rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textColor};
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
  margin-top: 3rem;

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

const PrivacyBlock = styled.p`
  position: relative;
  color: ${({ theme }) => theme.colors.textColor};
  font-family: 'Oswald', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.2rem;
  letter-spacing: 0.02rem;
  width: 32.7rem;

  &::after {
    position: absolute;
    content: '';
    background-image: url(images/payment.png);
    background-repeat: no-repeat;
    width: 25rem;
    height: 17rem;
    top: -160%;
    right: -70%;
  }
`;

const PrivacyBlockSpan = styled.span`
  color: ${({ theme }) => theme.colors.accentColor};
  text-decoration: underline;
`;

const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const CheckoutPage = () => {
  const [checked, setChecked] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    street: '',
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const totalPrice = useSelector(selectTotalPrice);
  const navigate = useNavigate();

  const generateOrderNumber = () => {
    const timestamp = Date.now().toString();
    return timestamp.slice(-9);
  };

  const handlePayment = e => {
    e.preventDefault();
    const orderNumber = generateOrderNumber();
    navigate('/success', { state: { orderNumber } });
  };

  const handleChange = checkboxId => {
    setChecked(prevState => ({
      ...prevState,
      [checkboxId]: !prevState[checkboxId],
    }));
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    const isValid =
      formData.name.trim() &&
      formData.phone.trim() &&
      formData.email.trim() &&
      formData.city.trim() &&
      formData.street.trim();

    setIsFormValid(isValid);
  }, [formData]);

  const delCheckboxes = [
    { id: 'pickup', label: 'Самовивіз' },
    { id: 'courier', label: "Доставка кур'єром" },
  ];

  const payCheckboxes = [
    { id: 'card', label: 'Банківська карта' },
    { id: 'cash', label: 'Готівкою' },
    { id: 'applePay', label: 'Apple pay' },
    { id: 'googlePay', label: 'Google pay' },
    { id: 'crypto', label: 'Криптовалютою' },
  ];

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
                <InputBlock>
                  <FormLabels htmlFor="name">Ваше ім'я*</FormLabels>
                  <ContactsDataInput
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Введіь ваше ім'я"
                    autoComplete="name"
                    required
                  />
                </InputBlock>
                <InputBlock>
                  <FormLabels htmlFor="phone">Ваш телефон*</FormLabels>
                  <ContactsDataInput
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    pattern="^\+?380\d{9}$"
                    placeholder="+380 (97) 777-77-77"
                    autoComplete="tel"
                    required
                  />
                </InputBlock>
                <InputBlock>
                  <FormLabels htmlFor="email">Ваш e-mail*</FormLabels>
                  <ContactsDataInput
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    pattern="^[A-Za-z0-9][A-Za-z0-9\.-_]*[A-Za-z0-9]*@([A-Za-z0-9]+([A-Za-z0-9-]*[A-Za-z0-9]+)*\.)+[A-Za-z]*$"
                    placeholder="Введіь вашу пошту"
                    autoComplete="email"
                    required
                  />
                </InputBlock>
                <InputBlock>
                  <FormLabels htmlFor="tel">
                    Телефон отримувача (не обов'язково)
                  </FormLabels>
                  <ContactsDataInput
                    name="tel"
                    id="tel"
                    placeholder="+380 (97) 777-77-77"
                    autoComplete="tel"
                  />
                </InputBlock>
                <InputBlock>
                  <FormLabels htmlFor="recipient">
                    Ім'я отримувача (не обов'язково)
                  </FormLabels>
                  <ContactsDataInput
                    name="recipient"
                    id="recipient"
                    placeholder="Введіь ім'я отримувача"
                    autoComplete="name"
                  />
                </InputBlock>
                <InputBlock>
                  <FormLabels htmlFor="comment">
                    Коментарій до замовлення
                  </FormLabels>
                  <ContactsDataInput
                    name="comment"
                    id="comment"
                    placeholder="Примітки до замовлення, особливі побажання відділу доставки"
                    style={{ marginBottom: '6rem' }}
                  />
                </InputBlock>

                <FormTitles>Доставка</FormTitles>
                {delCheckboxes.map(({ id, label }) => (
                  <CheckboxLabel htmlFor={id} key={id} checked={checked[id]}>
                    <CheckboxInput
                      name="delivery"
                      type="checkbox"
                      id={id}
                      checked={!!checked[id]}
                      onChange={() => handleChange(id)}
                    />
                    <OuterCircle htmlFor="checkbox" checked={checked[id]}>
                      <InnerCircle checked={checked[id]} />
                    </OuterCircle>
                    {label}
                  </CheckboxLabel>
                ))}
                <InputBlock>
                  <FormLabels htmlFor="city">Місто*</FormLabels>
                  <ContactsDataInput
                    name="city"
                    id="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="Оберіть місто"
                    required
                  />
                </InputBlock>
                <InputBlock>
                  <FormLabels htmlFor="street">Вулиця*</FormLabels>
                  <ContactsDataInput
                    name="street"
                    id="street"
                    value={formData.street}
                    onChange={handleInputChange}
                    placeholder="Введіь вулицю"
                    required
                  />
                </InputBlock>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                  <InputBlock style={{ flexDirection: 'column' }}>
                    <FormLabels htmlFor="corpus">Корп/стр</FormLabels>
                    <ContactsDataInput
                      name="corpus"
                      id="corpus"
                      placeholder="Корп/стр"
                      style={{ width: '16rem', marginRight: '3rem' }}
                    />
                  </InputBlock>
                  <InputBlock style={{ flexDirection: 'column' }}>
                    <FormLabels htmlFor="house">Будинок</FormLabels>
                    <ContactsDataInput
                      name="house"
                      id="house"
                      placeholder="Будинок"
                      style={{ width: '16rem', marginRight: '3rem' }}
                    />
                  </InputBlock>
                  <InputBlock style={{ flexDirection: 'column' }}>
                    <FormLabels htmlFor="appartment">Кв/офіс</FormLabels>
                    <ContactsDataInput
                      name="appartment"
                      id="appartment"
                      placeholder="Кв/офіс"
                      style={{ width: '16rem' }}
                    />
                  </InputBlock>
                </div>
                <InputBlock>
                  <FormLabels htmlFor="time">Час доставки</FormLabels>
                  <ContactsDataInput
                    name="time"
                    id="time"
                    type="time"
                    style={{
                      width: '16rem',
                      fontSize: '2.5rem',
                    }}
                  />
                </InputBlock>
                <DeliveryTotal>Вартість доставки 0 грн</DeliveryTotal>

                <FormTitles>Оплата</FormTitles>
                {payCheckboxes.map(({ id, label }) => (
                  <CheckboxLabel htmlFor={id} key={id} checked={checked[id]}>
                    <CheckboxInput
                      name="payment"
                      type="checkbox"
                      id={id}
                      checked={!!checked[id]}
                      onChange={() => handleChange(id)}
                    />
                    <OuterCircle htmlFor="checkbox" checked={checked[id]}>
                      <InnerCircle checked={checked[id]} />
                    </OuterCircle>
                    {label}
                  </CheckboxLabel>
                ))}

                <div>
                  <FormTitles
                    style={{
                      textTransform: 'none',
                      marginBottom: '0.4rem',
                      marginTop: '6rem',
                    }}
                  >
                    Промокод
                  </FormTitles>
                  <ContactsDataInput
                    name="promo"
                    placeholder="Промокод"
                    style={{ width: '16rem' }}
                  ></ContactsDataInput>
                  <PromoBtn>Застосувати</PromoBtn>
                </div>

                <OrderTitle
                  style={{
                    marginTop: '6rem',
                    marginBottom: '0',
                  }}
                >
                  Загальна вартість замовлення {totalPrice}грн
                </OrderTitle>
                <TotalPriceAdd>Знижка = 0 грн</TotalPriceAdd>
                <TotalPriceAdd>Доставка = 0 грн</TotalPriceAdd>
                <ToPayBtn onClick={handlePayment} disabled={!isFormValid}>
                  До сплати
                </ToPayBtn>
                <PrivacyBlock>
                  Натискаючи на кнопку «До Оплати», я даю свою згоду на обробку
                  персональних даних, відповідно до
                  <PrivacyBlockSpan>
                    {' '}
                    Політики конфіденційності
                  </PrivacyBlockSpan>
                  , а також ознайомлений з умовами оплати та доставки
                </PrivacyBlock>
              </OrderForm>
            </Order>
            <ProductsBlock>
              <Cart />
              <TotalPrice>Попередній підсумок: {totalPrice} грн</TotalPrice>
            </ProductsBlock>
          </OrderContent>
        </Container>
      </OrderBlock>
      <Footer />
    </>
  );
};

export default CheckoutPage;
