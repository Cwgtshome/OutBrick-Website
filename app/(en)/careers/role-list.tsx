'use client';

import { useState } from 'react';
import { useHydrated } from '../../components/netlify-form';
import type { Job, Team } from '../../../lib/business';

/**
 * The open roles, with a team filter. The prerendered list shows every role and the filter
 * only appears once script runs, so without it nothing is hidden and nothing is broken.
 */
export function RoleList({ jobs, teams }: { jobs: Job[]; teams: Team[] }) {
  const ready = useHydrated();
  const [team, setTeam] = useState<Team | 'All'>('All');

  const shown = team === 'All' ? jobs : jobs.filter((job) => job.team === team);
  const count = (t: Team) => jobs.filter((job) => job.team === t).length;

  return (
    <>
      {ready ? (
        <fieldset className="bz-filter">
          <legend className="bz-sr">Filter roles by team</legend>
          {(['All', ...teams] as const).map((t) => (
            <button key={t} type="button" aria-pressed={team === t} onClick={() => setTeam(t)}>
              {t === 'All' ? 'All teams' : t}
              <span className="bz-filter-n">{t === 'All' ? jobs.length : count(t)}</span>
            </button>
          ))}
        </fieldset>
      ) : null}
      <p className="bz-sr" aria-live="polite">
        {ready ? `Showing ${shown.length} of ${jobs.length} roles${team === 'All' ? '' : ` in ${team}`}.` : ''}
      </p>
      <ul className="bz-roles">
        {shown.map((job) => (
          <li key={job.slug} className="bz-role" data-tone={job.tone}>
            <span className="bz-role-brick" aria-hidden="true" />
            <div className="bz-role-main">
              <h3><a href={`/careers/${job.slug}`}>{job.title}</a></h3>
              <p>{job.summary}</p>
            </div>
            <ul className="bz-role-tags" aria-label="Role details">
              <li>{job.team}</li>
              <li>Remote</li>
              <li>{job.employmentLabel}</li>
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
}
