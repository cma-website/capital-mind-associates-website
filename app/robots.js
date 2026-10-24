export const dynamic='force-static';
export default function robots(){const root=process.env.NEXT_PUBLIC_SITE_URL||'https://capital-mind-associates-delhi.grand-jelly-0309.chatgpt.site';return {rules:{userAgent:'*',...(process.env.NEXT_PUBLIC_ALLOW_INDEXING==='true'?{allow:'/'}:{disallow:'/'})},sitemap:root+'/sitemap.xml'}}
