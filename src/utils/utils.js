export const searchByFilters = (data, key, value) => {
    const findUserDetails = data.find(item => item[key] === value);
    if (findUserDetails) {
        return [findUserDetails];
    }
    return [];
}