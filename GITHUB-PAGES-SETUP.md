# Free GitHub Pages setup

This website is prepared for GitHub Pages and the custom domain:

`lesmanghazaryan.com`

## 1. Create the repository

1. Sign in to GitHub.
2. Create a new repository named `lesman-academic-website`.
3. Select **Public**. GitHub Pages is free for public repositories.
4. Do not add a README, `.gitignore`, or license during repository creation.

## 2. Upload this package

1. Extract this ZIP on your computer.
2. Open the new GitHub repository.
3. Select **Add file → Upload files**.
4. Drag all extracted files and folders into GitHub, including the hidden `.github` folder.
5. Commit directly to the `main` branch.

Important: confirm that `.github/workflows/deploy-pages.yml` was uploaded. If Windows does not show `.github`, enable **View → Show → Hidden items** in File Explorer.

## 3. Enable GitHub Pages

1. Open the repository's **Settings**.
2. In the left sidebar, select **Pages**.
3. Under **Build and deployment → Source**, select **GitHub Actions**.
4. Open the repository's **Actions** tab.
5. Wait for **Deploy website to GitHub Pages** to finish with a green check mark.

## 4. Add the custom domain in GitHub first

1. Return to **Settings → Pages**.
2. Under **Custom domain**, enter:

   `lesmanghazaryan.com`

3. Select **Save**.

Do this before changing Porkbun DNS.

## 5. Configure Porkbun DNS

Open Porkbun → Domain Management → `lesmanghazaryan.com` → DNS.

Remove conflicting parking records for the root domain or `www`, especially records pointing to Porkbun's parking service. Do not delete MX records if you use email or email forwarding.

Add these four **A** records for the root domain:

| Type | Host | Answer / Value |
|---|---|---|
| A | leave blank | 185.199.108.153 |
| A | leave blank | 185.199.109.153 |
| A | leave blank | 185.199.110.153 |
| A | leave blank | 185.199.111.153 |

Then add the `www` record:

| Type | Host | Answer / Value |
|---|---|---|
| CNAME | www | YOUR-GITHUB-USERNAME.github.io |

Replace `YOUR-GITHUB-USERNAME` with your actual GitHub username. Do not include `https://`, and do not include the repository name.

Leave TTL at Porkbun's default value.

## 6. Enable HTTPS

1. Return to GitHub → repository **Settings → Pages**.
2. Wait until the DNS check succeeds.
3. Select **Enforce HTTPS** when the checkbox becomes available.

DNS and certificate provisioning may take time. Test both:

- `https://lesmanghazaryan.com`
- `https://www.lesmanghazaryan.com`

The `www` version should redirect to the root domain after both records are configured.

## 7. Future updates

Edit files on GitHub or upload replacements. Every commit to `main` automatically rebuilds and republishes the website through GitHub Actions.

To update the CV, replace:

`public/lesman-ghazaryan-cv.pdf`

To update the portrait, replace:

`public/lesman-ghazaryan-photo.jpg`

Keep the filenames exactly the same so the website does not need code changes.
