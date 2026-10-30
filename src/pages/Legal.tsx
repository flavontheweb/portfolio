import { useTranslation } from 'react-i18next';

function Legal() {
  const { t } = useTranslation();

  return (
    <>
      <main>
        <h1>{t('legal.title')}</h1>
      </main>
    </>
  );
}

export default Legal;
