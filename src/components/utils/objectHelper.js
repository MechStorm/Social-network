export const followingUnfollowing = (items, propName, userId, typeOfFollow) => {
    return items.map(u => {
        if (u[propName] === userId) {
            return {...u, ...typeOfFollow};
        }
        return u;
    });
};
