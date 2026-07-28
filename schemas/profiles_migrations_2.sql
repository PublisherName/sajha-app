ALTER TABLE profiles ADD COLUMN IF NOT EXISTS push_notifications boolean default true;
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS email_alerts boolean default false;
