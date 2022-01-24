# config valid for current version and patch releases of Capistrano
lock "~> 3.16.0"

set :application, "daily-sneak-peak"
set :repo_url, "git@github.com:MCesarczyk/daily-sneak-peak.git"
set :branch, 'main'

set :pg_without_sudo, false
set :pg_host, 'localhost'
set :pg_database, 'daily_sneak_peak'
set :pg_username, 'deploy'
set :pg_ask_for_password, true

set :deploy_to, "/home/deploy/#{fetch :application}"
set :linked_files, %w{config/master.key}
append :linked_dirs, 'log', 'tmp/pids', 'tmp/cache', 'tmp/sockets', 'vendor/bundle', '.bundle', 'public/system', 'public/uploads'

set :keep_releases, 5

# Uncomment the following to require manually verifying the host key before first deploy.
# set :ssh_options, verify_host_key: :secure