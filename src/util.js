import numeral from 'numeral';
export const baseUrl = 'https://api.coinlore.net/api';

export function formatNumber(value, format = "") {
    return numeral(value).format(format);
}
