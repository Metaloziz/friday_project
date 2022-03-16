import { memo, ReactElement, useCallback, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { DebounceSearchField, TableCards } from 'components';
import { setSearchAnswerCards, setSearchQuestionCards } from 'store/actions';
import {
  selectSearchAnswer,
  selectSearchQuestion,
  selectSortCard,
} from 'store/selectors';
import { getCardsTC } from 'store/thunks';

export const CardList = memo((): ReactElement => {
  const dispatch = useDispatch();

  const { id, name } = useParams<'id' | 'name'>();

  const sortCard = useSelector(selectSortCard);
  const searchQuestion = useSelector(selectSearchQuestion);
  const searchAnswer = useSelector(selectSearchAnswer);

  useEffect(() => {
    if (id) {
      dispatch(getCardsTC(id, sortCard, searchQuestion, searchAnswer));
    }
  }, [sortCard, searchQuestion, searchAnswer]);

  const searchByQuestion = useCallback((question: string): void => {
    dispatch(setSearchQuestionCards(question));
  }, []);

  const searchByAnswer = useCallback((answer: string): void => {
    dispatch(setSearchAnswerCards(answer));
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {name}
      <div
        style={{
          display: 'flex',
          margin: '20px',
          alignItems: 'center',
        }}
      >
        Question:
        <DebounceSearchField searchValue={searchByQuestion} />
        Answer:
        <DebounceSearchField searchValue={searchByAnswer} />
      </div>
      <TableCards />
    </div>
  );
});
