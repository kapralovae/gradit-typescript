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

export function QuestCard({item}: ItemCardType) {
const {previewImg, id, level, peopleCount, title} = item;

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
    <S.QuestItemLink to={`/detailed-quest/${id}`}>
      <S.Quest>
        <S.QuestImage
          src={previewImg}
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
