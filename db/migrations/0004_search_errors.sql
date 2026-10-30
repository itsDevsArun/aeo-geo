-- Search errors must not silently mark a query as finished.
alter table discovery_queries add column error_count integer not null default 0;
alter table discovery_queries add column last_error text;
-- Repair: queries marked exhausted without ever returning results (e.g. after HTTP 406) are retried.
update discovery_queries set exhausted = false, next_offset = 0 where exhausted and results_seen = 0;
