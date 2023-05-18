import { i18n } from 'next-i18next';
<<<<<<< HEAD
//import type nextI18NextConfig from '../../next-i18next.config.js';
=======
import type nextI18NextConfig from '../../next-i18next.config.js';
>>>>>>> 403332a (Revert "Revert ":globe_with_meridians: :flags: i18n integration"")

type Namespace = 'common' | 'agent' | 'constants' | 'message';

export const translate = (
  key: string,
  text?: string | undefined | null,
  ns?: Namespace | null
) => {
  const opts = !!ns ? { ns } : undefined;
  const defaultText = text ? text : key;
  return i18n?.t(key, defaultText, opts) ?? key;
};
