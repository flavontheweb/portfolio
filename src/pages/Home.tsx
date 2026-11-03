import Desktop from '@/ui/desktop/Desktop';
import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Desktop />

      <main>
        <h1>{t('home.title')}</h1>
      </main>
    </>
  );
}

export default Home;
