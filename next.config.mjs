const config={output:'export',images:{unoptimized:true},trailingSlash:true,poweredByHeader:false,allowedDevOrigins:['terminal.local']};
if(process.env.NODE_ENV==='development'){delete config.output;config.distDir='.next-preview';}
export default config;
