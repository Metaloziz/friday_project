import {
  setPacks,
  setSearchPack,
  setSortPacks,
  setCurrentPagePacksAC,
  setPageCountPacksAC,
  setIsMyPack,
} from 'store/actions';

export type SetPacksType = ReturnType<typeof setPacks>;
export type SetSortPacksType = ReturnType<typeof setSortPacks>;
export type SetSearchPack = ReturnType<typeof setSearchPack>;
export type SetPagesCountPacks = ReturnType<typeof setPageCountPacksAC>;
export type SetCurrentPagePacksType = ReturnType<typeof setCurrentPagePacksAC>;
export type SetIsMyPackType = ReturnType<typeof setIsMyPack>;

export type PacksActionType =
  | SetPacksType
  | SetSearchPack
  | SetSortPacksType
  | SetPagesCountPacks
  | SetCurrentPagePacksType
  | SetIsMyPackType;