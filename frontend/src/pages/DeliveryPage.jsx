import Breadcrumbs from '../components/BreadcrumbsContainer';
import Container from '../styles/Container';
import styled from 'styled-components';

const Delivery = styled.div`
  background-image: url(/images/delivery-back.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  content: '';
  width: 100%;
  height: 250rem;
  margin-top: 10rem;
`;

const DeliveryContent = styled.div`
  margin-top: 3.5rem;
`;

const DeliveryTitle = styled.h1`
  font-size: 10rem;
  font-weight: 400;
  line-height: 12rem;
  letter-spacing: 0.02rem;
  color: ${({ theme }) => theme.colors.textColor};
  font-family: 'Cormorant', serif;
  text-transform: uppercase;
`;

const DeliveryTitleSpan = styled.span`
  font-size: 10rem;
  font-weight: 400;
  line-height: 12rem;
  letter-spacing: 0.02rem;
  color: ${({ theme }) => theme.colors.textColor};
  font-family: 'Cormorant', serif;
  text-transform: uppercase;
  margin-left: 15rem;
`;

const DearClients = styled.div`
  position: relative;
  display: flex;
  text-align: left;
  flex-direction: column;
  gap: 1rem;
  margin-left: 16rem;
  text-transform: uppercase;
  font-family: 'Oswald', sans-serif;
  margin-top: 2.4rem;
  margin-bottom: 10rem;

  &:before {
    position: absolute;
    content: '';
    background-image: url(/images/delivery-sign.png);
    background-repeat: no-repeat;
    left: -2rem;
    width: 2.5rem;
    height: 12.1rem;
  }
`;

const DearClientsTitle = styled.p`
  color: ${({ theme }) => theme.colors.accentColor};
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 2.1rem;
  letter-spacing: 0.04rem;
`;

const DearClientsText = styled.p`
  width: 57rem;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2.1rem;
  letter-spacing: 0.04rem;
`;

const DearClientsTextSpan = styled(DearClientsText)`
  color: ${({ theme }) => theme.colors.mainColor};
`;

const Payments = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-transform: uppercase;
  font-family: 'Oswald', sans-serif;
`;

const BlocksTitle = styled.p`
  font-size: 2rem;
  font-weight: 700;
  line-height: 3rem;
  letter-spacing: 0.04rem;
  color: ${({ theme }) => theme.colors.accentColor};
`;

const PaymentsBlock = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10rem;
`;

const PaymentsWay = styled.li`
  position: relative;
  width: 25.5rem;
  height: 21.1rem;
  border-radius: 2rem;
  background-color: #00000033;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;

  &:before {
    content: '';
    position: absolute;
    top: 2rem;
    width: 1.1rem;
    height: 1.1rem;
    background-image: url(/images/ellipse.svg);
    background-repeat: no-repeat;
  }
`;

const PaymentsWayText = styled.p`
  font-size: 2rem;
  font-weight: 300;
  line-height: 2.6rem;
  letter-spacing: 0.02rem;
`;

const DeliveryCost = styled.div`
  display: flex;
  align-items: left;
  flex-direction: column;
  gap: 2rem;
  text-transform: uppercase;
  font-family: 'Oswald', sans-serif;
  margin-left: 17rem;
`;

const DeliveryCostBlock = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  list-style: disc;

  li {
    font-size: 2rem;
    font-weight: 300;
    line-height: 2.6rem;
    letter-spacing: 0.02rem;
  }
`;

const DeliveryCostText = styled.span`
  font-weight: 700;
`;

const DeliveryCostTextSpan = styled.span`
  color: ${({ theme }) => theme.colors.mainColor};
`;

const DeliveryPage = () => {
  return (
    <Delivery>
      <Container>
        <DeliveryContent>
          <Breadcrumbs />
          <DeliveryTitle>
            Доставка <br />
            <DeliveryTitleSpan>і оплата</DeliveryTitleSpan>
          </DeliveryTitle>
          <DearClients>
            <DearClientsTitle>Дорогі клієнти!</DearClientsTitle>
            <DearClientsText>
              Під час пандемії (COVID-19) компанія Lover Flower закликає всіх
              менше контактувати з іншими людьми для захисту себе та своїх
              близьких. Саме тому ми організували
              <DearClientsTextSpan>БЕСКОНТАКТНУ ДОСТАВКУ</DearClientsTextSpan>
            </DearClientsText>
          </DearClients>
          <Payments>
            <BlocksTitle>Способи оплати:</BlocksTitle>
            <PaymentsBlock>
              <PaymentsWay>
                <PaymentsWayText>
                  Банківською картою при оформленні замовлення через сайт або за
                  посиланням
                </PaymentsWayText>
              </PaymentsWay>
              <PaymentsWay>
                <PaymentsWayText>
                  Готівкою, банківською картою при самовивозі або з
                  розрахункового рахунку організації
                </PaymentsWayText>
              </PaymentsWay>
              <PaymentsWay>
                <PaymentsWayText>
                  Готівкою, при доставці кур'єром
                </PaymentsWayText>
              </PaymentsWay>
              <PaymentsWay>
                <PaymentsWayText>Криптовалютою</PaymentsWayText>
              </PaymentsWay>
            </PaymentsBlock>
          </Payments>
          <DeliveryCost>
            <BlocksTitle>Вартість доставки:</BlocksTitle>
            <DeliveryCostBlock>
              <li>
                <DeliveryCostText>Безкоштовно</DeliveryCostText> - при
                замовленні на суму
                <DeliveryCostTextSpan> від 1500грн</DeliveryCostTextSpan>
              </li>
              <li>
                <DeliveryCostText>100грн</DeliveryCostText> - при замовленні на
                суму <DeliveryCostTextSpan>меньше 1500грн</DeliveryCostTextSpan>
              </li>
              <li>
                Також ви можете забрати ваше замовлення самостійно за адресою:
                <br />
                <DeliveryCostTextSpan>
                  м. Київ, вул. Тараса Шевченка 67, щоденно з 10:00 до 21:00
                </DeliveryCostTextSpan>
              </li>
            </DeliveryCostBlock>
          </DeliveryCost>
        </DeliveryContent>
      </Container>
    </Delivery>
  );
};

export default DeliveryPage;
