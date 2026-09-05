import { ButtonLink, PageHero } from '@/components/ui';

export default function NotFound() {
  return (
    <div className="not-found">
      <PageHero
        eyebrow="404 / Page not found"
        title={
          <>
            A different
            <br />
            <span className="accent-text">direction.</span>
          </>
        }
        description="This page isn’t here. Let’s get you back to the ideas, initiatives and people of IEEE NTU."
      >
        <ButtonLink href="/">Back to home</ButtonLink>
      </PageHero>
    </div>
  );
}
