import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTheme } from 'redux/selectors';
import { setTheme } from 'redux/themeSlice';
import { Toggle, ThemeSwitch } from './ThemeBtn.styled';
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi';
import { IconContext } from 'react-icons';

const ThemeBtn = () => {
  const thm = useSelector(selectTheme);
  const dispatch = useDispatch();
  const choseTheme = () => {
    dispatch(setTheme());
  };

  return (
    <>
      <ThemeSwitch>
        <IconContext.Provider value={{ size: '25px' }}>
          <HiOutlineSun />
          <Toggle>
            <input type="checkbox" checked={thm} onChange={choseTheme} />
            <span />
          </Toggle>
          <HiOutlineMoon />
        </IconContext.Provider>
      </ThemeSwitch>
    </>
  );
};
export default ThemeBtn;
