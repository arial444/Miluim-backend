-- Create user if it doesn't exist
CREATE USER IF NOT EXISTS 'appUser'@'%' IDENTIFIED WITH mysql_native_password BY '9RLbOmXmKIZcfdhCB1q2gdTkCwo7VXlkGCTYb';
-- Grant privileges to the user
GRANT ALL PRIVILEGES ON *.* TO 'appUser'@'%' WITH GRANT OPTION;
-- Update user identified with mysql_native_password
ALTER USER 'appUser'@'%' IDENTIFIED WITH mysql_native_password BY '9RLbOmXmKIZcfdhCB1q2gdTkCwo7VXlkGCTYb';
-- Flush privileges to apply changes
FLUSH PRIVILEGES;