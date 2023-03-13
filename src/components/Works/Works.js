import React from 'react';
import Card from './card/Card';
import websites from './card/websites.json';
import * as S from './WorksS';

export default function Works() {
  return (
    <S.Page>
      <S.Grid>
        {websites.map((website, index) => (
          <Card
            key={website.description}
            hexa={website.hexa}
            title={website.title}
            description={website.description}
            image={website.image}
          />
        ))}
      </S.Grid>
    </S.Page>
  );
}
