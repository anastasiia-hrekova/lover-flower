import BreadCrumbs from '../components/BreadcrumbsContainer';
import Container from '../styles/Container';
import Footer from '../components/Footer';
import ButtonLink from '../components/ButtonLink';
import styled from 'styled-components';
import { useEffect } from 'react';

const Corporation = styled.div`
  position: relative;
  background-image: url(/images/bouquets-back.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  content: '';
  width: 100%;
  height: 360rem;
  margin-top: 10rem;

  &::after {
    position: absolute;
    background-image: url(/images/bouquets-1.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    content: '';
    width: 40rem;
    height: 55rem;
    top: -10rem;
    left: 0;
    z-index: 11;
  }

  &::before {
    position: absolute;
    background-image: url(/images/bouquets-2.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    content: '';
    width: 96rem;
    height: 76rem;
    top: -10rem;
    right: 0;
    z-index: 11;
  }
`;

const CorporationTitle = styled.h1`
  font-size: 10rem;
  font-weight: 400;
  line-height: 12rem;
  letter-spacing: 0.02rem;
  font-family: 'Cormorant', serif;
  text-transform: uppercase;
  margin-left: 15rem;
`;

const TitleAdd = styled.h2`
  font-size: 4rem;
  font-weight: 400;
  line-height: 4.9rem;
  letter-spacing: 0.02rem;
  font-family: 'Cormorant', serif;
  text-transform: uppercase;
  margin-left: 10rem;
  margin-bottom: 10rem;
`;

const TitleAddSpan = styled.span`
  font-size: 4rem;
  font-weight: 400;
  line-height: 4.9rem;
  letter-spacing: 0.02rem;
  font-family: 'Cormorant', serif;
  text-transform: uppercase;
  margin-left: 18rem;
`;

const AddText = styled.p`
  width: 76.5rem;
  font-size: 2rem;
  font-weight: 300;
  line-height: 3rem;
  letter-spacing: 0.04rem;
  font-family: 'Oswald', sans-serif;
  text-transform: uppercase;
  margin-bottom: 10rem;
`;

const AddTextSpan = styled.span`
  color: ${({ theme }) => theme.colors.mainColor};
`;

const CorporationText = styled.p`
  width: 73.6rem;
  font-size: 2rem;
  font-weight: 300;
  line-height: 3rem;
  letter-spacing: 0.04rem;
  font-family: 'Oswald', sans-serif;
  margin-bottom: 2rem;
  margin-left: 15rem;
`;

const CorporationTextSpan = styled.span`
  color: ${({ theme }) => theme.colors.mainColor};
`;

const Bouquets = styled.h3`
  max-width: 110rem;
  font-size: 4rem;
  font-weight: 400;
  line-height: 4.9rem;
  letter-spacing: 0.02rem;
  font-family: 'Cormorant', serif;
  text-transform: uppercase;
  margin-top: 10rem;
  margin-bottom: 2rem;
`;

const ListBlock = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  font-size: 2rem;
  font-weight: 400;
  line-height: 3rem;
  letter-spacing: 0.04rem;
  font-family: 'Oswald', sans-serif;
  margin-bottom: 10rem;

  &::before {
    position: absolute;
    background-image: url(/images/bouquets-4.png);
    background-repeat: no-repeat;
    background-position: left;
    background-size: cover;
    content: '';
    width: 80rem;
    height: 75rem;
    z-index: -2;
    left: -15%;
    top: 45%;
  }

  &::after {
    position: absolute;
    background-image: url(/images/bouquets-3.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    content: '';
    width: 80rem;
    height: 55rem;
    z-index: -2;
    left: 20%;
    top: -25%;
  }
`;

const ListBlockContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 6rem 8rem 8rem 11rem;
  justify-items: center;
  gap: 1rem;
  padding: 1rem;

  p {
    width: 100%;
    background-color: #00000033;
    backdrop-filter: blur(20px);
    padding: 1rem;
  }
`;

const ListBlockTitles = styled.p`
  text-transform: uppercase;
  text-align: center;
  color: ${({ theme }) => theme.colors.mainColor};
`;

const ListBlockText = styled.p`
  ${({ theme }) => theme.mixins.flex};
  text-align: center;
  justify-content: center;
`;

const StagesBlock = styled.div`
  text-align: left;
  margin-left: 52%;
  margin-bottom: 18.4rem;
`;

const StagesBlockTitle = styled.h2`
  font-size: 4rem;
  font-weight: 400;
  line-height: 4.9rem;
  letter-spacing: 0.02rem;
  font-family: 'Cormorant', serif;
  text-transform: uppercase;
  margin-bottom: 4rem;
  color: ${({ theme }) => theme.colors.mainColor};
`;

const StagesLine = styled.span`
  width: 6rem;
  border: 1px solid ${({ theme }) => theme.colors.mainColor};
  content: '';
  margin-bottom: 2rem;
`;

const StagesBlockText = styled.p`
  font-size: 2rem;
  font-weight: 400;
  line-height: 3rem;
  letter-spacing: 0.04rem;
  font-family: 'Oswald', sans-serif;
  text-transform: uppercase;
`;

const FormTitle = styled.h2`
  font-size: 4rem;
  font-weight: 400;
  line-height: 4.9rem;
  letter-spacing: 0.02rem;
  font-family: 'Cormorant', serif;
  text-transform: uppercase;
  margin-bottom: 6rem;
`;

const CorporationForm = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 54rem);
  gap: 3rem;
  text-align: left;
