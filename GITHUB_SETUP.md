# GitHub Repository Setup Guide

## Step 1: Create New Private Repository

1. **Go to GitHub Organization**: https://github.com/EngramAI-io
2. **Click the "+" icon** (top right) → **"New repository"**
3. **Repository settings:**
   - **Name**: `landing-page` (or `engramai-landing` or `website`)
   - **Description**: "EngramAI.io Landing Page - Next.js 14"
   - **Visibility**: ✅ **Private** (select Private)
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
4. **Click "Create repository"**

## Step 2: Initialize Git and Push Code

After creating the repository, run these commands in your project directory:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit - EngramAI landing page"

# Add the remote repository (replace YOUR_REPO_NAME with actual repo name)
git remote add origin https://github.com/EngramAI-io/YOUR_REPO_NAME.git

# Set main branch
git branch -M main

# Push to GitHub
git push -u origin main
```

## Step 3: Authentication

When you push, GitHub will ask for authentication:
- **Option 1**: Use GitHub Desktop (easiest)
- **Option 2**: Use Personal Access Token
  - Go to: https://github.com/settings/tokens
  - Generate new token (classic)
  - Select scopes: `repo` (full control)
  - Use token as password when pushing

## Quick Commands Reference

```bash
# Check status
git status

# Add changes
git add .

# Commit
git commit -m "Your message"

# Push
git push origin main

# Pull latest
git pull origin main
```

## Repository URL Format

Your repository will be at:
`https://github.com/EngramAI-io/landing-page`

(Replace `landing-page` with whatever name you chose)
