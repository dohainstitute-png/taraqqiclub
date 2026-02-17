import { getDictionary } from "@/lib/i18n";
import { Locale } from "@/lib/i18n-config";

interface Props {
    params: {
        locale: Locale;
        id: string;
    };
}

const DetailPage = async ({ params: { locale, id } }: Props) => {
    const dictionary = await getDictionary(locale);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">{dictionary.pages.detail.title} {id}</h1>
        </div>
    );
};

export default DetailPage;