`;

const FormBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  font-family: 'Oswald', sans-serif;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2.1rem;
  text-transform: none;

  label {
    letter-spacing: 0.06rem;
    color: ${({ theme }) => theme.colors.textColor};
  }

  input {
    height: 6rem;
    padding: 1.9rem;
    border: 1px solid #555555;
    background-color: transparent;
    letter-spacing: 0.04rem;
    color: #555555;
  }
`;

const FormBlockLeft = styled.div`
  display: grid;
  grid-template-rows: repeat(6, 8.5rem);
  gap: 2rem;
  margin-bottom: 4rem;
`;

const FormBlockRight = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: repeat(6, 8.5rem);
  gap: 2rem;

  &::after {
    position: absolute;
    background-image: url(/images/bouquets-lover.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    content: '';
    width: 30rem;
    height: 20rem;
    z-index: -2;
    left: 30%;
    top: 70%;
  }
`;

const FormBlockTitle = styled.h3`
  font-size: 2rem;
  font-weight: 300;
  line-height: 3rem;
  letter-spacing: 0.04rem;
  font-family: 'Oswald', sans-serif;
  text-transform: uppercase;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.mainColor};
`;

const FromButtonPolicy = styled.p`
  font-family: 'Oswald', sans-serif;
  margin-top: 1rem;
  width: 34.2rem;
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.2rem;
  text-align: left;
  letter-spacing: 0.02rem;
`;

const FromButtonPolicySpan = styled.span`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.2rem;
  text-align: left;
  letter-spacing: 0.02rem;
  text-decoration: underline;
  color: #922d2d;
