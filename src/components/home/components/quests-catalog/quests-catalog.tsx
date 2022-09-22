import {ReactComponent as IconAllQuests} from '../../../../assets/img/icon-all-quests.svg';
import {ReactComponent as IconAdventures} from '../../../../assets/img/icon-adventures.svg';
import {ReactComponent as IconHorrors} from '../../../../assets/img/icon-horrors.svg';
import {ReactComponent as IconMystic} from '../../../../assets/img/icon-mystic.svg';
import {ReactComponent as IconDetective} from '../../../../assets/img/icon-detective.svg';
import {ReactComponent as IconScifi} from '../../../../assets/img/icon-scifi.svg';
import * as S from './quests-catalog.styled';
import { useState } from 'react';
import React from 'react';
import { useAppSelector } from '../../../../hooks';
import { QuestCard } from './quest-card';

const QuestsCatalog = () => {

  const [thematic, setThematic] = useState('Все квесты');
  const quests = useAppSelector((state) => state.quests);
  console.log(quests);

  const handleTabBtnClick = (evt: React.MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    setThematic(evt.currentTarget.innerText);
  };

  return(
  <>
    <S.Tabs>
      <S.TabItem>
        <S.TabBtn onClick={handleTabBtnClick} isActive={thematic === 'Все квесты'}>
          <IconAllQuests />
          <S.TabTitle >Все квесты</S.TabTitle>
        </S.TabBtn>
      </S.TabItem>

      <S.TabItem>
        <S.TabBtn onClick={handleTabBtnClick} isActive={thematic === 'Приключения'}>
          <IconAdventures />
          <S.TabTitle>Приключения</S.TabTitle>
        </S.TabBtn>
      </S.TabItem>

      <S.TabItem>
        <S.TabBtn onClick={handleTabBtnClick} isActive={thematic === 'Ужасы'}>
          <IconHorrors />
          <S.TabTitle>Ужасы</S.TabTitle>
        </S.TabBtn>
      </S.TabItem>

      <S.TabItem>
        <S.TabBtn onClick={handleTabBtnClick} isActive={thematic === 'Мистика'}>
          <IconMystic />
          <S.TabTitle>Мистика</S.TabTitle>
        </S.TabBtn>
      </S.TabItem>

      <S.TabItem>
        <S.TabBtn onClick={handleTabBtnClick} isActive={thematic === 'Детектив'}>
          <IconDetective />
          <S.TabTitle>Детектив</S.TabTitle>
        </S.TabBtn>
      </S.TabItem>

      <S.TabItem>
        <S.TabBtn onClick={handleTabBtnClick} isActive={thematic === 'Sci-fi'}>
          <IconScifi />
          <S.TabTitle>Sci-fi</S.TabTitle>
        </S.TabBtn>
      </S.TabItem>
    </S.Tabs>

    <S.QuestsList>
    {quests.map((quest) => <QuestCard item={quest} key={quest.id}></QuestCard>)}
      {/* <S.QuestItem>
        <S.QuestItemLink to="/quest">
          <S.Quest>
            <S.QuestImage
              src="img/preview-sklep.jpg"
              width="344"
              height="232"
              alt="квест Склеп"
            />

            <S.QuestContent>
              <S.QuestTitle>Склеп</S.QuestTitle>

              <S.QuestFeatures>
                <S.QuestFeatureItem>
                  <IconPerson />
                  2–5 чел
                </S.QuestFeatureItem>
                <S.QuestFeatureItem>
                  <IconPuzzle />
                  сложный
                </S.QuestFeatureItem>
              </S.QuestFeatures>
            </S.QuestContent>
          </S.Quest>
        </S.QuestItemLink>
      </S.QuestItem>

      <S.QuestItem>
        <S.QuestItemLink to="/quest">
          <S.Quest>
            <S.QuestImage
              src="img/preview-maniac.jpg"
              width="344"
              height="232"
              alt="квест Маньяк"
            />

            <S.QuestContent>
              <S.QuestTitle>Маньяк</S.QuestTitle>

              <S.QuestFeatures>
                <S.QuestFeatureItem>
                  <IconPerson />
                  3–6 чел
                </S.QuestFeatureItem>
                <S.QuestFeatureItem>
                  <IconPuzzle />
                  средний
                </S.QuestFeatureItem>
              </S.QuestFeatures>
            </S.QuestContent>
          </S.Quest>
        </S.QuestItemLink>
      </S.QuestItem>

      <S.QuestItem>
        <S.QuestItemLink to="/quest">
          <S.Quest>
            <S.QuestImage
              src="img/preview-ritual.jpg"
              width="344"
              height="232"
              alt="квест Ритуал"
            />

            <S.QuestContent>
              <S.QuestTitle>Ритуал</S.QuestTitle>

              <S.QuestFeatures>
                <S.QuestFeatureItem>
                  <IconPerson />
                  3–5 чел
                </S.QuestFeatureItem>
                <S.QuestFeatureItem>
                  <IconPuzzle />
                  легкий
                </S.QuestFeatureItem>
              </S.QuestFeatures>
            </S.QuestContent>
          </S.Quest>
        </S.QuestItemLink>
      </S.QuestItem>

      <S.QuestItem>
        <S.QuestItemLink to="/quest">
          <S.Quest>
            <S.QuestImage
              src="img/preview-old-ceil.jpg"
              width="344"
              height="232"
              alt="квест История призраков"
            />

            <S.QuestContent>
              <S.QuestTitle>История призраков</S.QuestTitle>

              <S.QuestFeatures>
                <S.QuestFeatureItem>
                  <IconPerson />
                  5–6 чел
                </S.QuestFeatureItem>
                <S.QuestFeatureItem>
                  <IconPuzzle />
                  легкий
                </S.QuestFeatureItem>
              </S.QuestFeatures>
            </S.QuestContent>
          </S.Quest>
        </S.QuestItemLink>
      </S.QuestItem>

      <S.QuestItem>
        <S.QuestItemLink to="/quest">
          <S.Quest>
            <S.QuestImage
              src="img/preview-final-frontier.jpg"
              width="344"
              height="232"
              alt="квест Тайны старого особняка"
            />

            <S.QuestContent>
              <S.QuestTitle>Тайны старого особняка</S.QuestTitle>

              <S.QuestFeatures>
                <S.QuestFeatureItem>
                  <IconPerson />
                  2–3 чел
                </S.QuestFeatureItem>
                <S.QuestFeatureItem>
                  <IconPuzzle />
                  легкий
                </S.QuestFeatureItem>
              </S.QuestFeatures>
            </S.QuestContent>
          </S.Quest>
        </S.QuestItemLink>
      </S.QuestItem>

      <S.QuestItem>
        <S.QuestItemLink to="/quest">
          <S.Quest>
            <S.QuestImage
              src="img/preview-house-in-the-woods.jpg"
              width="344"
              height="232"
              alt="квест Хижина в лесу"
            />

            <S.QuestContent>
              <S.QuestTitle>Хижина в лесу</S.QuestTitle>

              <S.QuestFeatures>
                <S.QuestFeatureItem>
                  <IconPerson />
                  4–7 чел
                </S.QuestFeatureItem>
                <S.QuestFeatureItem>
                  <IconPuzzle />
                  средний
                </S.QuestFeatureItem>
              </S.QuestFeatures>
            </S.QuestContent>
          </S.Quest>
        </S.QuestItemLink>
      </S.QuestItem> */}
    </S.QuestsList>
  </>
);};

export default QuestsCatalog;
