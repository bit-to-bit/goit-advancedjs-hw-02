export const COLOR_ERROR = ' #ef4040';
export const COLOR_OK = ' #59A10D';
export const ICO_ERROR = './ico/error.svg';
export const ICO_OK = './ico/ok.svg';

export const iziToastSettingsTimer = {
  timeout: 4000,
  backgroundColor: COLOR_ERROR,
  messageSize: '16',
  messageColor: 'white',
  messageLineHeight: '64',
  iconUrl: ICO_ERROR,
  resetOnHover: true,
  transitionIn: 'flipInX',
  transitionOut: 'flipOutX',
  position: 'topRight',
};

export const iziToastSettingsSnackbar = {
  timeout: 3000,
  messageSize: '16',
  messageColor: 'white',
  messageLineHeight: '64',
  resetOnHover: true,
  transitionIn: 'flipInX',
  transitionOut: 'flipOutX',
  position: 'topRight',
};