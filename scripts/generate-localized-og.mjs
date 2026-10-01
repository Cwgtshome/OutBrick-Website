/** Rebuild localized social cards from neutral original mascot assets and CSS. */
import { readFile, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE || 'playwright');
const copies = {
  fr: {
    eyebrow: 'OUTBRICK · GRATUIT SUR L’APP STORE',
    title: 'Un boulevard<br>construit en<br><span>briques.</span>',
    stats: '2 000 grilles · 167 villages de briques · neuf amis',
  },
  de: {
    eyebrow: 'OUTBRICK · KOSTENLOS IM APP STORE',
    title: 'Ein Boulevard,<br>gebaut aus<br><span>Bausteinen.</span>',
    stats: '2.000 Spielfelder · 167 Bausteindörfer · neun Freunde',
  },
  es: {
    eyebrow: 'OUTBRICK · GRATIS EN EL APP STORE',
    title: 'Un bulevar<br>construido con<br><span>bloques.</span>',
    stats: '2.000 tableros · 167 pueblos de bloques · nueve amigos',
  },
  ja: {
    eyebrow: 'OUTBRICK · APP STOREで無料',
    title: 'ブロックで<br>つくる<br><span>大通り。</span>',
    stats: '2,000の盤面 · 167のブロックの村 · 9人の仲間',
  },
};
const data = async (file, mime) => `data:${mime};base64,${(await readFile(path.join(root, 'public', file))).toString('base64')}`;
const assets = {
  display: await data('fonts/fredoka-latin-wght.woff2', 'font/woff2'),
  text: await data('fonts/figtree-latin-wght.woff2', 'font/woff2'),
  bricko: await data('assets/friends/bricko.png', 'image/png'),
  sprout: await data('assets/friends/sprout.png', 'image/png'),
  peach: await data('assets/friends/peach.png', 'image/png'),
};
await mkdir(path.join(root, 'public/og'), { recursive: true });
const browser = await chromium.launch({ headless: true });
try {
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
  for (const [locale, copy] of Object.entries(copies)) {
    await page.setContent(`<!doctype html><html lang="${locale}"><head><meta charset="UTF-8"><style>
      @font-face{font-family:Fredoka;src:url('${assets.display}');font-weight:300 700}
      @font-face{font-family:Figtree;src:url('${assets.text}');font-weight:300 900}
      *{box-sizing:border-box}body{margin:0;background:#fff8e9;color:#211652;width:1200px;height:630px;overflow:hidden;font-family:Figtree,'Hiragino Sans',sans-serif}
      .copy{position:absolute;left:62px;top:52px;width:710px;z-index:2}
      .eyebrow{font-weight:750;font-size:21px;letter-spacing:2.7px;color:#5136c6}
      h1{font-family:Fredoka,'Hiragino Maru Gothic ProN','Hiragino Sans',sans-serif;font-size:79px;line-height:1.08;letter-spacing:-1.6px;font-weight:650;margin:35px 0 0}
      h1 span{display:inline-block;background:#ffcd3f;border-radius:16px;padding:0 14px 9px;box-shadow:0 9px 0 #bb8425}
      .stats{position:absolute;left:64px;top:497px;font-size:25px;font-weight:550;z-index:3;white-space:nowrap}
      .scene{position:absolute;right:0;top:0;width:400px;height:560px;background:#d8d1fa;border-radius:200px 0 0 200px}
      .brick{position:absolute;border-radius:15px;box-shadow:inset 0 -10px #00000013}
      .brick:before,.brick:after{content:'';position:absolute;top:-10px;width:39px;height:20px;background:inherit;border-radius:9px 9px 0 0}
      .brick:before{left:23px}.brick:after{right:23px}
      .b1{width:160px;height:80px;left:76px;top:114px;background:#b4d576;transform:rotate(-12deg)}
      .b2{width:180px;height:85px;left:185px;top:284px;background:#f9bdab;transform:rotate(12deg)}
      .b3{width:190px;height:88px;left:22px;top:371px;background:#7dcdeb;transform:rotate(-8deg)}
      img{position:absolute;object-fit:contain;filter:drop-shadow(0 12px 7px #21165220)}
      .sprout{width:152px;height:190px;left:163px;top:28px;transform:rotate(9deg)}
      .bricko{width:210px;height:250px;left:22px;top:222px;transform:rotate(-8deg)}
      .peach{width:166px;height:206px;left:223px;top:350px;transform:rotate(7deg)}
      .floor{position:absolute;left:0;bottom:0;width:1200px;height:66px;border-top:8px solid #7560d7;background-color:#e8d2a0;background-image:linear-gradient(#c8b37b55 2px,transparent 2px),linear-gradient(90deg,#c8b37b55 2px,transparent 2px);background-size:64px 32px}
      html[lang=ja] h1{font-size:75px;line-height:1.23;letter-spacing:0;font-weight:800;margin-top:28px}
      html[lang=ja] .eyebrow{letter-spacing:1px}
    </style></head><body><div class="copy"><div class="eyebrow">${copy.eyebrow}</div><h1>${copy.title}</h1></div><div class="stats">${copy.stats}</div><div class="scene"><div class="brick b1"></div><div class="brick b2"></div><div class="brick b3"></div><img class="sprout" src="${assets.sprout}" alt=""><img class="bricko" src="${assets.bricko}" alt=""><img class="peach" src="${assets.peach}" alt=""></div><div class="floor"></div></body></html>`);
    await page.evaluate(async () => { await document.fonts.ready; await Promise.all([...document.images].map(img => img.decode())); });
    const overflow = await page.evaluate(() => [...document.querySelectorAll('.copy,.stats,h1')].some(el => el.scrollWidth > el.clientWidth));
    if (overflow) throw new Error(`Text overflow in ${locale} social card`);
    await page.screenshot({ path: path.join(root, `public/og/${locale}.png`), type: 'png' });
    console.log(`public/og/${locale}.png (1200 × 630)`);
  }
} finally { await browser.close(); }
