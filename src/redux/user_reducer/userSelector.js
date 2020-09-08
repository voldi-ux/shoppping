import {createSelector } from 'reselect'

const UserSelector = state => state.user

export const getIsloggedIn = createSelector(UserSelector, user => user.isloggedIn)