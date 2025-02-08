import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { selectFlowers } from '../redux/slices/cardsSlice';
import styled from 'styled-components';
import {
  incrementQuantity,
  decrementQuantity,
} from '../redux/slices/cartSlice';
import BreadCrumbs from '../components/BreadcrumbsContainer';
import Footer from '../components/Footer';
import Container from '../styles/Container';
import AddToCart from '../components/AddToCart';
import CardsCarousel from '../components/CardsCarousel';
import { addToCart } from '../redux/slices/cartSlice';
import ButtonLink from '../components/ButtonLink';
import CarouselForProduct from '../components/CarouselForProduct';

const ProductBlock = styled.div`
  position: relative;
  width: 100%;
  min-height: 350rem;
  height: auto;
  margin-top: 10rem;
  margin-bottom: 20rem;

  &:before {
    width: 100%;
    height: 140rem;
    position: absolute;
    content: '';
    background-image: url(/images/product-card-back.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    top: 0;
    z-index: -1;
  }

  &:after {
    width: 100vw;
    height: 50rem;
    position: absolute;
    content: '';
    background-image: url(/images/search-bottom.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    top: 87%;
    left: 0;
    z-index: -1;
  }
`;

const ProductTitle = styled.h1`
  font-family: 'Cormorant', serif;
  font-size: 4rem;
  font-weight: 400;
  line-height: 4.9rem;
  letter-spacing: 0.02rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textColor};
`;

const BackBtn = styled.button`
  position: relative;
  background-color: transparent;
  border: none;
  margin-bottom: 2rem;
  margin-left: 2rem;
  color: ${({ theme }) => theme.colors.textColor};
  font-family: 'Oswald', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
  letter-spacing: 0.04rem;
  text-transform: uppercase;
  cursor: pointer;

  &:before {
    width: 1.6rem;
    height: 1.6rem;
    position: absolute;
    content: '';
    background-image: url(/images/back-arrow.png);
    background-size: content;
    background-repeat: no-repeat;
    margin-left: -2rem;
  }
`;

const FlowerNewPrice = styled.p`
  color: ${({ theme }) => theme.colors.mainColor};
  font-family: 'Oswald', sans-serif;
  font-size: 3rem;
  font-weight: 700;
  line-height: 4.5rem;
  letter-spacing: 0.04rem;
  text-transform: uppercase;
  margin-bottom: 2rem;
`;

const FlowerOldPrice = styled.span`
  color: #555555;
  font-family: 'Oswald', sans-serif;
  font-size: 3rem;
  font-weight: 300;
  line-height: 4.5rem;
  letter-spacing: 0.04rem;
  text-transform: uppercase;
  text-decoration: line-through;
  margin-left: 2rem;
`;

const FlowerDesc = styled.p`
  color: ${({ theme }) => theme.colors.textColor};
  font-family: 'Oswald', sans-serif;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2.1rem;
  letter-spacing: 0.04rem;
  text-transform: uppercase;
  margin-bottom: 7rem;
`;

const FlowerInfoBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 3rem;
  margin-bottom: 8rem;
`;

const FlowerActions = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3rem;
`;

const BlockImg = styled.img`
  width: 35rem;
  height: 45rem;
`;

const ProductQuantityBlock = styled.div`
  ${({ theme }) => theme.mixins.flex};
  flex-direction: row;
  width: 10rem;
  height: 3rem;
  border: 0.5px solid #555555;
  justify-content: space-around;
  color: #555555;
  font-family: 'Oswald', sans-serif;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.8rem;
  letter-spacing: 0.1rem;
`;

const QuantityBtn = styled.button`
  color: #555555;
  font-family: 'Oswald', sans-serif;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.8rem;
  letter-spacing: 0.1rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const AddToOrder = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2.5rem;
  margin-bottom: 10rem;
`;

const AddBlocks = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;
  text-align: center;
