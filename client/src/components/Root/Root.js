// @flow
import React from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';
import fr from 'react-intl/locale-data/fr';
import en from 'react-intl/locale-data/en';

import frMessages from 'translations/fr.json';
import enMessages from 'translations/en.json';
import { flattenMessages } from 'services/i18n/intl';

import Header from '../Header';
import styles from './Root.style';

const locales = {
  fr: flattenMessages(frMessages),
  en: flattenMessages(enMessages),
};

addLocaleData([...fr, ...en]);

// type Props = {
//   children: React$Element<*>,
// };

export default class Root extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <IntlProvider locale="fr" messages={locales.fr}>
        <div style={styles.rootContainer}>
          <Header />
          {children}
        </div>
      </IntlProvider>
    );
  }
}
