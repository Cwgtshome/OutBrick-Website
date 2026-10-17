-- Owner-approved website-to-Studio delegation. Only a hash is retained; no cookies or secrets.
CREATE TABLE studio_blog_tokens (
 id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
 member_id bigint NOT NULL REFERENCES members(id),
 token_hash text NOT NULL UNIQUE CHECK (token_hash ~ '^[0-9a-f]{64}$'),
 audience text NOT NULL CHECK (audience = 'https://outbrick-upsell-architecture.mourad-hamdi.chatgpt.site'),
 scopes text[] NOT NULL CHECK (cardinality(scopes) BETWEEN 1 AND 3 AND scopes <@ ARRAY['blog:read','blog:draft','blog:publish']::text[]),
 created_at timestamptz NOT NULL DEFAULT now(),
 expires_at timestamptz NOT NULL DEFAULT now() + interval '90 days',
 last_used_at timestamptz,
 revoked_at timestamptz
);
CREATE INDEX studio_blog_tokens_member_idx ON studio_blog_tokens(member_id);
