-- Free discovery source: OpenStreetMap (Overpass API). Categories are OSM tags such as craft=plumber.
alter table campaigns add column osm_categories text[] not null default '{}';
-- Countries searched in OSM when "ALL" (worldwide) is in the country list; a whole-planet query is too heavy.
alter table campaigns add column osm_other_countries text[] not null default '{GB,NZ,IE,SG,ZA,AE}';
