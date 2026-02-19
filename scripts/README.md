# Dynamic Sitemap Generation

This project now includes dynamic sitemap generation that automatically updates whenever new blogs are added to the `src/data/blogsData.ts` file.

## How it works

1. **Automatic Generation**: The sitemap is automatically generated before each build using the `prebuild` script in `package.json`
2. **Blog Integration**: All blog posts from `src/data/blogsData.ts` are automatically included in the sitemap
3. **Static Pages**: Core website pages are also included in the sitemap
4. **Dynamic Last Modified**: Blog posts use their `publishDate` for the `lastmod` field, while static pages use a fixed date

## Usage

### Automatic (Recommended)
The sitemap is automatically generated when you run:
```bash
npm run build
```

### Manual Generation
You can manually generate the sitemap anytime by running:
```bash
npm run generate-sitemap
```

## Files

- `scripts/generate-sitemap.ts` - Main sitemap generation script
- `src/lib/sitemap-generator.ts` - Utility functions for sitemap generation
- `public/sitemap.xml` - Generated sitemap file (auto-generated)

## Adding New Blogs

When you add a new blog to `src/data/blogsData.ts`:

1. Add the blog object with all required fields including `slug` and `publishDate`
2. Run `npm run build` or `npm run generate-sitemap`
3. The new blog will automatically appear in the sitemap

## Sitemap Structure

The generated sitemap includes:
- **Static Pages**: Home, services, contact, about, etc.
- **Blog Pages**: All blog posts from `blogsData.ts`
- **Privacy Pages**: Terms, privacy policy, etc.

## Customization

To modify which pages are included in the sitemap, edit the `staticPages` array in `src/lib/sitemap-generator.ts`.

To change the base URL, update the `BASE_URL` constant in the same file.
