import { useState } from 'react';
import { MainLayout } from '../common/common';
import { ReactComponent as IconClock} from './icons/icon-clock.svg';
import { ReactComponent as IconPerson} from '../../assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle} from '../../assets/img/icon-puzzle.svg';
import * as S from './detailed-quest.styled';
import { BookingModal } from './components/components';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDisptach, useAppSelector } from '../../hooks';
import { getq } from '../../store/quests-data/selectors';
import { changeFilteredQuests } from '../../store/quests-data/reducer-data';
import { getRegularForCheckId } from '../../const';

function DetailedQuest() {
  const dispatch = useAppDisptach();
  const quests = useAppSelector(getq);
  dispatch(changeFilteredQuests());

  const [isBookingModalOpened, setIsBookingModalOpened] = useState(false);
  const {id} = useParams();
  const navigate = useNavigate();

  if (quests.length > 0) {
    const checkId = new RegExp(getRegularForCheckId(Number(id), quests.length)).test(String(id));
    if (!checkId || Number(id) > quests.length) {
      navigate('*');
    }
  }

  const filteredQuest = quests.filter((quest) => quest.id === Number(id))[0];
  const { coverImg, description, duration, peopleCount, title, type} = filteredQuest;

  const transformTypeQuest = (typeQuest: string) => {

    let type = 'Все квесты';

    switch(typeQuest){
      case 'All quests':
        type = 'Все квесты';
        break;
      case 'adventures':
        type = 'приключения';
        break;
      case 'horror':
        type = 'ужасы';
        break;
      case 'mystic':
        type = ' мистика';
        break;
      case 'detective':
        type = ' детектив';
        break;
      case 'sci-fi':
        type = 'sci-fi';
        break;
    };

    return type;
  };

  const onBookingBtnClick = () => {
    setIsBookingModalOpened(true);
  };

  return (
    <MainLayout>
      <S.Main>
        <S.PageImage
          src={`/${coverImg}`}
          alt={`Квест ${title}`}
          width="1366"
          height="768"
        />
        <S.PageContentWrapper>
          <S.PageHeading>
            <S.PageTitle>{title}</S.PageTitle>
            <S.PageSubtitle>{transformTypeQuest(type)}</S.PageSubtitle>
          </S.PageHeading>

          <S.PageDescription>
            <S.Features>
              <S.FeaturesItem>
                <IconClock width="20" height="20" />
                <S.FeatureTitle>{duration} мин</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPerson width="19" height="24" />
                <S.FeatureTitle>{`${peopleCount[0]}–${peopleCount[1]}`} чел</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPuzzle width="24" height="24" />
                <S.FeatureTitle>средний</S.FeatureTitle>
              </S.FeaturesItem>
            </S.Features>

            <S.QuestDescription>
              {description}
            </S.QuestDescription>

            <S.QuestBookingBtn onClick={onBookingBtnClick}>
              Забронировать
            </S.QuestBookingBtn>
          </S.PageDescription>
        </S.PageContentWrapper>

        {isBookingModalOpened && <BookingModal />}
      </S.Main>
    </MainLayout>
  );
};

export default DetailedQuest;
