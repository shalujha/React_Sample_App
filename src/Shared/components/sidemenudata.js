import React,{useContext} from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import AuthContext from '../../context/auth-context';

export const SidebarData = [
  {
    title: 'ALL USERS',
    path: '/',
    cName: 'nav-text'
  },
  {
    title: 'MY PLACES',
    path: '/reports',
    cName: 'nav-text'
  },
  {
    title: 'ADD PLACE',
    path: '/products',
    cName: 'nav-text'
  },
  {
    title: 'AUTHENTICATE',
    path: '/auth',
    cName: 'nav-text'
  },
];