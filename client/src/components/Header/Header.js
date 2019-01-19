// @flow
import React from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';
import fr from 'react-intl/locale-data/fr';
import en from 'react-intl/locale-data/en';

import frMessages from 'translations/fr.json';
import enMessages from 'translations/en.json';
import { flattenMessages } from 'services/i18n/intl';
import styles from './Header.style';

const locales = {
  fr: flattenMessages(frMessages),
  en: flattenMessages(enMessages),
};

addLocaleData([...fr, ...en]);

export default class Header extends React.Component {
  render() {
    return (
      <IntlProvider locale="fr" messages={locales.fr}>
        <div style={styles.header}>
            Plannor 3000
        </div>
      </IntlProvider>
    );
  }
}
