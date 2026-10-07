import { ButtonLink, PageHero } from '@/components/ui';

export default function NotFound() {
  return (
    <div className="not-found">
      <PageHero
        eyebrow="404"
        title="Page Not Found"
        description="The page you requested could not be found."
      >
        <ButtonLink href="/">Back to home</ButtonLink>
      </PageHero>
    </div>
  );
}
