import { createSelector } from 'reselect'

 export const selectRoom = state => state.rooms;

export const selectAllRooms = createSelector(
    selectRoom,
    rooms => rooms.rooms
);

export const selectSingleRooms = roomUrlSlug => createSelector(
    selectAllRooms,
    rooms => rooms.reduce((acc, room) => {
        acc[room.fields.slug.toLowerCase()] = room;
        return acc;
    }, {})[roomUrlSlug]
)


