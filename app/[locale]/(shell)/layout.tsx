
import AppShell from '@/components/shell/AppShell';
import { getDictionary } from '@/lib/i18n';
import { Locale } from '@/lib/i18n-config';

interface Props {
  children: React.ReactNode;
  params: {
    locale: Locale;
  };
}

const ShellLayout = async ({ children, params: { locale } }: Props) => {
  const dictionary = await getDictionary(locale);

  return (
    <AppShell dictionary={dictionary} locale={locale}>
      {children}
    </AppShell>
  );
};

export default ShellLayout;
