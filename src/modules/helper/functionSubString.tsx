export const functionSubString = (string: string, cutLength: number, characters = '...') => {

    if (string.trim().length > cutLength && cutLength > 0) {
        return (string.trim().substr(0, cutLength) + characters)
    } else {
        return (string.trim())
    }

};
