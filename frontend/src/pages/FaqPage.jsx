import { useEffect } from 'react';
import Breadcrumbs from '../components/BreadcrumbsContainer';
import Footer from '../components/Footer';
import Container from '../styles/Container';
import styled from 'styled-components';

const FaqContent = styled.div`
  position: relative;
  background-image: url(/images/faq-back.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  content: '';
  width: 100%;
  height: 110rem;
  margin-top: 10rem;

  &::after {
    position: absolute;
    background-image: url(/images/faq-1.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    content: '';
    width: 8rem;
    height: 24rem;
    top: -10rem;
    left: 0;
    z-index: 11;
  }

  &::before {
    position: absolute;
    background-image: url(/images/faq-2.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    content: '';
    width: 42rem;
    height: 72rem;
    top: -8rem;
    right: 0;
    z-index: 11;
  }
`;

const FaqTitle = styled.div`
  position: relative;
  font-size: 10rem;
  font-weight: 400;
  line-height: 12rem;
  letter-spacing: 0.02rem;
  color: ${({ theme }) => theme.colors.textColor};
  font-family: 'Cormorant', serif;
  text-transform: uppercase;
  margin-left: 12rem;
  margin-bottom: 4rem;
`;

const FaqTitleSpan = styled.span`
  position: absolute;
  content: '';
  width: 6.5rem;
  border: 1px solid ${({ theme }) => theme.colors.mainColor};
  bottom: 50%;
  left: -12rem;
`;

const BlockQuestions = styled.div`
  width: 82.5rem;
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const FaqDetails = styled.details`
  border: 1px solid ${({ theme }) => theme.colors.mainColor};
  height: 7rem;
  align-content: center;
  font-size: 2rem;
  font-weight: 400;
  line-height: 3rem;
  font-family: 'Oswald', sans-serif;
  text-align: left;
  padding: 2rem;
  cursor: pointer;
  margin-bottom: 1rem;

  .question-minus {
    display: none;
  }

  &[open] {
    height: auto;

    .question-plus {
      display: none;
    }

    .question-minus {
      display: flex;
    }
  }

  &[open] summary {
    border: none;
    padding-right: 0;
    padding-bottom: 20px;
  }
`;

const FaqSummary = styled.summary`
  ${({ theme }) => theme.mixins.flex};
  flex-direction: row;
  justify-content: space-between;
  list-style: none;
`;

const FaqPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <FaqContent>
        <Container>
          <Breadcrumbs />
          <FaqTitle>
            <FaqTitleSpan></FaqTitleSpan> Faq
          </FaqTitle>
          <BlockQuestions>
            <FaqDetails>
              <FaqSummary>
                ЧИ БУДЕ ЗАМОВЛЕНИЙ БУКЕТ В ТОЧНОСТІ ВІДПОВІДАТИ ЙОГО ЗОБРАЖЕННЯ
                НА САЙТІ?
                <img
                  class="question-plus"
                  src="/images/plus.png"
                  alt="look answer"
                />
                <img
                  class="question-minus"
                  src="/images/minus.png"
                  alt="close answer"
                />
              </FaqSummary>
              Букет збирається за індивідуальною матрицею букета. Однак можливі
              випадки, коли немає необхідних кольорів або наявні квіти від
              представлених на фото, і з узгодження замовника вони можуть бути
              замінені на аналогічні.
            </FaqDetails>
            <FaqDetails>
              <FaqSummary>
                ЯК ДОВГО СТОЯТЬ БУКЕТИ ІЗ СУХОКВІТІВ?
                <img
                  class="question-plus"
                  src="/images/plus.png"
                  alt="look answer"
                />
                <img
                  class="question-minus"
                  src="/images/minus.png"
                  alt="close answer"
                />
              </FaqSummary>
              Букет збирається за індивідуальною матрицею букета. Однак можливі
              випадки, коли немає необхідних кольорів або наявні квіти від
              представлених на фото, і з узгодження замовника вони можуть бути
              замінені на аналогічні.
            </FaqDetails>
            <FaqDetails>
              <FaqSummary>
                ЧИ РОБИТЕ ВИ ФОТО ГОТОВОГО БУКЕТУ ПЕРЕД ВІДПРАВКОЮ?
                <img
                  class="question-plus"
                  src="/images/plus.png"
                  alt="look answer"
                />
                <img
                  class="question-minus"
                  src="/images/minus.png"
                  alt="close answer"
                />
              </FaqSummary>
              Букет збирається за індивідуальною матрицею букета. Однак можливі
              випадки, коли немає необхідних кольорів або наявні квіти від
              представлених на фото, і з узгодження замовника вони можуть бути
              замінені на аналогічні.
            </FaqDetails>
            <FaqDetails>
              <FaqSummary>
                А СКІЛЬКИ ПОВИННІ ПРОСТОЯТИ КВІТИ У БУКЕТІ?
                <img
                  class="question-plus"
                  src="/images/plus.png"
                  alt="look answer"
                />
                <img
                  class="question-minus"
                  src="/images/minus.png"
                  alt="close answer"
                />
              </FaqSummary>
              Букет збирається за індивідуальною матрицею букета. Однак можливі
              випадки, коли немає необхідних кольорів або наявні квіти від
              представлених на фото, і з узгодження замовника вони можуть бути
              замінені на аналогічні.
            </FaqDetails>
            <FaqDetails>
              <FaqSummary>
                ЧИ Є ДОСТАВКА ЗА МЕЖІ КИЄВА?
                <img
                  class="question-plus"
                  src="/images/plus.png"
                  alt="look answer"
                />
                <img
                  class="question-minus"
                  src="/images/minus.png"
                  alt="close answer"
                />
              </FaqSummary>
              Букет збирається за індивідуальною матрицею букета. Однак можливі
              випадки, коли немає необхідних кольорів або наявні квіти від
              представлених на фото, і з узгодження замовника вони можуть бути
              замінені на аналогічні.
            </FaqDetails>
            <FaqDetails>
              <FaqSummary>
                ЯК ВИЗНАЧИТИ ЧИ СВІЖІ КВІТИ?
                <img
                  class="question-plus"
                  src="/images/plus.png"
                  alt="look answer"
                />
                <img
                  class="question-minus"
                  src="/images/minus.png"
                  alt="close answer"
                />
              </FaqSummary>
              Букет збирається за індивідуальною матрицею букета. Однак можливі
              випадки, коли немає необхідних кольорів або наявні квіти від
              представлених на фото, і з узгодження замовника вони можуть бути
              замінені на аналогічні.
            </FaqDetails>
            <FaqDetails>
              <FaqSummary>
                ЧИМ ВІДРІЗНЯЄТЬСЯ УКРАЇНСЬКА ТРОЯНДЯ ВІД ІМПОРТНОЇ?
                <img
                  class="question-plus"
                  src="/images/plus.png"
                  alt="look answer"
                />
                <img
                  class="question-minus"
                  src="/images/minus.png"
                  alt="close answer"
                />
              </FaqSummary>
              Букет збирається за індивідуальною матрицею букета. Однак можливі
              випадки, коли немає необхідних кольорів або наявні квіти від
              представлених на фото, і з узгодження замовника вони можуть бути
              замінені на аналогічні.
            </FaqDetails>
          </BlockQuestions>
        </Container>
      </FaqContent>
      <Footer />
    </>
  );
};

export default FaqPage;
