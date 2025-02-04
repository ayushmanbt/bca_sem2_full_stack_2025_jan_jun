# Practical notes for 28th January 2025

### Problem statement 

Build a survey form for online websries and movies consumers

Soulution at [Jan_28_code](./Jan_28_code/)

### Auxiliary learning

We also learnt how to use github pages for hosting webpages.

1. Create a GitHub Repository
 - Go to [GitHub](https://www.github.com) and log in (or sign up if you don't have an account).
 - Click the "+" (top right) → "New repository".
 - Enter a repository name (e.g., my-website).
 - Select "Public" and click "Create repository".
2. Upload or Push Your Website Files
    
    **Option 1: Upload Manually**
    - In your repository, click "Add file" → "Upload files".
    - Upload your index.html, CSS, and other files.
    - Click "Commit changes".
  
    **Option 2: Push Using Git (if you have Git installed)**

    ```sh
    git init
    git remote add origin https://github.com/your-username/my-website.git
    git add .
    git commit -m "Initial commit"
    git push -u origin main
    ```

3. Enable GitHub Pages
Go to your repository.
Click "Settings" → "Pages" (left sidebar).
Under "Branch", select main (or master).
Click "Save".
4. Access Your Website
Wait a few minutes for GitHub Pages to deploy.
Your site will be live at:
    ```
    https://your-username.github.io/my-website/
    ```

✅ Done! 🚀
