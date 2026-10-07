-- Editorial drafts are private; publication is an explicit admin action.
CREATE TABLE editorial_content (
 id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
 locale text NOT NULL CHECK (locale IN ('en','fr','de','es','ja')),
 kind text NOT NULL CHECK (kind IN ('page','blog')),
 slug text NOT NULL CHECK (slug ~ '^[a-z0-9][a-z0-9-]{1,79}$'),
 title text NOT NULL CHECK (char_length(title) BETWEEN 4 AND 140),
 summary text NOT NULL DEFAULT '' CHECK (char_length(summary) <= 500),
 body_md text NOT NULL CHECK (char_length(body_md) BETWEEN 1 AND 20000),
 body_html text NOT NULL,
 state text NOT NULL DEFAULT 'draft' CHECK (state IN ('draft','published')),
 revision integer NOT NULL DEFAULT 1,
 author_id bigint NOT NULL REFERENCES members(id),
 editor_id bigint NOT NULL REFERENCES members(id),
 created_at timestamptz NOT NULL DEFAULT now(),
 updated_at timestamptz NOT NULL DEFAULT now(),
 published_at timestamptz,
 UNIQUE (locale,kind,slug)
);
CREATE TABLE editorial_revisions (
 id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
 content_id bigint NOT NULL REFERENCES editorial_content(id),
 revision integer NOT NULL,
 snapshot jsonb NOT NULL,
 editor_id bigint NOT NULL REFERENCES members(id),
 created_at timestamptz NOT NULL DEFAULT now(),
 UNIQUE (content_id,revision)
);
CREATE INDEX editorial_published_idx ON editorial_content(locale,updated_at DESC) WHERE state='published';
