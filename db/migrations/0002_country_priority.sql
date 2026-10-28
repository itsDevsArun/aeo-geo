-- Multiple target countries in priority order (e.g. US, then AU, then CA, then ALL = worldwide).
alter table campaigns add column countries text[] not null default '{}';

alter table discovery_queries add column country text not null default '';
alter table discovery_queries add column priority integer not null default 0;
alter table discovery_queries drop constraint discovery_queries_campaign_id_query_key;
alter table discovery_queries add constraint discovery_queries_campaign_query_country_key unique (campaign_id, query, country);
create index discovery_queries_priority on discovery_queries (campaign_id, exhausted, priority, created_at);
