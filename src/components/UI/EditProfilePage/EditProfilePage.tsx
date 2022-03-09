import React, { ChangeEvent, ReactElement, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { PATH } from '../../../enum';
import { RootReducerType } from '../../../store';
import { EditProfileAC } from '../../../store/actions/ProfileAction';
import { editProfileTC } from '../../../store/thunks/profileThunks';
import { SuperButton } from '../SuperButton';
import { TextField } from '../TextField';

const EditProfilePage = (): ReactElement => {
  const name = useSelector<RootReducerType, string>(state => state.profile.name);
  const [newName, setNewName] = useState<string>(name);
  const dispatch = useDispatch();
  const needEdit = useSelector<RootReducerType, boolean>(state => state.profile.needEdit);

  const email = useSelector<RootReducerType, string>(state => state.profile.email);
  const [edit, setEdit] = useState<boolean>(true);

  const exitEditModule = (): void => {
    dispatch(EditProfileAC(false));
  };
  const changeNameHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setNewName(e.currentTarget.value);
  };
  const changePersonalInfoHandler = (): void => {
    dispatch(editProfileTC(newName));
  };
  const writeHandler = (): void => setEdit(false);
  if (!needEdit) {
    return <Navigate to={PATH.PROFILE} />;
  }
  return (
    <div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          marginTop: ' 100px',
          flexDirection: 'column',
        }}
      >
        <h1>Personal information</h1>
        <p>Your foto could be here</p>
        {edit ? (
          <span>{newName}</span>
        ) : (
          <TextField
            value={newName}
            onChange={changeNameHandler}
            onBlur={() => setEdit(true)}
            autoFocus
          />
        )}
        <SuperButton onClick={writeHandler}>Change</SuperButton>
        <h2>{email}</h2>
      </div>
      <div>
        <SuperButton onClick={exitEditModule}>Cancel</SuperButton>
        <SuperButton onClick={changePersonalInfoHandler}>Apply</SuperButton>
      </div>
    </div>
  );
};
export default EditProfilePage;
