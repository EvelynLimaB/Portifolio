import React from 'react';
import * as S from './HeaderS';
import { Link } from 'react-router-dom';

const Header = ({ rota, rota2, rota3, rota4, show }) => {
  return (
    <S.Div>
      {show && (
        <S.Bar>
          <nav>
            <S.Links>
              <S.Linv>
                <Link to="/">{rota}</Link>
              </S.Linv>
              <S.Linv>
                <Link to="/works">{rota2}</Link>
              </S.Linv>
              <S.Linv>
                <Link to="/about">{rota3}</Link>
              </S.Linv>
            </S.Links>
          </nav>
        </S.Bar>
      )}
    </S.Div>
  );
};

export default Header;
