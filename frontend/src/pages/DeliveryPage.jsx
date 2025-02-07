import Breadcrumbs from '../components/BreadcrumbsContainer';
import Container from '../styles/Container';
import styled from 'styled-components';
import Footer from '../components/Footer';

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

const DearClientsTextSpan = styled.span`
  color: ${({ theme }) => theme.colors.mainColor};
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2.1rem;
  letter-spacing: 0.04rem;
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
  text-transform: uppercase;
`;

const PaymentsBlock = styled.ul`
  ${({ theme }) => theme.mixins.flex};
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10rem;
`;

const PaymentsWay = styled.li`
  position: relative;
  ${({ theme }) => theme.mixins.flex};
  width: 25.5rem;
  height: 21.1rem;
  border-radius: 2rem;
  background-color: #00000033;
  backdrop-filter: blur(10px);
  padding: 2rem;
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
  margin-bottom: 10rem;
`;

const DeliveryBlock = styled.ul`
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

const DeliveryTextSpan = styled.span`
  color: ${({ theme }) => theme.colors.mainColor};
`;

const DeliveryTerms = styled.div`
  display: flex;
  align-items: left;
  flex-direction: column;
  gap: 2rem;
  text-transform: uppercase;
  font-family: 'Oswald', sans-serif;
  margin-bottom: 10rem;
`;

const AdditionBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 100%;
  background-color: #00000033;
  backdrop-filter: blur(10px);
  border-radius: 2rem;
  padding: 3rem;
  font-family: 'Oswald', sans-serif;
  margin: 0 auto;
  gap: 2rem;
`;

const AdittionText = styled.p`
  font-size: 2rem;
  font-weight: 300;
  line-height: 3rem;
  letter-spacing: 0.04rem;
`;

const AdittionUl = styled.ul`
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

const AdittionTextSpan = styled.span`
  font-size: 2rem;
  font-weight: 300;
  line-height: 3rem;
  letter-spacing: 0.04rem;
  color: ${({ theme }) => theme.colors.mainColor};
`;

const DeliveryPage = () => {
  return (
    <>
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
                    Банківською картою при оформленні замовлення через сайт або
                    за посиланням
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
              <DeliveryBlock>
                <li>
                  <DeliveryCostText>Безкоштовно</DeliveryCostText> - при
                  замовленні на суму
                  <DeliveryTextSpan> від 1500грн</DeliveryTextSpan>
                </li>
                <li>
                  <DeliveryCostText>100грн</DeliveryCostText> - при замовленні
                  на суму <DeliveryTextSpan>меньше 1500грн</DeliveryTextSpan>
                </li>
                <li>
                  Також ви можете забрати ваше замовлення самостійно за адресою:
                  <br />
                  <DeliveryTextSpan>
                    м. Київ, вул. Тараса Шевченка 67, щоденно з 10:00 до 21:00
                  </DeliveryTextSpan>
                </li>
              </DeliveryBlock>
            </DeliveryCost>
            <DeliveryTerms>
              <BlocksTitle>Умови доставки:</BlocksTitle>
              <DeliveryBlock>
                <li>
                  Доставка здійснюється по місту Київ в
                  <DeliveryTextSpan> будь-якого дня.</DeliveryTextSpan>
                </li>
                <li>
                  Можливість вибору терміну та вартості доставки за межі Києва,
                  доставки у нічний час, свята
                  <DeliveryTextSpan>
                    {' '}
                    обговорюються з менеджером
                  </DeliveryTextSpan>
                </li>
              </DeliveryBlock>
            </DeliveryTerms>
            <AdditionBlock>
              <BlocksTitle>Додатково: </BlocksTitle>
              <AdittionText>
                Доставка іншій особі можлива лише у разі оплати замовлення
                замовником. Доставка здійснюється не раніше ніж через 2 години
                після оплати замовлення, але може бути раніше, якщо букет є у
                наявності або за домовленістю з менеджером.
                <br />
                Час очікування кур'єра складає 15 хвилин.
                <br />
                Якщо на момент доставки кольорів одержувача немає або немає
                можливості з інших причин зробити доставку (зазначена неточна
                адреса, закриті вхідні двері, контрольно-пропускна система та
                ін), ми залишаємо за собою право на свій вибір:
              </AdittionText>
              <AdittionUl>
                <li>залишити квіти тому, хто відчинив двері;</li>
                <li>
                  із замовником погодили повторну доставку, що додатково
                  оплачується;
                </li>
                <li>відмовитися від передачі квітів без повернення коштів.</li>
              </AdittionUl>
              <AdittionText>
                Якщо ви або інший одержувач не отримали замовлення, вам
                необхідно повідомити про це менеджера за телефоном
                <AdittionTextSpan> +380 98 113 69 69.</AdittionTextSpan>
              </AdittionText>
              <BlocksTitle>Повернення грошей:</BlocksTitle>
              <AdittionText>
                При відмові замовника від замовлення протягом двох годин, якщо
                замовлення ще не почало готуватися, кошти повертаються в повному
                обсязі. Якщо ж флорист почав підготовку, то замовник має право
                на повернення 50% вартості, або, якщо ще не було сплачено, то
                має сплатити 50%.
              </AdittionText>
              <AdittionText>
                Квіти належної якості поверненню та обміну не підлягають, а якщо
                є якісь недоліки в кольорах – повернення проводиться лише якщо
                ці недоліки не є природними та природними вадами рослини.
                Повернення коштів здійснюється негайно на той рахунок, з якого
                відбулася оплата, їх же надходження на рахунок залежить від
                платіжної системи.
              </AdittionText>
            </AdditionBlock>
          </DeliveryContent>
        </Container>
      </Delivery>
      <Footer />
    </>
  );
};

export default DeliveryPage;
