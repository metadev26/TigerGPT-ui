import { i18n } from 'next-i18next';
<<<<<<< HEAD
<<<<<<< HEAD
//import type nextI18NextConfig from '../../next-i18next.config.js';
=======
import type nextI18NextConfig from '../../next-i18next.config.js';
>>>>>>> 403332a (Revert "Revert ":globe_with_meridians: :flags: i18n integration"")
=======
>>>>>>> 2d7fe49 (Fix translate func)

type Namespace = 'common' | 'agent' | 'constants' | 'message';

export const translate = (
  key: string,
  ns?: Namespace | null,
  text?: string | undefined | null,
) => {
  const opts = !!ns ? { ns } : undefined;
  const defaultText = text ? text : key;
  return i18n?.t(key, defaultText, opts) ?? key;
};
