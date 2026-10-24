export const dynamic='force-static';
import services from '../content/site.json';
export default function sitemap(){const root=process.env.NEXT_PUBLIC_SITE_URL||'https://capitalmindassociates.com/';return ['', 'about/',...services.map(s=>s.slug+'/'),'contact/','privacy-policy/','disclaimer/','sitemap/'].map(p=>({url:root+'/'+p,changeFrequency:'monthly',priority:p?0.7:1}))}