`;

const AddBlock = styled.li`
  position: relative;
  width: 25.5rem;
  height: 24rem;
  border-radius: 2rem;
  background-color: #0000004d;
  backdrop-filter: blur(20px);
  padding: 3rem 1.7rem;

  &:before {
    position: absolute;
    content: '';
    width: 3rem;
    height: 3rem;
    background-color: ${({ theme }) => theme.colors.backgroundColor};
    border-radius: 50%;
    top: -5%;
    left: 45%;
  }
`;

const AddBlockTitle = styled.h3`
  color: ${({ theme }) => theme.colors.mainColor};
  font-family: 'Oswald', sans-serif;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2.1rem;
  letter-spacing: 0.04rem;
  text-transform: uppercase;
  margin-bottom: 2rem;
`;

const AddTitle = styled.h3`
  color: ${({ theme }) => theme.colors.accentColor};
  font-family: 'Oswald', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  line-height: 3rem;
  letter-spacing: 0.04rem;
  text-transform: uppercase;
  margin-bottom: 2rem;
`;

const AddText = styled.p`
  width: 21.7rem;
  color: ${({ theme }) => theme.colors.textColor};
  font-family: 'Oswald', sans-serif;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2.1rem;
  letter-spacing: 0.06rem;
`;

const DeliveryBlock = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  margin-bottom: 10rem;

  &:after {
    width: 50rem;
    height: 80rem;
    position: absolute;
    content: '';
    background-image: url(/images/product-card.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: right;
    top: 10%;
    right: -15%;
    z-index: -1;
  }
`;

const DeliveryBlockBtns = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 6rem;
`;

const BlockButton = styled.button`
  background-color: transparent;
  border: none;
  border-bottom: ${props => (props.$active ? '3px' : '1px')} solid
    ${props => (props.$active ? ' #43FFD2' : '#555')};
  color: ${props => (props.$active ? ' #43FFD2' : '#555')};
  width: 35.8rem;
  text-align: center;
  font-family: 'Oswald', sans-serif;
  font-size: 2rem;
  font-weight: 300;
  line-height: 3rem;
  letter-spacing: 0.04rem;
  text-transform: uppercase;
  padding: 3rem;
  cursor: pointer;
`;

const DeliveryBlocks = styled.ul`
  display: flex;
  flex-direction: column;
  margin-bottom: 6rem;
  list-style: unset;
`;

const DeliveryText = styled.li`
  color: ${({ theme }) => theme.colors.textColor};
  font-family: 'Oswald', sans-serif;
  font-size: 2rem;
  font-weight: 300;
  line-height: 2.6rem;
  letter-spacing: 0.02rem;
  text-transform: uppercase;
  margin-left: 2rem;
  margin-bottom: 1rem;
`;

const BoldSpan = styled.span`
  font-weight: 700;
`;

const ColorSpan = styled.span`
  color: ${({ theme }) => theme.colors.mainColor};
`;

const ReviewsBlockTitle = styled.p`
  color: ${({ theme }) => theme.colors.mainColor};
  font-family: 'Oswald', sans-serif;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2.1rem;
  letter-spacing: 0.06rem;
  text-transform: uppercase;
`;

const ReviewsBlockText = styled.p`
  color: ${({ theme }) => theme.colors.textColor};
  font-family: 'Oswald', sans-serif;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2.1rem;
  letter-spacing: 0.06rem;
  margin-bottom: 2rem;
`;

const ReviewsForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const ReviewsFormLabel = styled.label`
  color: ${({ theme }) => theme.colors.textColor};
  font-family: 'Oswald', sans-serif;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2.1rem;
  letter-spacing: 0.06rem;
  margin-bottom: 4px;
`;

const ReviewsFormInput = styled.input`
  all: unset;
  background-color: transparent;
  border: 1px solid #555555;
  width: 54rem;
  height: 2rem;
  margin-bottom: 2rem;
  padding: 2rem;
  font-family: 'Oswald', sans-serif;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2.1rem;
  letter-spacing: 0.04rem;
  text-transform: uppercase;