`;

const CorpClients = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Corporation>
        <Container>
          <BreadCrumbs />
          <CorporationTitle>Букети</CorporationTitle>
          <TitleAdd>
            Вітання для <br />
            <TitleAddSpan>ваших робітників</TitleAddSpan>
          </TitleAdd>
          <AddText>
            Якщо у Вас велика кількість співробітників (або не дуже) і ви
            втомилися пам'ятати про кожен їхній день народження і як чим
            привітати, то <AddTextSpan>ми можемо робити це за Вас</AddTextSpan>.
          </AddText>

          <CorporationText>
            Одним варіантом співробітництва є надання нам переліку
            співробітників з Днями їх народжень і ми вже самостійно зв'язуємося
            з кожним, виготовляємо букет або композицію та доставляємо у зручний
            час співробітнику або за місцем роботи або за місцем проживання,
            оскільки в даний час багато співробітників продовжують виконувати
            роботу віддалено або перебувають на лікарняному або у відпустці.
          </CorporationText>
          <CorporationText>
            Іншим варіантом співробітництва є замовлення букетів самостійно
            представником організації протягом дня до потрібної дати.
          </CorporationText>
          <CorporationText>
            Так ви <CorporationTextSpan>заощаджуєте час </CorporationTextSpan>
            решти співробітників на збір грошей на пошук подарунка та доставку
            його одержувачу, а також оберігаєте себе від ризику пропустити
            когось із важливих організації людей, а саме так Ви проявляєте
            турботу та увагу до співробітників для того, щоб і до справ Вашої
            організації вони ставилися з усією уважністю і також пропускали
            важливі дні.
          </CorporationText>
          <Bouquets>
            Букети можуть виготовлятись у фірмовому кольорі організації та є
            можливість робити привітання на Вашій фірмовій листівці, яку ми
            можемо виготовити самі.
          </Bouquets>
          <AddText>
            <AddTextSpan>
              Вартість одного букета щонайменше 250 грн.
            </AddTextSpan>
          </AddText>
          <ListBlock>
            <ListBlockContainer>
              <ListBlockTitles>Кількість заявок в місяць</ListBlockTitles>
              <ListBlockText>1-2</ListBlockText>
              <ListBlockText>3-10</ListBlockText>
              <ListBlockText>Більше 10</ListBlockText>
            </ListBlockContainer>
            <ListBlockContainer>
              <ListBlockTitles>Приємні бонуси</ListBlockTitles>
              <p>
                Вартість однієї доставки по Києву – 50 грн, за межі Києва – від
                80грн
              </p>
              <p>
                Доставка безкоштовно <br />
                Букет-подарунок керівнику у його День народження
              </p>
              <p>
                Доставка безкоштовно <br /> Букет-подарунок керівнику у його
                День народження <br /> Святкова ялина перед Новим роком
              </p>
            </ListBlockContainer>
          </ListBlock>
          <StagesBlock>
            <StagesBlockTitle>Етапи роботи:</StagesBlockTitle>
            <StagesLine></StagesLine>
            <StagesBlockText>1. Заповнення заявки</StagesBlockText>
            <StagesBlockText>2. Підписання договору</StagesBlockText>
            <StagesBlockText>3. Вручення квітів</StagesBlockText>
            <StagesBlockText>
              4. Звіт про доставлення замовлення
            </StagesBlockText>
            <StagesBlockText>5. Оплата</StagesBlockText>
          </StagesBlock>
          <FormTitle>
            Якщо у Вас одиничне замовлення, то можете вибрати букет в каталозі
            або замовити індивідуальний букет і вказати його вартість, а при
            оформленні замовлення в кошику вказати, що оплата буде здійснюватись
            з розрахункового рахунку організації.
          </FormTitle>
          <FormBlockTitle>Заповніть заявку:</FormBlockTitle>
          <CorporationForm>
            <FormBlockLeft>
              <FormBlock>
                <label>Назва організації</label>
                <input
                  type="text"
                  placeholder="Введіть назву вашої організації"
                />
              </FormBlock>
              <FormBlock>
                <label>Поштова адреса</label>
                <input type="text" placeholder="Введіть поштову адресу" />
              </FormBlock>
              <FormBlock>
                <label>Контактна особа</label>
                <input
                  type="text"
                  placeholder="Введіть ім'я контактної особи"
                />
              </FormBlock>
              <FormBlock>
                <label>Контактний номер телефону</label>
                <input type="tel" placeholder="+38(097)777-77-77" />
              </FormBlock>
              <FormBlock>
                <label>
                  Вартість букета співробітнику (якщо різна – вказати)
                </label>
                <input
                  type="text"
                  placeholder="Вкажіть вартість букета співробітнику"
                />
              </FormBlock>
              <FormBlock>
                <label>Адреса електронної пошти</label>
                <input
                  type="text"
                  placeholder="Вкажіть вашу адресу електронної пошти"
                />
              </FormBlock>
            </FormBlockLeft>
            <FormBlockRight>
              <FormBlock>
                <label>УНП</label>
                <input type="text" placeholder="УНП" />
              </FormBlock>
              <FormBlock>
                <label>Розрахунковий рахунок</label>
                <input
                  type="text"
                  placeholder="Введіть номер розрахункового рахунку"
                />
              </FormBlock>
              <FormBlock>
                <label>Код банку</label>
                <input type="text" placeholder="Код банку" />
              </FormBlock>
              <FormBlock>
                <label>Передбачувана кількість заявок на місяць</label>
                <input
                  type="text"
                  placeholder="Введіть передбачувану кількість заявок на місяць"
                />
              </FormBlock>
            </FormBlockRight>
          </CorporationForm>
          <ButtonLink text="Надіслати" />
          <FromButtonPolicy>
            Натискаючи на кнопку «Надіслати», я даю свою згоду на обробку
            персональних даних відповідно до
            <FromButtonPolicySpan>
              Політики конфіденційності
            </FromButtonPolicySpan>
          </FromButtonPolicy>
        </Container>
      </Corporation>
      <Footer />
    </>
  );
};

export default CorpClients;
