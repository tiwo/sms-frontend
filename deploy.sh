#!/bin/bash

_log() {
    printf "|| %s\n" "$*" >&2
}

_err() {
    printf "!! %s\n" "$*" >&2
    exit 1
}

_must() {
    "$@" || _err "command failed: $*"
}

_git_repo_is_clean() {
   [ -z "$(_must git status --porcelain)" ]
}


grep -q 8f40fb57-ce8a-41ff-bbec-7f7e572fb313 ./deploy.sh ||
    _err "I couldn't find myself. Are you in the project root?"

_must mkdir -p dist/assets

#now="$(date +'%j%H%M')" # day (001..366), hour (00..23), minute (0..59)
#build_dir="$(mktemp --tmpdir -d bld.$now.XXXXX)"

current_commit=`_must git rev-parse --verify HEAD`
current_branch=`_must git rev-parse --verify --abbrev-ref HEAD`
current_date=`_must date --utc -Is`

if _git_repo_is_clean ; then 
  current_git_status="clean"
else 
  current_git_status="dirty"
fi

read -r -d '' build_info  <<EOF
{
  "current_git_status": "$current_git_status",
  "current_commit": "https://github.com/tiwo/sms-frontend/commit/$current_commit",
  "current_branch": "https://github.com/tiwo/sms-frontend/tree/$current_branch",
  "current_date": "$current_date",
  "built_from": "$(basename $0)"
}
EOF

echo "$build_info"

VITE_BUILD_INFO="$build_info" _must npm run build
# _must cp src/assets/404.html dist/404.html
_must rm -rf dist/.git
_must cd dist
_must git init
_must git add .
_must git commit -m 'deploy (from deploy.sh)'

deploy_command="git push -f git@github.com:tiwo/sms-frontend.git master:gh-pages"
if [ "$current_git_status" = "clean" ]; then 
  _must ${deploy_command[0]}
else 
  _log "Working directory is dirty; if you still want to deploy, run
       ( cd dist && $deploy_command )"
fi