`;

const ReviewsFormTextarea = styled.textarea`
  all: unset;
  background-color: transparent;
  border: 1px solid #555555;
  width: 54rem;
  height: 18rem;
  margin-bottom: 2rem;
  padding: 2rem;
  font-family: 'Oswald', sans-serif;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2.1rem;
  letter-spacing: 0.04rem;
  text-transform: uppercase;
`;

const RatingBlock = styled.div`
  margin-bottom: 2rem;
`;

const ReviewStart = styled.p`
  font-family: 'Oswald', sans-serif;
  font-size: 3rem;
  font-weight: 400;
  line-height: 4.5rem;
  letter-spacing: 0.02rem;
  color: ${({ theme }) => theme.colors.mainColor};
`;

const ReviewText = styled.p`
  font-family: 'Oswald', sans-serif;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.4rem;
  letter-spacing: 0.02rem;
  color: ${({ theme }) => theme.colors.textColor};
`;

const ReviewAuthor = styled.p`
  font-family: 'Oswald', sans-serif;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2.1rem;
  letter-spacing: 0.02rem;
  color: #555;
`;

const ReviewBlock = styled.li`
  margin-bottom: 4rem;
`;

const PrivacyBlock = styled.p`
  position: relative;
  color: ${({ theme }) => theme.colors.textColor};
  font-family: 'Oswald', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.2rem;
  letter-spacing: 0.02rem;
  width: 34.2rem;
  margin-top: 1rem;
`;

const PrivacyBlockSpan = styled.span`
  color: ${({ theme }) => theme.colors.accentColor};
  text-decoration: underline;
