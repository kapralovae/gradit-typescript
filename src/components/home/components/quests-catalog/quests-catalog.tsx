import {ReactComponent as IconAllQuests} from '../../../../assets/img/icon-all-quests.svg';
import {ReactComponent as IconAdventures} from '../../../../assets/img/icon-adventures.svg';
import {ReactComponent as IconHorrors} from '../../../../assets/img/icon-horrors.svg';
import {ReactComponent as IconMystic} from '../../../../assets/img/icon-mystic.svg';
import {ReactComponent as IconDetective} from '../../../../assets/img/icon-detective.svg';
import {ReactComponent as IconScifi} from '../../../../assets/img/icon-scifi.svg';
import * as S from './quests-catalog.styled';
import { QuestCard } from './quest-card';
import { changeFilteredQuests, changeTypeQuests } from '../../../../store/quests-data/reducer-data';
import { QuestsType } from '../../../../types/state';
import { getQuestsFromServer } from '../../../../store/quests-process/selectors';
import { getChoiseFilter } from '../../../../store/quests-data/selectors';
import { useAppDisptach, useAppSelector } from '../../../../hooks';

function QuestsCatalog() {

  const dispatch = useAppDisptach();
  const quests = useAppSelector(getQuestsFromServer);
  const filter = useAppSelector(getChoiseFilter);

  let filteredQuests = [];

  if (filter === 'All quests') {
    filteredQuests = quests;
  } else {
    filteredQuests = quests.filter((quest) => quest.type === filter);
  }

  console.log(quests, filter);

  const transformTypeQuest = (typeQuest: string) => {
    let type = 'All quests';
    switch(typeQuest){
      case 'Все квесты':
        type = 'All quests';
        break;
      case 'Приключения':
        type = 'adventures';
        break;
      case 'Ужасы':
        type = 'horror';
        break;
      case 'Мистика':
        type = 'mystic';
        break;
      case 'Детектив':
        type = 'detective';
        break;
      case 'Sci-fi':
        type = 'sci-fi';
        break;
    };
    return type;
  };

  const handleTabBtnClick = (evt: React.MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    dispatch(changeTypeQuests(transformTypeQuest(evt.currentTarget.innerText)));
    dispatch(changeFilteredQuests());
  };

  return(
  <>
    <S.Tabs>
      <S.TabItem>
        <S.TabBtn onClick={handleTabBtnClick} isActive={filter === 'All quests'}>
          <IconAllQuests />
          <S.TabTitle >Все квесты</S.TabTitle>
        </S.TabBtn>
      </S.TabItem>

      <S.TabItem>
        <S.TabBtn onClick={handleTabBtnClick} isActive={filter === 'adventures'}>
          <IconAdventures />
          <S.TabTitle>Приключения</S.TabTitle>
        </S.TabBtn>
      </S.TabItem>

      <S.TabItem>
        <S.TabBtn onClick={handleTabBtnClick} isActive={filter === 'horror'}>
          <IconHorrors />
          <S.TabTitle>Ужасы</S.TabTitle>
        </S.TabBtn>
      </S.TabItem>

      <S.TabItem>
        <S.TabBtn onClick={handleTabBtnClick} isActive={filter === 'mystic'}>
          <IconMystic />
          <S.TabTitle>Мистика</S.TabTitle>
        </S.TabBtn>
      </S.TabItem>

      <S.TabItem>
        <S.TabBtn onClick={handleTabBtnClick} isActive={filter === 'detective'}>
          <IconDetective />
          <S.TabTitle>Детектив</S.TabTitle>
        </S.TabBtn>
      </S.TabItem>

      <S.TabItem>
        <S.TabBtn onClick={handleTabBtnClick} isActive={filter === 'sci-fi'}>
          <IconScifi />
          <S.TabTitle>Sci-fi</S.TabTitle>
        </S.TabBtn>
      </S.TabItem>
    </S.Tabs>

    <S.QuestsList>
      {filteredQuests.map((quest: QuestsType) => <QuestCard item={quest} key={quest.id}></QuestCard>)}
    </S.QuestsList>
  </>
);};

export default QuestsCatalog;
