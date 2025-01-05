import BreadCrumbs from '../components/BreadcrumbsContainer';
import Container from '../styles/Container';
import Footer from '../components/Footer';
import styled from 'styled-components';

const Corporation = styled.div`
  position: relative;
  background-image: url(/images/bouquets-back.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  content: '';
  width: 100%;
  height: 350rem;
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
  margin-left: 15rem;
`;

const TitleAddSpan = styled.h2`
  font-size: 4rem;
  font-weight: 400;
  line-height: 4.9rem;
  letter-spacing: 0.02rem;
  font-family: 'Cormorant', serif;
  text-transform: uppercase;
  margin-left: 18rem;
  margin-bottom: 10rem;
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

const CorpClients = () => {
  return (
    <>
      <Corporation>
        <Container>
          <BreadCrumbs />
          <CorporationTitle>Букети</CorporationTitle>
          <TitleAdd>
            Вітання для <TitleAddSpan>ваших робітників</TitleAddSpan>
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
        </Container>
      </Corporation>
      <Footer />
    </>
  );
};

export default CorpClients;