`;

const initialReviews = [
  {
    id: 1,
    author: 'Іван Іванов',
    text: 'Чудовий товар! Рекомендую.',
    rating: 5,
  },
  {
    id: 2,
    author: 'Марія Петрова',
    text: 'Дуже сподобалося, буду замовляти знову.',
    rating: 4,
  },
];

const ProductPage = () => {
  const { id } = useParams();
  const products = useSelector(selectFlowers);
  const product = products.find(item => Number(item.id) === Number(id));
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [activeTab, setActiveTab] = useState('delivery');
  const [reviews, setReviews] = useState(initialReviews);
  const [newReview, setNewReview] = useState('');
  const [rating, setRating] = useState(0);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAddReview = () => {
    if (!userName || !userEmail || !newReview.trim() || rating === 0) {
      alert("Будь-ласка, заповніть всі обов'язкові поля.");
      return;
    }
    if (newReview.trim()) {
      const newReviewObj = {
        id: Date.now(),
        author: userName,
        text: newReview,
        rating,
        date: new Date().toLocaleDateString(),
      };
      setReviews([...reviews, newReviewObj]);
      setNewReview('');
      setUserName('');
      setUserEmail('');
      setRating(0);
    }
  };

  const renderStars = (selectedRating, onSelect) => {
    return (
      <div>
        {[1, 2, 3, 4, 5].map(star => (
          <span
            key={star}
            onClick={() => onSelect(star)}
            style={{
              cursor: 'pointer',
              fontSize: '2.4rem',
              color: star <= selectedRating ? 'gold' : 'gray',
              marginBottom: '2rem',
            }}
          >
            {star <= selectedRating ? '★' : '☆'}
          </span>
        ))}
      </div>
    );
  };

  const handleTabClick = tab => {
    setActiveTab(tab);
  };

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <>
      <ProductBlock>
        <Container>
          <BreadCrumbs />
          {product ? (
            <>
              <FlowerInfoBlock>
                <CarouselForProduct images={product.images} />
                <div>
                  <BlockImg src={product.image} alt="flower" />
                </div>
                <div>
                  <BackBtn onClick={() => navigate(-1)}>Назад</BackBtn>
                  <ProductTitle>{product.title}</ProductTitle>
                  <FlowerNewPrice>
                    {product.price} грн
                    {product.onSale && product.oldPrice && (
                      <FlowerOldPrice>{product.oldPrice} грн</FlowerOldPrice>
                    )}
                  </FlowerNewPrice>
                  <FlowerDesc>{product.description}</FlowerDesc>
                  <FlowerActions>
                    <AddToCart onClick={handleAddToCart} />
                    <ProductQuantityBlock
                      style={{ width: '16rem', height: '5rem' }}
                    >
                      <QuantityBtn
                        onClick={() =>
                          dispatch(decrementQuantity({ id: product.id }))
                        }
                      >
                        -
                      </QuantityBtn>
                      <p>{product.quantity || 1}</p>
                      <QuantityBtn
                        onClick={() =>
                          dispatch(incrementQuantity({ id: product.id }))
                        }
                      >
                        +
                      </QuantityBtn>
                    </ProductQuantityBlock>
                  </FlowerActions>
                </div>
              </FlowerInfoBlock>
              <AddToOrder>
                <AddTitle>Додатково до замовлення:</AddTitle>
                <AddBlocks>
                  <AddBlock>
                    <AddBlockTitle>
                      Добрива для <br />
                      зрізаних квітів
                    </AddBlockTitle>
                    <AddText>
                      При вказівці про це у побажаннях до букету, ми додамо
                      пакетик добрива для вас
                    </AddText>
                  </AddBlock>
                  <AddBlock>
                    <AddBlockTitle>
                      підпишемо <br />
                      листівку
                    </AddBlockTitle>
                    <AddText>
                      У побажаннях до букета вкажіть текст, який бажаєте
                      розмістити та виберіть на сайті саму листівку
                    </AddText>
                  </AddBlock>
                  <AddBlock>
                    <AddBlockTitle>
                      Фото букета <br />
                      перед відправкою
                    </AddBlockTitle>
                    <AddText>
                      У примітці до замовлення вкажіть про це ми відправимо фото
                      готового букета перед доставкою. У святкові дні у зв'язку
                      з великою завантаженістю такої можливості немає
                    </AddText>
                  </AddBlock>
                  <AddBlock>
                    <AddBlockTitle>Букет-сюрприз</AddBlockTitle>
                    <AddText>
                      Якщо хочете, щоб одержувач не знав, що йому вручать і від
                      когось, то вкажіть про це у примітці до замовлення
                    </AddText>
                  </AddBlock>
                </AddBlocks>
              </AddToOrder>
              <DeliveryBlock>
                <DeliveryBlockBtns>
                  <BlockButton
                    onClick={() => handleTabClick('delivery')}
                    $active={activeTab === 'delivery'}
                  >
                    доставка та оплата
                  </BlockButton>
                  <BlockButton
                    onClick={() => handleTabClick('reviews')}
                    $active={activeTab === 'reviews'}
                  >
                    відгуки
                  </BlockButton>
                </DeliveryBlockBtns>
                {activeTab === 'delivery' && (
                  <>
                    <DeliveryBlocks>
                      <AddTitle>Способи оплати:</AddTitle>
                      <DeliveryText>
                        Банківською картою при оформленні замовлення через сайт
                      </DeliveryText>
                      <DeliveryText>
                        Готівкою або банківською картою при самовивозі
                      </DeliveryText>
                      <DeliveryText>
                        Готівкою при доставці кур'єром
                      </DeliveryText>
                    </DeliveryBlocks>
                    <DeliveryBlocks>
                      <AddTitle>Вартість доставки:</AddTitle>
                      <DeliveryText>
                        <BoldSpan>Безкоштовно</BoldSpan> - при замовленні на
                        суму
                        <ColorSpan> від 1500 грн</ColorSpan>
                      </DeliveryText>
                      <DeliveryText>
                        <BoldSpan>150 грн</BoldSpan> - при замовленні на суму
                        <ColorSpan> менше 1500 грн</ColorSpan>
                      </DeliveryText>
                      <DeliveryText>
                        Можливість, терміни та вартість доставки за межі Києва,
                        доставки у нічний час, свята
                        <ColorSpan> обмовляються з менеджером</ColorSpan>
                      </DeliveryText>
                      <DeliveryText>
                        Також ви можете забрати ваше замовлення самостійно за
                        адресою:
                        <br />
                        <ColorSpan>
                          м. Київ, вул. Тараса Шевченка 67, щоденно з 10:00 до
                          21:00
                        </ColorSpan>
                      </DeliveryText>
                    </DeliveryBlocks>
                    <AddTitle>Умови доставки:</AddTitle>
                    <DeliveryText
                      style={{ listStyle: 'none', marginLeft: '0' }}
                    >
                      Доставка здійснюється по місту в межах Києва
                      <ColorSpan>
                        {' '}
                        будь-якого дня з 09.00 до 22.00.
                      </ColorSpan>{' '}
                      Доставка у нічний час здійснюється за домовленістю з
                      оператором
                    </DeliveryText>
                  </>
                )}
                {activeTab === 'reviews' && (
                  <>
                    {reviews.length === 0 ? (
                      <ReviewText style={{ marginBottom: '6rem' }}>
                        Відгуків поки немає
                      </ReviewText>
                    ) : (
                      <ul>
                        {reviews.map(review => (
                          <ReviewBlock key={review.id}>
                            <ReviewStart>"</ReviewStart>
                            <ReviewText>{review.text}</ReviewText> <br />
                            {renderStars(review.rating, () => {})}
                            <ReviewAuthor>
                              {review.author}, {review.date}
                            </ReviewAuthor>
                          </ReviewBlock>
                        ))}
                      </ul>
                    )}
                    <div>
                      <ReviewsBlockTitle>
                        Будьте першим, хто залишив відгук на "{product.title}"
                      </ReviewsBlockTitle>
                      <ReviewsBlockText>
                        Ваша адреса email не буде опублікована. Обов'язкові поля
                        позначені *
                      </ReviewsBlockText>
                      <RatingBlock>
                        <ReviewsBlockText style={{ marginBottom: '0' }}>
                          Ваша оцінка:
                        </ReviewsBlockText>
                        {renderStars(rating, setRating)}
                      </RatingBlock>
                      <ReviewsForm>
                        <ReviewsFormLabel htmlFor="comment">
                          Ваш відгук*
                        </ReviewsFormLabel>
                        <ReviewsFormTextarea
                          id="comment"
                          type="textarea"
                          value={newReview}
                          onChange={e => setNewReview(e.target.value)}
                          placeholder="Введіть комментар"
                          required
                        />
                        <ReviewsFormLabel htmlFor="name">
                          Ім'я*
                        </ReviewsFormLabel>
                        <ReviewsFormInput
                          id="name"
                          type="text"
                          value={userName}
                          onChange={e => setUserName(e.target.value)}
                          placeholder="Введіть ваше ім'я"
                          required
                        />
                        <ReviewsFormLabel htmlFor="email">
                          E-mail*
                        </ReviewsFormLabel>
                        <ReviewsFormInput
                          id="email"
                          type="email"
                          value={userEmail}
                          onChange={e => setUserEmail(e.target.value)}
                          placeholder="Введіть вашу пошту"
                          required
                        />
                        <ButtonLink
                          text="Відправити"
                          onNavigate={handleAddReview}
                        />
                        <PrivacyBlock>
                          Натискаючи на кнопку «До Оплати», я даю свою згоду на
                          обробку персональних даних, відповідно до
                          <PrivacyBlockSpan>
                            Політики конфіденційності
                          </PrivacyBlockSpan>
                          , а також ознайомлений з умовами оплати та доставки
                        </PrivacyBlock>
                      </ReviewsForm>
                    </div>
                  </>
                )}
              </DeliveryBlock>
              <CardsCarousel />
            </>
          ) : (
            <ReviewsBlockTitle>Товару не знайдено</ReviewsBlockTitle>
          )}
        </Container>
      </ProductBlock>
      <Footer />
    </>
  );
};

export default ProductPage;
