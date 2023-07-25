import { createSelector } from 'reselect';

const selectInstagram = state => state.instagram;

export const selectInstagramData = createSelector(
    [selectInstagram],
    (selectInstagram) => selectInstagram.data
);

export const selectUserLoading = createSelector(
    [selectInstagram],
    (selectInstagram) => selectInstagram.loading
);
