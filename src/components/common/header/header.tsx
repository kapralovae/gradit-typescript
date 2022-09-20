import { useState } from 'react';
import logo from '../../../assets/img/logo.svg';
import * as S from './header.styled';

const Header = () => {

  const [activeLink, setActiveLink] = useState('Квесты');

  const handleLinkClick = (evt: React.MouseEvent<HTMLLIElement>) => {
    evt.preventDefault();
    console.log(evt.currentTarget.innerText);
    setActiveLink(evt.currentTarget.innerText);
  };



  return(
  <S.StyledHeader>
    <S.HeaderWrapper>
      <S.Logo>
        <S.Image src={logo} alt="Логотип Escape Room" width="134" height="50" />
      </S.Logo>

      <S.Navigation>
        <S.Links>
          <S.LinkItem onClick={handleLinkClick}>
            <S.Link  isActiveLink={activeLink === 'Квесты'} to="/">
              Квесты
            </S.Link>
          </S.LinkItem>

          <S.LinkItem onClick={handleLinkClick}>
            <S.Link isActiveLink={activeLink === 'Новичкам'} to="#">Новичкам</S.Link>
          </S.LinkItem>

          <S.LinkItem onClick={handleLinkClick}>
            <S.Link isActiveLink={activeLink === 'Отзывы'} to="#">Отзывы</S.Link>
          </S.LinkItem>

          <S.LinkItem onClick={handleLinkClick}>
            <S.Link isActiveLink={activeLink === 'Акции'} to="#">Акции</S.Link>
          </S.LinkItem>

          <S.LinkItem onClick={handleLinkClick}>
            <S.Link isActiveLink={activeLink === 'Контакты'} to="/contacts">Контакты</S.Link>
          </S.LinkItem>
        </S.Links>
      </S.Navigation>
      <S.Phone href="tel:88003335599">8 (800) 333-55-99</S.Phone>
    </S.HeaderWrapper>
  </S.StyledHeader>
  );
}

export default Header;
