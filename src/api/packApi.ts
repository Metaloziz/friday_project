/* eslint-disable @typescript-eslint/no-magic-numbers */
import { instance } from 'api/instance';
import { PacksType } from 'types';

// type AddPackPayload = {
//   name?: string;
//   deckCover?: string;
//   private?: boolean;
// };

export const packApi = {
  getPacks(
    packName: string,
    min: number,
    max: number,
    sortPacks: string,
    pageCount: number,
    page: number,
    userId: string,
  ) {
    return instance.get<PacksType>('/cards/pack', {
      params: {
        packName,
        min,
        max,
        sortPacks,
        pageCount,
        page,
        user_id: userId,
      },
    });
  },
  setNewPack(newTitle: string) {
    return instance.post('/cards/pack', { cardsPack: { name: newTitle } });
  },
  deletePack(id: string) {
    return instance.delete('/cards/pack', {
      params: {
        id,
      },
    });
  },
};
