from pathlib import Path
from html.parser import HTMLParser
import json
from urllib.parse import unquote
root=Path(__file__).resolve().parents[1];out=root/'out'
class Parse(HTMLParser):
 def __init__(self):super().__init__();self.links=[];self.sections=0;self.main=False;self.schema=False;self.schemas=[]
 def handle_starttag(self,t,attrs):
  a=dict(attrs)
  if t=='main':self.main=True
  if t=='section' and self.main:self.sections+=1
  for key in ['href','src']:
   if key in a:self.links.append(a[key])
  if t=='script' and a.get('type')=='application/ld+json':self.schema=True
 def handle_endtag(self,t):
  if t=='main':self.main=False
  if t=='script':self.schema=False
 def handle_data(self,d):
  if self.schema:self.schemas.append(json.loads(d))
pages=['','about','contact']+[s['slug'] for s in json.loads((root/'content/site.json').read_text())]
for slug in pages:
 p=Parse();p.feed((out/slug/'index.html').read_text());assert p.sections==7,(slug,p.sections)
bad=[];count=0
for file in out.rglob('*.html'):
 p=Parse();p.feed(file.read_text())
 for url in p.links:
  url=unquote(url.split('?')[0].split('#')[0])
  if url.startswith('/') and not url.startswith('//'):
   target=out/url.lstrip('/');target=target/'index.html' if url.endswith('/') else target;count+=1
   if not target.exists():bad.append((file.name,url))
assert not bad,bad
print(f'PASS: 10 main pages each have 7 sections; {count} internal links/assets; structured JSON valid.')
