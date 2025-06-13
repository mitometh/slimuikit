# GitHub Actions Setup for Automated NPM Publishing

This directory contains GitHub Actions workflows for automatically publishing to npm.

## Available Workflows

### 1. `publish.yml` - Publish on Release/Tag
- Triggers when you create a GitHub release or push a tag starting with 'v'
- Most controlled approach
- Usage: Create a release on GitHub or push a tag like `v0.1.1`

### 2. `publish-on-push.yml` - Publish on Push to Main
- Triggers on every push to main branch that changes source files
- Only publishes if package.json version has changed
- Good for continuous deployment

### 3. `release.yml` - Automated Release Management
- Uses changesets for version management
- Creates PR for version bumps
- More complex but handles versioning automatically

## Setup Instructions

1. **Get your NPM token:**
   - Login to [npmjs.com](https://www.npmjs.com)
   - Go to Account Settings → Access Tokens
   - Generate a new token (choose "Automation" type)

2. **Add the token to GitHub:**
   - Go to your GitHub repository
   - Settings → Secrets and variables → Actions
   - Click "New repository secret"
   - Name: `NPM_TOKEN`
   - Value: Your npm token

3. **Choose a workflow:**
   - Delete the workflows you don't want to use
   - Keep only one to avoid conflicts

## Recommended Workflow

For most projects, use `publish.yml`:
1. Make your changes
2. Update version in package.json: `npm version patch` (or minor/major)
3. Push to GitHub
4. Create a release on GitHub or push a tag
5. Package automatically publishes to npm

## Manual Publishing

If you prefer manual control, delete all workflows and publish with:
```bash
npm version patch  # or minor/major
git push && git push --tags
npm publish
```