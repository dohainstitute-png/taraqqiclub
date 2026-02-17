import { getDictionary } from "@/lib/i18n";
import { Locale } from "@/lib/i18n-config";
import Link from "next/link";

interface Props {
    params: {
        locale: Locale;
    };
}

const HomePage = async ({ params: { locale } }: Props) => {
    const dictionary = await getDictionary(locale);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">{dictionary.pages.home.title}</h1>
            <div className="mt-4">
                <Link href={`/${locale}/home/1`} className="text-blue-500">Go to Detail Page</Link>
            </div>
        </div>
    );
};

export default HomePage;