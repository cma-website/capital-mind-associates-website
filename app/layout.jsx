import './globals.css';
import {Header,Footer,Reveal} from '../components/Corporate';
export const metadata={metadataBase:new URL(process.env.NEXT_PUBLIC_SITE_URL||'https://capital-mind-associates-delhi.grand-jelly-0309.chatgpt.site'),title:{default:'Capital Mind Associates | Accounting, GST & Tax Services in Delhi',template:'%s | Capital Mind Associates'},description:'Accounting, bookkeeping, GST, ITR, company registration, ROC filing, trademark and business finance support in Delhi NCR. Call 8796862433.',robots:{index:process.env.NEXT_PUBLIC_ALLOW_INDEXING==='true',follow:true}};
export default function Layout({children}){return <html lang="en"><body><a className="skip" href="#main">Skip to content</a><Header/>{children}<Footer/><Reveal/></body></html>}
