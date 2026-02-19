import fs from 'fs';
import path from 'path';
import { generateSitemapXML, getSitemapStats } from '../src/lib/sitemap-generator';

function generateSitemap() {
  console.log('Generating dynamic sitemap...');
  
  // Generate sitemap XML
  const sitemapXML = generateSitemapXML();
  
  // Get statistics
  const stats = getSitemapStats();
  
  // Write sitemap to public directory
  const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemapXML);
  
  console.log(`Sitemap generated successfully!`);
  console.log(`Total URLs: ${stats.totalPages}`);
  console.log(`Static pages: ${stats.staticPages}`);
  console.log(`Blog pages: ${stats.blogPages}`);
  console.log(`Sitemap saved to: ${sitemapPath}`);
}

// Run the generation
generateSitemap();
