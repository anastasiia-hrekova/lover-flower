import styled from 'styled-components';
import ButtonToCart from '../features/ButtonToCart';
import {
  PhoneLink,
  PhoneLinkImg,
  SidebarBlock,
  AccentText,
  SidebarText,
  SocialSide,
  ListSide,
  SocialImg,
  SidebarCall,
  CallBtn,
  SidebarCart,
} from '../styles/SideBarStyles';

const SidebarStyle = styled.aside`
  position: absolute;
  display: flex;
  z-index: 2;
  text-transform: uppercase;
  right: 14%;
  top: 3rem;
  transform: translateX(100%);
  animation: slideIn 1s ease-out forwards;

  @keyframes slideIn {
    from {
      transform: translateX(100%); 
    }
    to {
      transform: translateX(0); 
  }

`;

const Sidebar = () => {
  return (
    <SidebarStyle>
      <SidebarBlock>
        <div>
          <AccentText>zakaz@loverflower.ua</AccentText>
          <SidebarText>Доставка 24/7 після узгодження з оператором</SidebarText>
          <AccentText>вул. Тараса Шевченка 67</AccentText>
          <SidebarText>
            10:00 до 21:00 <br /> без вихідних
          </SidebarText>
        </div>
        <SocialSide>
          <ListSide>
            <li>
              <a href="https://www.instagram.com/">
                <SocialImg src="images/instagram.png" alt="instagram" />
              </a>
            </li>
            <li>
              <a href="https://www.whatsapp.com/?lang=uk">
                <SocialImg src="images/whats-up.png" alt="whats-up" />
              </a>
            </li>
            <li>
              <a href="tel:+380971136969">
                <SocialImg src="images/call.png" alt="call" />
              </a>
            </li>
          </ListSide>
        </SocialSide>
        <SidebarCall>
          <PhoneLink>+380 (97) 113-69-69</PhoneLink>
          <CallBtn>
            <PhoneLink>
              <PhoneLinkImg src="images/phone.svg" alt="call" />
              Замовити дзвінок
            </PhoneLink>
          </CallBtn>
        </SidebarCall>
        <SidebarCart>
          <ButtonToCart />
        </SidebarCart>
      </SidebarBlock>
    </SidebarStyle>
  );
};

export default Sidebar;
