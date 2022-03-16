import { memo, ReactElement, useCallback, useState } from 'react';

import { TextField } from 'components';
import { SEARCH_DELAY } from 'const';
import { useDebounce } from 'hook';

type DebounceSearchFieldPropsType = {
  searchValue: (value: string) => void;
};

export const DebounceSearchField = memo(
  ({ searchValue }: DebounceSearchFieldPropsType): ReactElement => {
    const [Value, setValue] = useState('');

    const search = (question: string): void => {
      searchValue(question);
    };

    const debounceSearch = useDebounce(search, SEARCH_DELAY);

    const onSearchQuestionChange = useCallback((question: string): void => {
      setValue(question);
      debounceSearch(question);
    }, []);

    return (
      <div>
        <TextField value={Value} onChangeText={onSearchQuestionChange} />
      </div>
    );
  },
);