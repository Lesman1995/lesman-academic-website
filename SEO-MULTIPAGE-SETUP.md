# SEO multi-page update

This version replaces hash URLs such as `/#research` with real pages:

- `/`
- `/research/`
- `/publications/`
- `/teaching/`
- `/cv/`
- `/contact/`

Each page has its own title, description, canonical URL, Open Graph metadata, and sitemap entry.

## Upload to GitHub

1. Extract this ZIP.
2. Open the `lesman-academic-website` repository on GitHub.
3. Choose **Add file → Upload files**.
4. Drag all extracted files and folders into the upload area.
5. Commit directly to `main`.
6. Wait for the GitHub Pages workflow to finish with a green check.
7. Test every URL listed above.
8. In Google Search Console, resubmit `https://lesmanghazaryan.com/sitemap.xml` and request indexing for the main pages.

## Change the portrait later

Replace `public/lesman-ghazaryan-photo.jpg` with a new JPG using the exact same filename. Commit the change and wait for GitHub Actions to redeploy. The homepage and social-sharing metadata will automatically use the replacement.
