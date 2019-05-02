// @flow
import React from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';
import fr from 'react-intl/locale-data/fr';
import en from 'react-intl/locale-data/en';
import { ReactComponent as Logo } from '../../assets/plannor3000-logo.svg';
import './Header.scss'

import frMessages from 'translations/fr.json';
import enMessages from 'translations/en.json';
import { flattenMessages } from 'services/i18n/intl';

const locales = {
  fr: flattenMessages(frMessages),
  en: flattenMessages(enMessages),
};

addLocaleData([...fr, ...en]);

export default class Header extends React.Component {
  render() {
    return (
      <IntlProvider locale="fr" messages={locales.fr}>
        <div className="header">
          <Logo className="header__logo" />
        </div>
      </IntlProvider>
    );
  }
}
