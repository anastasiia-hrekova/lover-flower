import styled from 'styled-components';
import ButtonToCart from '../features/ButtonToCart';
import {
  PhoneLink,
  SidebarBlock,
  AccentText,
  SidebarText,
  SocialSide,
  ListSide,
  SocialImg,
  SidebarCall,
  SidebarCart,
} from '../styles/SideBarStyles';
import CallBtn from './CallBtn';

const SidebarStyle = styled.aside`
  position: absolute;
  display: flex;
  z-index: 2;
  text-transform: uppercase;
  right: 10%;
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
                <SocialImg src="/images/instagram.png" alt="instagram" />
              </a>
            </li>
            <li>
              <a href="https://www.whatsapp.com/?lang=uk">
                <SocialImg src="/images/whats-up.png" alt="whats-up" />
              </a>
            </li>
            <li>
              <a href="tel:+380971136969">
                <SocialImg src="/images/call.png" alt="call" />
              </a>
            </li>
          </ListSide>
        </SocialSide>
        <SidebarCall>
          <PhoneLink href="tel:+380971136969">+380 (97) 113-69-69</PhoneLink>
          <CallBtn />
        </SidebarCall>
        <SidebarCart>
          <ButtonToCart />
        </SidebarCart>
      </SidebarBlock>
    </SidebarStyle>
  );
};

export default Sidebar;
