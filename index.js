import tab from './tab.js';

const _tab = document.querySelector('#tab');
const _tab2 = document.querySelector('#tab2');

const initTab = new tab(_tab);
const initTab2 = new tab(_tab2);
initTab.init();
initTab2.init();
