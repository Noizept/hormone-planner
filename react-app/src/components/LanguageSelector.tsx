import React from 'react';
import { Select } from '@chakra-ui/react';
import Languages from '../config/languages';
import { useTranslation } from 'react-i18next';

export default function LanguageSelector() {
  const { i18n } = useTranslation();
  const selected = React.useMemo(
    () => Languages.find(({ value }) => value === i18n.language.slice(0, 2)),
    [i18n.language]
  );

  const changeLanguage = React.useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      i18n.changeLanguage(e.target.value);
    },
    [i18n]
  );

  return (
    <Select
      placeholder="Select Language"
      variant={'outline'}
      value={selected?.value}
      borderColor={'gray.500'}
      onChange={(e) => changeLanguage(e)}
    >
      {Languages.map((language) => (
        <option key={language.value} value={language.value}>
          {language.label}
        </option>
      ))}
    </Select>
  );
}
