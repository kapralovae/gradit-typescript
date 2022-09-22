import {ReactComponent as IconPerson} from '../../../../assets/img/icon-person.svg';
import {ReactComponent as IconPuzzle} from '../../../../assets/img/icon-puzzle.svg';
import * as S from './quests-catalog.styled';

type QuestCardType = {
  coverImg: string;
  description: string;
  duration: number;
  id: number;
  level: string;
  peopleCount: number[];
  previewImg: string;
  title: string;
  type: string;
};

type ItemCardType = {
  item: QuestCardType
};

// coverImg: "img/cover-sklep.jpg",
// description: "Средневековое кладбище таит в себе много страшных тайн. Местные жители говорят, что в склепе похоронен граф вампир, который по ночам выходит на охоту, чтобы испить человеческой крови. Через час солнце опустится за горизонт, успеете ли вы убить вампира и выбраться из склепа?",
// duration: 120,
// id: 1,
// level: "hard",
// peopleCount: [2, 5],
// previewImg: "img/preview-sklep.jpg",
// title: "Склеп",
// type: "horror",

export const QuestCard = ({item}: ItemCardType) => {
const {coverImg, id, level, peopleCount, title} = item;

  const transformLevel = (level: string) => {
    switch(level) {
      case 'easy':
        return 'простой';
      case 'medium':
        return 'средний';
      case 'hard':
        return 'сложный';
    }

  };

  return (
    <S.QuestItem>
    <S.QuestItemLink to={`/quest/${id}`}>
      <S.Quest>
        <S.QuestImage
          src={coverImg}
          width="344"
          height="232"
          alt={`квест ${title}`}
        />

        <S.QuestContent>
          <S.QuestTitle>{title}</S.QuestTitle>

          <S.QuestFeatures>
            <S.QuestFeatureItem>
              <IconPerson />
              {peopleCount[0]}–{peopleCount[1]} чел
            </S.QuestFeatureItem>
            <S.QuestFeatureItem>
              <IconPuzzle />
              {transformLevel(level)}
            </S.QuestFeatureItem>
          </S.QuestFeatures>
        </S.QuestContent>
      </S.Quest>
    </S.QuestItemLink>
  </S.QuestItem>
    );
};
