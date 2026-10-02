"""Run with fonttools[woff]; pass the extracted Resource Han Rounded v0.990 directory."""
import json, pathlib, sys
from fontTools import subset
from fontTools.ttLib import TTFont
root=pathlib.Path(__file__).resolve().parents[1]
source=pathlib.Path(sys.argv[1])
out=root/'public/inspirplanet/fonts';out.mkdir(parents=True,exist_ok=True)
labels='English简体中文繁體中文日本語한국어FrançaisDeutschEspañol'
def strings(value):
 if isinstance(value,str):return value
 if isinstance(value,list):return ''.join(map(strings,value))
 if isinstance(value,dict):return ''.join(map(strings,value.values()))
 return ''
css=[]
for lang,variant in [('zh-Hans','SC'),('zh-Hant','TC'),('ja','J'),('ko','K')]:
 text=strings(json.loads((root/'lib/inspirplanet/locales'/f'{lang}.json').read_text()))+labels
 unicodes={ord(c) for c in text if ord(c)>255}
 for weight,name in [(400,'Regular'),(700,'Bold')]:
  font=TTFont(source/f'ResourceHanRounded{variant}-{name}.ttf')
  missing=unicodes-set(font.getBestCmap())
  assert not missing,(lang,missing)
  options=subset.Options();options.flavor='woff2';options.name_IDs=['*'];options.name_legacy=True;options.name_languages=['*']
  worker=subset.Subsetter(options=options);worker.populate(unicodes=unicodes);worker.subset(font);font.flavor='woff2'
  filename=f'rounded-{lang}-{weight}.woff2';font.save(out/filename)
  css.append(f'@font-face {{ font-family: "IP Rounded {variant}"; src: url("/inspirplanet/fonts/{filename}") format("woff2"); font-weight: {weight}; font-style: normal; font-display: swap; }}')
  print(filename,(out/filename).stat().st_size,'bytes;',len(unicodes),'characters')
css.append('''
.ip { font-family:var(--font-ip-rounded), "IP Rounded SC", "Yuanti SC", "Hiragino Maru Gothic ProN", ui-rounded, sans-serif; }
html[lang="zh-Hant"] .ip { font-family:var(--font-ip-rounded), "IP Rounded TC", "Yuanti TC", ui-rounded, sans-serif; }
html[lang="ja"] .ip { font-family:var(--font-ip-rounded), "IP Rounded J", "Hiragino Maru Gothic ProN", ui-rounded, sans-serif; }
html[lang="ko"] .ip { font-family:var(--font-ip-rounded), "IP Rounded K", ui-rounded, sans-serif; }
.ip button, .ip select, .ip input, .ip textarea { font-family:inherit; }
.ip-language-menu button { font-family:inherit; }
.ip-brand { letter-spacing:-.035em; font-weight:800; }
.ip-hero h1, .ip-prose h1 { letter-spacing:-.025em; font-weight:800; }
.ip h2 { letter-spacing:-.02em; font-weight:700; }
''')
(root/'app/inspirplanet/typography.css').write_text('\n'.join(css))
