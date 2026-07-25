import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function NotFoundPage() {
  const navigation = await getTranslations("navigation");
  const t = await getTranslations("notFound");

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <p className="luxury-eyebrow mb-4">404</p>
      <h1 className="font-display text-4xl font-light md:text-6xl">
        {t("title")}
      </h1>
      <p className="mt-5 max-w-md text-[var(--color-muted)]">
        {t("description")}
      </p>
      <Link href="/" className="luxury-button-primary mt-10">
        {navigation("home")}
      </Link>
    </div>
  );
}
