export const dynamic='force-static';
export default function robots(){const root=process.env.NEXT_PUBLIC_SITE_URL||'https://capitalmindassociates.com/';return {rules:{userAgent:'*',...(process.env.NEXT_PUBLIC_ALLOW_INDEXING==='true'?{allow:'/'}:{disallow:'/'})},sitemap:root+'/sitemap.xml'}}
