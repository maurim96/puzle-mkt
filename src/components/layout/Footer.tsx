import { useTranslation } from "next-i18next";

const Footer = () => {
  const { t } = useTranslation('common');

    return (
      <footer className="bg-blue-500 p-4 text-white">
        <p className="text-center">{t('common:footer.description')}</p>
      </footer>
    );
  };
  
  export default Footer;
  