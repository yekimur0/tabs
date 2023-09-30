export default class Tab {
  constructor(selector) {
    this.selector = selector;

    this.selector.addEventListener('click', (e) => {
      let target = e.target;

      if (target.classList.contains('tab__item-btn')) {
        this.switchTab(target);
      }
    });
  }

  checkTabs() {
    const controllerTabs = document.querySelectorAll('.tab__item-btn');
    const contentTabs = document.querySelectorAll('.tab__block');

    if (controllerTabs.length !== contentTabs.length) {
      throw new Error('Number of switches does not match number of tab items');
      return;
    }
  }

  setId() {
    const controllerTabs = document.querySelectorAll('.tab__item-btn');
    const contentTabs = document.querySelectorAll('.tab__block');

    controllerTabs.forEach((item, index) => {
      item.setAttribute('data-tab-controller', `tab${index + 1}`);
      item.setAttribute('role', 'tab');
    });

    contentTabs.forEach((item, index) => {
      item.setAttribute('data-tab', `tab${index + 1}`);
      item.setAttribute('role', 'tabpanel');
      item.setAttribute('aria-labelledby', `tab${index + 1}`);
    });
  }

  switchTab(target) {
    const contentTabs = this.selector.querySelectorAll('.tab__block');
    const tabsControllers = this.selector.querySelectorAll('.tab__item-btn');
    const attr = target.dataset.tabController;
    contentTabs.forEach((item) => {
      let tabAttr = item.dataset.tab;

      if (tabAttr === attr) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });

    tabsControllers.forEach((item) => {
      item.classList.remove('tab__item-btn--active');
    });

    target.classList.add('tab__item-btn--active');
  }

  init() {
    this.checkTabs();
    this.setId();
    // this.switchTab();
  }
}
