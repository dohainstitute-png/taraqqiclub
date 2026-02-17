import { getDictionary } from "@/lib/i18n";
import { Locale } from "@/lib/i18n-config";

interface Props {
    params: {
        locale: Locale;
    };
}

const DiscoverPage = async ({ params: { locale } }: Props) => {
    const dictionary = await getDictionary(locale);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">{dictionary.pages.discover.title}</h1>
        </div>
    );
};

export default DiscoverPage;