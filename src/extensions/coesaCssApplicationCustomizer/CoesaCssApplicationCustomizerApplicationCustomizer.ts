import { BaseApplicationCustomizer } from '@microsoft/sp-application-base';

export interface ICoesaCssApplicationCustomizerApplicationCustomizerProperties {
  testMessage: string;
}

export default class CoesaCssApplicationCustomizerApplicationCustomizer
  extends BaseApplicationCustomizer<ICoesaCssApplicationCustomizerApplicationCustomizerProperties> {

  public onInit(): Promise<void> {
    const head = document.head;

    if (head) {
      const css = document.createElement('link');
      css.href = 'https://construtoracoesa.sharepoint.com/sites/Intranet-Coesa/StyleCustom/coesa-css-global-app-customizer.css';
      css.rel = 'stylesheet';
      head.appendChild(css);
    }

    return Promise.resolve();
  }
}
