-- Outreach contact details (not the owner's personal email/phone).
alter table campaigns alter column sender_email set default 'itschool408@gmail.com';
alter table campaigns alter column sender_phone set default '+91 7654534323';
-- Optional sender details some forms require (empty = forms needing them are skipped).
alter table campaigns add column sender_last_name text not null default '';
alter table campaigns add column sender_city text not null default '';
alter table campaigns add column sender_state text not null default '';
alter table campaigns add column sender_zip text not null default '';
alter table campaigns add column sender_address text not null default '';
alter table campaigns add column sender_country text not null default '';
alter table campaigns add column target_submissions_per_run integer not null default 75 check (target_submissions_per_run between 1 and 500);
