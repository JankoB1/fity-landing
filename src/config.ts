// Bazni URL Laravel backend-a. REACT_APP_ prefiks je obavezan da bi CRA
// ovu vrednost ugradio u build - obican env var bez prefiksa ostaje nedostupan.
export const API_BASE_URL =
    process.env.REACT_APP_API_BASE_URL || 'https://api.getfity.app/api';

export const STORE_URLS = {
    ios: 'https://apps.apple.com/rs/app/fity-meals/id6753711257',
    android: 'https://play.google.com/store/apps/details?id=app.getfity',
};

export const IOS_APP_ID = '6753711257';
