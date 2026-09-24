import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Bond, Crumbs, EditorialPage, JsonLd } from '../../../editorial-shell';
import { getJob, hiringCountries, hiringCountriesText, jobDescriptionHtml, jobs, jobsPostedOn, jobsValidThrough, type Job } from '../../../../lib/business';
import { friends } from '../../../../lib/mascots';
import { pageMetadata, siteUrl } from '../../../../lib/site';
import { breadcrumbNode, graph, ids, ref, webPageNode } from '../../../../lib/structured-data';
import { CareersForm } from '../careers-form';

type JobPageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return jobs.map((job) => ({ slug: job.slug }));
}

/** "<Title> — remote job at OutBrick", shortened to the 30–65 characters a result shows. */
function pageTitle(job: Job) {
  const full = `${job.title} — remote job at OutBrick`;
  if (full.length <= 65) return full;
  const short = `${job.title.split(' — ')[0].split(' (')[0]} — remote job at OutBrick`;
  return short.length <= 65 ? short : `${job.title.split(' — ')[0]} at OutBrick`;
}

function metaDescription(job: Job) {
  const text = `Remote, ${job.employmentLabel.toLowerCase()}. ${job.summary}`;
  return text.length <= 160 ? text : `${text.slice(0, 157).replace(/\s+\S*$/, '')}…`;
}

export async function generateMetadata({ params }: JobPageProps): Promise<Metadata> {
  const { slug } = await params;
  const job = getJob(slug);
  if (!job) return {};
  return pageMetadata({ path: `/careers/${job.slug}`, title: pageTitle(job), description: metaDescription(job) });
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="bz-list">
      {items.map((item) => <li key={item}>{item}</li>)}
    </ul>
  );
}

export default async function JobPage({ params }: JobPageProps) {
  const { slug } = await params;
  const job = getJob(slug);
  if (!job) notFound();
  const url = `${siteUrl}/careers/${job.slug}`;

  const jobPosting = {
    '@type': 'JobPosting',
    title: job.title,
    description: jobDescriptionHtml(job),
    datePosted: jobsPostedOn,
    validThrough: jobsValidThrough,
    employmentType: job.employmentType,
    // Google reads the hiring organisation's name inline; the @id ties it to the site entity.
    hiringOrganization: { '@type': 'Organization', '@id': ids.organization, name: 'OutBrick', url: `${siteUrl}/`, logo: `${siteUrl}/icon.png` },
    jobLocationType: 'TELECOMMUTE',
    applicantLocationRequirements: hiringCountries.map((name) => ({ '@type': 'Country', name })),
    directApply: true,
    identifier: { '@type': 'PropertyValue', name: 'OutBrick', value: job.slug },
    url,
  };
  const structuredData = graph(
    webPageNode({ url, name: job.title, description: job.summary, mainEntity: ref(`${url}#job`) }),
    { '@id': `${url}#job`, ...jobPosting },
    breadcrumbNode(url, [
      { name: 'OutBrick', path: '/' },
      { name: 'Careers', path: '/careers' },
      { name: job.title, path: `/careers/${job.slug}` },
    ]),
  );
  const others = jobs.filter((other) => other.slug !== job.slug);
  const friend = friends.find((f) => f.id === job.friend);

  return (
    <EditorialPage className="bz" tone={job.tone}>
      <header className="ed-band-ink ed-hero bz-jobhead">
        <div className="ed-wrap">
          <Crumbs items={[{ href: '/', label: 'OutBrick' }, { href: '/careers', label: 'Careers' }, { label: job.title }]} />
          <div className="bz-jobgrid">
            <div>
              <p className="ed-label" style={{ marginTop: 32 }}>{job.team}</p>
              <h1 className="bz-job-h1">{job.title}</h1>
              <p className="ed-lede">{job.summary}</p>
              <ul className="bz-jobfacts" aria-label="Role details">
                <li><span>Location</span>Remote</li>
                <li><span>Type</span>{job.employmentLabel}</li>
                <li><span>Team</span>{job.team}</li>
                <li><span>Apply by</span>31 December 2026</li>
              </ul>
              <div className="ed-actions" style={{ marginTop: 30 }}>
                <a className="ed-btn" href="#apply">Apply for this role</a>
                <a className="ed-link" href="/careers">All open roles</a>
              </div>
            </div>
            {friend ? (
              <div className="bz-jobart" aria-hidden="true" style={{ ['--c' as string]: friend.colour, ['--c-foot' as string]: friend.foot }}>
                <span className="bz-jobart-plinth" />
                <img src={friend.image} alt="" width={360} height={360} />
              </div>
            ) : null}
          </div>
        </div>
      </header>
      <Bond />

      <div className="ed-band-paper ed-band">
        <div className="ed-wrap bz-job">
          <div className="bz-job-body ed-prose">
            <section aria-labelledby="role-title">
              <h2 id="role-title">About the role</h2>
              {job.about.map((p) => <p key={p}>{p}</p>)}
            </section>
            <section aria-labelledby="do-title">
              <h2 id="do-title">What you’ll do</h2>
              <List items={job.responsibilities} />
            </section>
            <section aria-labelledby="bring-title">
              <h2 id="bring-title">What you’ll bring</h2>
              <List items={job.requirements} />
            </section>
            <section aria-labelledby="nice-title">
              <h2 id="nice-title">Nice to have</h2>
              <List items={job.niceToHave} />
              <p>Don’t tick every box? Apply anyway. We would rather meet someone who can grow into this than miss them.</p>
            </section>
          </div>
          <aside className="bz-release-side" aria-label="Role summary">
            <div className="bz-sidecard">
              <h2 className="ed-label">At a glance</h2>
              <dl>
                <div><dt>Location</dt><dd>Remote, for people living in {hiringCountriesText()}</dd></div>
                <div><dt>Employment</dt><dd>{job.employmentLabel}</dd></div>
                <div><dt>Team</dt><dd>{job.team}</dd></div>
                <div><dt>Posted</dt><dd>24 September 2026</dd></div>
                <div><dt>Closes</dt><dd>31 December 2026</dd></div>
                <div><dt>Pay</dt><dd>Depends on level and location; shared openly in the first call</dd></div>
              </dl>
            </div>
            <div className="bz-sidecard">
              <h2 className="ed-label">How to apply</h2>
              <p>Use the form below: your name, email, a link to your work, where you are, and a short note. We reply by email.</p>
              <p><a href="/careers#process">How we hire, step by step</a></p>
            </div>
          </aside>
        </div>
      </div>

      <section id="apply" className="ed-band-cream ed-band bz-anchor" aria-labelledby="apply-title">
        <div className="ed-wrap bz-formgrid">
          <div>
            <p className="ed-label">Apply</p>
            <h2 id="apply-title" className="ed-h2" style={{ marginTop: 14 }}>Apply for this role.</h2>
            <p className="ed-lede" style={{ marginTop: 18 }}>Ten minutes, no account, no CV upload. A link to your work says more than a CV.</p>
          </div>
          <div className="bz-formslab">
            <CareersForm role={job.title} />
          </div>
        </div>
      </section>

      <section className="ed-band-ink ed-band-tight" aria-labelledby="more-title">
        <div className="ed-wrap">
          <h2 id="more-title" className="ed-h3">Other open roles</h2>
          <ul className="bz-morejobs">
            {others.map((other) => (
              <li key={other.slug} data-tone={other.tone}>
                <a href={`/careers/${other.slug}`}>
                  <b>{other.title}</b>
                  <span>{other.team} · Remote · {other.employmentLabel}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <JsonLd data={structuredData} />
    </EditorialPage>
  );
}
