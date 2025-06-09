#!/bin/bash

# 🔧 CONFIGURE THESE VARIABLES
MY_GITHUB_USERNAME="AdamCiesielski"
REPO_NAME="react-fundamentals"
BRANCH="main"

# URLs for your fork and the original repo
FORK_URL="https://github.com/AdamCiesielski/react-fundamentals.git"
UPSTREAM_URL="https://github.com/epicweb-dev/react-fundamentals.git"


if [ ! -d ".git" ]; then
  echo "❌ This is not a Git repository. Run this script inside your cloned repo."
  exit 1
fi

echo "🔧 Setting origin to your fork: $FORK_URL"
git remote set-url origin "$FORK_URL"

if git remote get-url upstream &>/dev/null; then
  echo "✅ 'upstream' already exists — skipping."
else
  echo "➕ Adding upstream: $UPSTREAM_URL"
  git remote add upstream "$UPSTREAM_URL"
fi

echo "⬇️  Fetching changes from upstream..."
git fetch upstream

echo "🔄 Switching to branch '$BRANCH'..."
git checkout "$BRANCH"

echo "🔀 Merging changes from upstream/$BRANCH into your local $BRANCH..."
git merge upstream/"$BRANCH"

echo -e "\n📡 Current remotes:"
git remote -v

echo -e "\n✅ Done! Your repo is synced with the original."

read -p "⏳ Press Enter to exit..."