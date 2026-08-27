# Free Tools Setup Guide for Biosensors Lab Website

## What's Already Set Up

### 1. Freebuff (AI Coding Agent) - ALREADY RUNNING
- You're using this right now!
- For all code changes, bug fixes, new features
- **Cost: $0/month**

### 2. Agentation (Visual Feedback Tool) - INSTALLED
- Installed as dev dependency
- **How to use:**
  1. Run `npm run dev` to start the dev server
  2. Open your browser - you'll see the Agentation toolbar in the bottom-right
  3. Click the toolbar to activate
  4. Click any element on your page to annotate it
  5. Add your feedback note
  6. Copy the structured output
  7. Paste it to Freebuff when asking for changes
- **Example:** "Change this button" → click button → copy output → tell Freebuff
- **Cost: $0**

### 3. GitHub Actions (Auto-Deploy) - ALREADY CONFIGURED
- Auto-deploys to GitHub Pages on every push to main
- **Location:** `.github/workflows/deploy.yml`
- **No setup needed** - it's already working

### 4. CodeRabbit (AI Code Review) - CONFIGURED
- `.coderabbit.yaml` is configured
- **To activate:**
  1. Go to https://coderabbit.ai
  2. Sign in with your GitHub account
  3. Install the CodeRabbit GitHub App
  4. Select your repository
  5. CodeRabbit will now auto-review every PR
- **Free tier:** 1 PR review/hour for public repos
- **Cost: $0**

---

## What You Need to Install Manually

### 5. GitHub Copilot (Free in VS Code)
**Setup time: 2 minutes**

1. Install VS Code: https://code.visualstudio.com
2. Open VS Code
3. Go to Extensions (Ctrl+Shift+X)
4. Search "GitHub Copilot"
5. Install "GitHub Copilot" extension
6. Sign in with your GitHub account
7. You now have:
   - 2,000 code completions/month (free)
   - 50 chat messages/month (free)

**Alternative: Use Cursor instead of VS Code**
- Cursor includes Copilot-like features built-in
- Free tier: 2,000 completions/month
- Download: https://cursor.com

### 6. Windsurf (Alternative AI Code Editor)
**Setup time: 2 minutes**

1. Download: https://windsurf.com
2. Install and open
3. Sign in with GitHub/Google
4. You get:
   - 25 credits/month (free)
   - Unlimited fast tab completions
   - AI chat and commands
   - 1 app deploy per day

### 7. Continue.dev (Open Source AI Assistant)
**Setup time: 3 minutes**

1. Open VS Code
2. Go to Extensions (Ctrl+Shift+X)
3. Search "Continue"
4. Install "Continue" extension
5. Open the Continue panel (Ctrl+Shift+L)
6. Choose a model:
   - Free: Ollama (local) + any model
   - Free: Google Gemini (1,000 requests/day)
   - Free: OpenRouter (various free models)

**For local models (100% free, no limits):**
1. Install Ollama: https://ollama.com
2. Run: `ollama pull codellama`
3. In Continue settings, select Ollama provider

---

## Quick Start Checklist

- [x] Freebuff - Running
- [x] Agentation - Installed
- [x] GitHub Actions - Configured
- [x] CodeRabbit - Configured (need to install GitHub App)
- [ ] GitHub Copilot - Install in VS Code
- [ ] OR Windsurf - Install as alternative editor
- [ ] OR Continue.dev - Install in VS Code

## Your Daily Workflow

### For small changes (text, images, minor edits):
1. Open your website in browser
2. Use Agentation to annotate what needs to change
3. Paste the annotation to Freebuff
4. Freebuff makes the change

### For new features or bug fixes:
1. Ask Freebuff to make the change
2. Push to GitHub
3. CodeRabbit auto-reviews the PR
4. Merge when approved

### For content updates:
1. Edit the markdown files in `src/content/`
2. Push to GitHub
3. Site auto-deploys

---

## Total Cost: $0/month

All tools listed above are free. The only costs would be:
- Domain name (~$10/year, optional)
- If you need more than the free tier limits

## Need Help?

- Freebuff: Ask me anything about your code
- Agentation: Click elements and paste annotations to me
- CodeRabbit: Will review your PRs automatically
