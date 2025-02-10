import Breadcrumbs from '../components/BreadcrumbsContainer';
import Footer from '../components/Footer';
import Container from '../styles/Container';
import ButtonLink from '../components/ButtonLink';
import styled from 'styled-components';
import { useEffect } from 'react';

const Contacts = styled.div`
  position: relative;
  background-image: url(/images/contacts-back.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  content: '';
  width: 100%;
  height: 222rem;
  margin-top: 10rem;
`;

const ContactsTitle = styled.h1`
  font-size: 10rem;
  font-weight: 400;
  line-height: 12rem;
  letter-spacing: 0.02rem;
  font-family: 'Cormorant', serif;
  text-transform: uppercase;
  margin-left: 12rem;
  margin-bottom: 4rem;
`;

const ContactsBlock = styled.ul`
  ${({ theme }) => theme.mixins.flex};
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 14rem;
`;

const ContactsBlockLi = styled.li`
  ${({ theme }) => theme.mixins.flex};
  width: 25.5rem;
  height: 25.5rem;
  border-radius: 2rem;
  background-color: #00000033;
  backdrop-filter: blur(8px);
  padding: 2rem;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  gap: 3rem;
`;

const ContactsBlockSpan = styled.span`
  font-size: 2rem;
  font-weight: 700;
  line-height: 3rem;
  letter-spacing: 0.04rem;
  font-family: 'Oswald', sans-serif;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.mainColor};
`;

const ContactsBlockLiText = styled.p`
  font-size: 2rem;
  font-weight: 300;
  line-height: 2.6rem;
  letter-spacing: 0.02rem;
  font-family: 'Oswald', sans-serif;
`;

const QuestionsBlock = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 20rem;

  &::after {
    position: absolute;
    content: '';
    width: 50rem;
    height: 40rem;
    background-image: url(/images/contacts-after.png);
    background-repeat: no-repeat;
    top: 45%;
    left: 25%;
  }
`;

const QuestionsTitle = styled.h2`
  font-family: 'Cormorant', serif;
  font-size: 10rem;
  font-weight: 400;
  line-height: 12rem;
  z-index: 2;
  text-transform: uppercase;
  letter-spacing: 0.02rem;
`;
const QuestionsTitleSpan = styled.span`
  font-family: 'Cormorant', serif;
  font-size: 10rem;
  font-weight: 400;
  line-height: 12rem;
  z-index: 2;
  text-transform: uppercase;
  letter-spacing: 0.02rem;
  margin-left: 55%;
`;

const QuestionsInfo = styled.div`
  display: flex;
  align-items: right;
  justify-content: right;
  flex-direction: column;
  width: 44.5rem;
  margin-top: 10rem;
  gap: 3rem;
`;

const QuestionsInfoText = styled.p`
  position: relative;
  margin-left: 40%;
  width: 25.5rem;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2.1rem;
  font-family: 'Oswald', sans-serif;
  letter-spacing: 0.04rem;
  text-transform: uppercase;

  &::before {
    position: absolute;
    content: '';
    top: -5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 25.5rem;
    height: 0.1rem;
    background-color: ${({ theme }) => theme.colors.mainColor};
  }
`;

const QuestionsForm = styled.form`
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  z-index: 3;
`;

const QuestionsFormInput = styled.input`
  width: 44.5rem;
  height: 6rem;
  background-color: transparent;
  border: 1px solid #555555;
  color: #555555;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2.1rem;
  font-family: 'Oswald', sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.04rem;
  padding: 2rem;
  cursor: pointer;
`;

const QuestionsFormArea = styled.textarea`
  width: 44.5rem;
  height: 12rem;
  background-color: transparent;
  border: 1px solid #555555;
  color: #555555;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2.1rem;
  font-family: 'Oswald', sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.04rem;
  padding: 2rem;
  cursor: pointer;
`;

const QuestionsFormText = styled.p`
  width: 34.2rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.2rem;
  text-align: left;
  letter-spacing: 0.02rem;
`;

const QuestionsFormTextSpan = styled.span`
  width: 34.2rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.2rem;
  text-align: left;
  letter-spacing: 0.02rem;
  text-decoration: underline;
  color: #922d2d;
`;

const ContactsIframe = styled.iframe`
  margin-top: 2rem;
`;

const ContactsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Contacts>
        <Container>
          <Breadcrumbs />
          <ContactsTitle>Контакти</ContactsTitle>
          <ContactsBlock>
            <ContactsBlockLi>
              <ContactsBlockSpan>Час Роботи</ContactsBlockSpan>
              <ContactsBlockLiText>
                з 10:00 до 21:00 без вихідних
              </ContactsBlockLiText>
            </ContactsBlockLi>
            <ContactsBlockLi>
              <ContactsBlockSpan>Адреса</ContactsBlockSpan>
              <ContactsBlockLiText>
                м.Київ, вул. Тараса Шевченка 67, офіс 112
              </ContactsBlockLiText>
            </ContactsBlockLi>
            <ContactsBlockLi>
              <ContactsBlockSpan>Телефон</ContactsBlockSpan>
              <ContactsBlockLiText> +380 (97) 113-69-69</ContactsBlockLiText>
            </ContactsBlockLi>
            <ContactsBlockLi>
              <ContactsBlockSpan>E-mail</ContactsBlockSpan>
              <ContactsBlockLiText>zakaz@loverflower.ua</ContactsBlockLiText>
            </ContactsBlockLi>
          </ContactsBlock>
          <QuestionsBlock>
            <QuestionsTitle>
              Напишіть <br />
              <QuestionsTitleSpan>нам</QuestionsTitleSpan>
            </QuestionsTitle>
            <QuestionsInfo>
              <QuestionsInfoText>
                Надішліть ваше запитання, замовлення, пропозицію або скаргу
                через форму зворотного зв'язку, і наш спеціаліст зв'яжеться з
                вами протягом 15 хвилин.
              </QuestionsInfoText>
              <QuestionsForm>
                <QuestionsFormInput type="text" placeholder="Ваше ім`я" />
                <QuestionsFormInput
                  type="tel"
                  placeholder="+38-(097)-777-77-77"
                />
                <QuestionsFormArea
                  rows="5"
                  cols="20"
                  placeholder="Ваш коментарій"
                />
                <ButtonLink text="Надіслати" />
                <QuestionsFormText>
                  Натискаючи на кнопку «Надіслати», я даю свою згоду на обробку
                  персональних даних відповідно до
                  <QuestionsFormTextSpan>
                    Політики конфіденційності
                  </QuestionsFormTextSpan>
                </QuestionsFormText>
              </QuestionsForm>
            </QuestionsInfo>
          </QuestionsBlock>
          <ContactsBlockSpan>Ми на карті</ContactsBlockSpan>
          <ContactsIframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2537.4757931944964!2d30.77264847656058!3d50.50671337160291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4d97de411b701%3A0x48116b28f7f00d94!2z0YPQuy4g0KLQsNGA0LDRgdCwINCo0LXQstGH0LXQvdC60L4sIDUsINCR0YDQvtCy0LDRgNGLLCDQmtC40LXQstGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCAwNzQwMA!5e0!3m2!1sru!2sua!4v1720375077819!5m2!1sru!2sua"
            width="100%"
            height="427"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></ContactsIframe>
        </Container>
      </Contacts>
      <Footer />
    </>
  );
};

export default ContactsPage;
