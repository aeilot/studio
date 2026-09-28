import type { Language } from "./rediscover-languages";

type Three = readonly [string, string, string];

type Plan = {
  name: string;
  price: string;
  billing: string;
  items: readonly string[];
};

export type LandingCopy = {
  navToday: string;
  navRadar: string;
  navShared: string;
  navPlans: string;
  support: string;
  heroEyebrow: string;
  heroLead: string;
  pocketLink: string;
  problemEyebrow: string;
  problemTitle: string;
  problemBody: string;
  todayLabel: string;
  todayTitle: string;
  todayBody: string;
  styles: Three;
  notifTitle: string;
  notifBody: string;
  notifTime: string;
  rateTitle: string;
  rateBody: string;
  rateAlt: string;
  saveLabel: string;
  saveTitle: string;
  saveBody: string;
  captures: readonly string[];
  jevCredit: string;
  libraryAlt: string;
  radarLabel: string;
  radarTitle: string;
  radarBody: string;
  radarQuote: string;
  radarOpml: string;
  sharedLabel: string;
  sharedTitle: string;
  sharedBody: string;
  sharedNote: string;
  sharedAlt: string;
  pocketTitle: string;
  pocketBody: string;
  pocketNote: string;
  plansEyebrow: string;
  plansTitle: string;
  plansIntro: string;
  plans: readonly [Plan, Plan, Plan];
  pricingNote: string;
  metaTitle: string;
  metaDescription: string;
};

export const landing = {
  en: {
    navToday: "Today",
    navRadar: "Radar",
    navShared: "Shared",
    navPlans: "Plans",
    support: "Support & feedback",
    heroEyebrow: "The other half of read-later.",
    heroLead:
      "Most apps are great at saving. Rediscover is built for coming back: every day it brings back one, three or five pages you saved, and lets you know when they’re ready.",
    pocketLink: "Coming from Pocket?",
    problemEyebrow: "THE PROBLEM WITH LATER",
    problemTitle: "Later has a way of becoming never.",
    problemBody:
      "You saved it for a reason. Then it sank under everything else you saved. Rediscover isn’t another list to clear. It’s the part that brings things back.",
    todayLabel: "01 / TODAY",
    todayTitle: "A few good pages. Every day.",
    todayBody:
      "Choose Focused, Balanced or Expanded: one, three or five pages from what you saved at least a day ago. Turn on a quiet reminder, and it only arrives if you haven’t opened Today yet.",
    styles: ["Focused", "Balanced", "Expanded"],
    notifTitle: "Today",
    notifBody: "A few pages to read, when you're ready.",
    notifTime: "now",
    rateTitle: "Read it. Rate it.",
    rateBody:
      "Finish a page and tell Rediscover whether it was worth your time. Tomorrow’s picks get a little more yours.",
    rateAlt: "Rediscover asking “Was this worth your time?” after a page is finished",
    saveLabel: "02 / SAVE",
    saveTitle: "Save without sorting.",
    saveBody:
      "Save from the share sheet, Safari, Chrome, Shortcuts or the clipboard. Rediscover reads each page, writes a short summary and files it for you. No tags to invent, no folders to maintain.",
    captures: ["Share sheet", "Safari", "Chrome", "Shortcuts", "Clipboard"],
    jevCredit: "Smart categories, powered by Jev.",
    libraryAlt:
      "A saved page in the Rediscover Library with its summary, topics and category",
    radarLabel: "03 / RADAR",
    radarTitle: "Fresh writing. Knows when to stop.",
    radarBody:
      "Radar watches the sites you already save from and deals new pages as cards. Swipe right to save, left to pass. It learns from what you keep, and after five saves it calls it a day.",
    radarQuote: "Five saved pages is plenty to read. Radar will wait.",
    radarOpml: "Bring your feeds along with OPML import on Pro.",
    sharedLabel: "04 / SHARED",
    sharedTitle: "Shared, for reading together.",
    sharedBody:
      "Invite people into a space, drop in links worth discussing, and save the best to your own Library.",
    sharedNote:
      "Joining a space is always free. Your plan sets how many spaces you can create.",
    sharedAlt: "Shared spaces in Rediscover",
    pocketTitle: "Coming from Pocket?",
    pocketBody:
      "Bring your Pocket export, browser bookmarks or a CSV. Rediscover starts bringing them back tomorrow.",
    pocketNote: "Imports are included with Pro.",
    plansEyebrow: "PLANS",
    plansTitle: "A plan for the way you read.",
    plansIntro:
      "Start free. Pay once for Pro, or subscribe to Pro+ when you want Cloud AI without your own key.",
    plans: [
      {
        name: "Free",
        price: "$0",
        billing: "Get to know Rediscover",
        items: [
          "15 saved articles · 3 Radar sources",
          "Create 1 shared space",
          "Cloud Free",
        ],
      },
      {
        name: "Pro",
        price: "$29.99",
        billing: "One-time purchase · Lifetime",
        items: [
          "Unlimited saved articles and Radar sources",
          "Pocket, bookmark and OPML imports",
          "iCloud sync across devices",
          "Bring your own OpenRouter key",
          "Create 3 shared spaces",
        ],
      },
      {
        name: "Pro+",
        price: "$5.99 / month",
        billing: "or $49.99 / year",
        items: [
          "Everything in Pro",
          "Cloud AI without your own API key, with higher usage limits",
          "Unlimited shared spaces",
        ],
      },
    ],
    pricingNote:
      "US prices. Your local price appears in the App Store. Cloud usage limits apply; bring-your-own-key model costs are billed by your provider.",
    metaTitle: "Rediscover — the read-later app that brings your pages back",
    metaDescription:
      "The read-later app built for coming back: one, three or five saved pages each day, plus Radar for fresh writing. A Pocket alternative for iPhone, iPad and Mac.",
  },
  "zh-Hans": {
    navToday: "Today",
    navRadar: "Radar",
    navShared: "Shared",
    navPlans: "方案",
    support: "支持与反馈",
    heroEyebrow: "稍后读，还有另一半",
    heroLead:
      "大多数 App 擅长收藏。Rediscover 为「回来读」而设计：每天从你的收藏中带回一篇、三篇或五篇，准备好了就告诉你。",
    pocketLink: "从 Pocket 迁移？",
    problemEyebrow: "「稍后」的问题",
    problemTitle: "稍后读，常常变成不再读",
    problemBody:
      "当初收藏总有理由，后来它被更多收藏淹没。Rediscover 不是又一张待办清单，而是把好内容带回来的那一半。",
    todayLabel: "01 / 今日推荐",
    todayTitle: "每天，几篇好内容",
    todayBody:
      "选择专注、均衡或更广：每天从保存满一天的内容中挑出一篇、三篇或五篇。开启安静的提醒后，只有在你还没打开 Today 时才会出现。",
    styles: ["专注", "均衡", "更广"],
    notifTitle: "今天",
    notifBody: "有几篇可以再看，有空再打开。",
    notifTime: "现在",
    rateTitle: "读完，打个分",
    rateBody:
      "读完一篇，告诉 Rediscover 它值不值得。明天的推荐会更懂你一点。",
    rateAlt: "读完后，Rediscover 询问「这篇值得花时间吗？」",
    saveLabel: "02 / 收藏",
    saveTitle: "收藏，不用整理",
    saveBody:
      "通过分享菜单、Safari、Chrome、快捷指令或剪贴板保存网页。Rediscover 会读取内容、写好简短摘要并自动归类。不用想标签，也不用维护文件夹。",
    captures: ["分享菜单", "Safari", "Chrome", "快捷指令", "剪贴板"],
    jevCredit: "智能分类由 Jev 提供支持。",
    libraryAlt: "Rediscover 资料库中的一篇收藏，带有摘要、主题和分类",
    radarLabel: "03 / RADAR",
    radarTitle: "新文章，也懂得适可而止",
    radarBody:
      "Radar 关注你常收藏的网站，把新文章做成卡片发给你。右滑收藏，左滑跳过。它从你留下的内容中学习偏好，收藏满五篇就收工。",
    radarQuote: "已经保存五篇，一时读不完。明天再看。",
    radarOpml: "Pro 支持导入 OPML，把原来的订阅一起带来。",
    sharedLabel: "04 / SHARED",
    sharedTitle: "Shared，一起读好内容",
    sharedBody:
      "邀请朋友进入共读空间，分享值得讨论的网页，把最好的存进自己的资料库。",
    sharedNote: "加入空间始终免费；可创建的空间数量取决于你的方案。",
    sharedAlt: "Rediscover 中的共读空间",
    pocketTitle: "从 Pocket 迁移？",
    pocketBody:
      "导入 Pocket 导出文件、浏览器书签或 CSV。明天起，Rediscover 就会开始把它们带回来。",
    pocketNote: "导入功能包含在 Pro 中。",
    plansEyebrow: "方案",
    plansTitle: "找到适合你的阅读方案",
    plansIntro:
      "从免费开始。一次买断 Pro；想用无需自备密钥的云端 AI，可订阅 Pro+。",
    plans: [
      {
        name: "免费版",
        price: "$0",
        billing: "从这里认识 Rediscover",
        items: [
          "保存 15 篇文章 · 3 个 Radar 来源",
          "创建 1 个共读空间",
          "Cloud Free",
        ],
      },
      {
        name: "Pro",
        price: "$29.99",
        billing: "一次购买 · 终身使用",
        items: [
          "无限保存文章与 Radar 来源",
          "导入 Pocket、书签与 OPML",
          "跨设备 iCloud 同步",
          "自带 OpenRouter API Key",
          "创建 3 个共读空间",
        ],
      },
      {
        name: "Pro+",
        price: "$5.99 / 月",
        billing: "或 $49.99 / 年",
        items: [
          "包含 Pro 的全部功能",
          "无需自备 API Key 的云端 AI，享有更高用量额度",
          "创建不限数量的共读空间",
        ],
      },
    ],
    pricingNote:
      "以上为美国区价格，当地价格以 App Store 显示为准。云端服务设有用量限制；自带 API Key 的模型费用由服务商另行计费。",
    metaTitle: "Rediscover — 会把收藏带回来的稍后读 App",
    metaDescription:
      "为「回来读」而设计的稍后读 App：每天带回一篇、三篇或五篇收藏，Radar 还会发现新文章。适用于 iPhone、iPad 和 Mac 的 Pocket 替代品。",
  },
  "zh-Hant": {
    navToday: "Today",
    navRadar: "Radar",
    navShared: "Shared",
    navPlans: "方案",
    support: "支援與回饋",
    heroEyebrow: "稍後讀，還有另一半",
    heroLead:
      "大多數 App 擅長收藏。Rediscover 為「回來讀」而設計：每天從你的收藏中帶回一篇、三篇或五篇，準備好了就告訴你。",
    pocketLink: "從 Pocket 轉移？",
    problemEyebrow: "「稍後」的問題",
    problemTitle: "稍後讀，常常變成不再讀",
    problemBody:
      "當初收藏總有理由，後來它被更多收藏淹沒。Rediscover 不是又一張待辦清單，而是把好內容帶回來的那一半。",
    todayLabel: "01 / 今日推薦",
    todayTitle: "每天，幾篇好內容",
    todayBody:
      "選擇專注、均衡或更廣：每天從儲存滿一天的內容中挑出一篇、三篇或五篇。開啟安靜的提醒後，只有在你還沒打開 Today 時才會出現。",
    styles: ["專注", "均衡", "更廣"],
    notifTitle: "今天",
    notifBody: "有幾篇可以再看，有空再打開。",
    notifTime: "現在",
    rateTitle: "讀完，打個分",
    rateBody:
      "讀完一篇，告訴 Rediscover 它值不值得。明天的推薦會更懂你一點。",
    rateAlt: "讀完後，Rediscover 詢問「這篇值得花時間嗎？」",
    saveLabel: "02 / 收藏",
    saveTitle: "收藏，不用整理",
    saveBody:
      "透過分享選單、Safari、Chrome、捷徑或剪貼簿儲存網頁。Rediscover 會讀取內容、寫好簡短摘要並自動歸類。不用想標籤，也不用維護資料夾。",
    captures: ["分享選單", "Safari", "Chrome", "捷徑", "剪貼簿"],
    jevCredit: "智慧分類由 Jev 提供支援。",
    libraryAlt: "Rediscover 資料庫中的一篇收藏，附有摘要、主題和分類",
    radarLabel: "03 / RADAR",
    radarTitle: "新文章，也懂得適可而止",
    radarBody:
      "Radar 關注你常收藏的網站，把新文章做成卡片送到你面前。右滑收藏，左滑略過。它從你留下的內容中學習偏好，收藏滿五篇就收工。",
    radarQuote: "已經保存五篇，一時讀不完。明天再看。",
    radarOpml: "Pro 支援匯入 OPML，把原本的訂閱一起帶來。",
    sharedLabel: "04 / SHARED",
    sharedTitle: "Shared，一起讀好內容",
    sharedBody:
      "邀請朋友進入共讀空間，分享值得討論的網頁，把最好的存進自己的資料庫。",
    sharedNote: "加入空間始終免費；可建立的空間數量取決於你的方案。",
    sharedAlt: "Rediscover 中的共讀空間",
    pocketTitle: "從 Pocket 轉移？",
    pocketBody:
      "匯入 Pocket 匯出檔、瀏覽器書籤或 CSV。明天起，Rediscover 就會開始把它們帶回來。",
    pocketNote: "匯入功能包含在 Pro 中。",
    plansEyebrow: "方案",
    plansTitle: "找到適合你的閱讀方案",
    plansIntro:
      "從免費開始。一次買斷 Pro；想用無需自備金鑰的雲端 AI，可訂閱 Pro+。",
    plans: [
      {
        name: "免費版",
        price: "$0",
        billing: "從這裡認識 Rediscover",
        items: [
          "儲存 15 篇文章 · 3 個 Radar 來源",
          "建立 1 個共讀空間",
          "Cloud Free",
        ],
      },
      {
        name: "Pro",
        price: "$29.99",
        billing: "一次購買 · 終身使用",
        items: [
          "無限儲存文章與 Radar 來源",
          "匯入 Pocket、書籤與 OPML",
          "跨裝置 iCloud 同步",
          "自備 OpenRouter API Key",
          "建立 3 個共讀空間",
        ],
      },
      {
        name: "Pro+",
        price: "$5.99 / 月",
        billing: "或 $49.99 / 年",
        items: [
          "包含 Pro 的全部功能",
          "無需自備 API Key 的雲端 AI，享有更高用量額度",
          "建立不限數量的共讀空間",
        ],
      },
    ],
    pricingNote:
      "以上為美國區價格，當地價格以 App Store 顯示為準。雲端服務設有用量限制；自備 API Key 的模型費用由服務商另行計費。",
    metaTitle: "Rediscover — 會把收藏帶回來的稍後讀 App",
    metaDescription:
      "為「回來讀」而設計的稍後讀 App：每天帶回一篇、三篇或五篇收藏，Radar 還會發現新文章。適用於 iPhone、iPad 和 Mac 的 Pocket 替代方案。",
  },
  ja: {
    navToday: "Today",
    navRadar: "Radar",
    navShared: "Shared",
    navPlans: "プラン",
    support: "サポート",
    heroEyebrow: "「あとで読む」の、もう半分。",
    heroLead:
      "多くのアプリは保存が得意です。Rediscoverは「読み返す」ためのアプリ。保存したページから毎日1件、3件、または5件を選んで届け、準備ができたらお知らせします。",
    pocketLink: "Pocketから移行しますか？",
    problemEyebrow: "「あとで」の問題",
    problemTitle: "「あとで」は、いつの間にか「読まない」に。",
    problemBody:
      "保存したのには理由があったはず。でも、そのあと保存したものの下に埋もれてしまう。Rediscoverは片づけるべきリストではなく、もう一度届ける側のアプリです。",
    todayLabel: "01 / 今日のおすすめ",
    todayTitle: "毎日、いくつかの良いページを。",
    todayBody:
      "「絞る」「バランス」「広げる」から選ぶと、保存から1日以上たったページを毎日1件、3件、または5件届けます。控えめなリマインダーは、まだ今日のおすすめを開いていないときだけ届きます。",
    styles: ["絞る", "バランス", "広げる"],
    notifTitle: "今日",
    notifBody: "今日の分です。空いたときにどうぞ。",
    notifTime: "今",
    rateTitle: "読んで、評価する。",
    rateBody:
      "読み終えたら、時間をかける価値があったかを伝えましょう。明日のおすすめが、少しずつあなた好みになります。",
    rateAlt: "読み終えたあとに「読んでよかった？」とたずねるRediscover",
    saveLabel: "02 / 保存",
    saveTitle: "保存するだけ。整理はいらない。",
    saveBody:
      "共有シート、Safari、Chrome、ショートカット、クリップボードから保存できます。Rediscoverがページを読み、短い要約を書き、自動で分類します。タグを考える必要も、フォルダを管理する必要もありません。",
    captures: ["共有シート", "Safari", "Chrome", "ショートカット", "クリップボード"],
    jevCredit: "スマートな分類は Jev が支えています。",
    libraryAlt:
      "要約、トピック、カテゴリが付いたRediscoverライブラリの保存ページ",
    radarLabel: "03 / RADAR",
    radarTitle: "新しい記事を。ほどほどに。",
    radarBody:
      "Radarは、よく保存するサイトを見守り、新しい記事をカードで届けます。右にスワイプで保存、左でスキップ。残したものから好みを学び、5件保存したらその日はおしまいです。",
    radarQuote: "五本保存すれば十分です。Radarは待ちます。",
    radarOpml: "ProならOPMLを読み込んで、いつものフィードも一緒に。",
    sharedLabel: "04 / SHARED",
    sharedTitle: "Shared で、一緒に読む。",
    sharedBody:
      "スペースに仲間を招待し、話し合いたいリンクを共有して、気に入ったものは自分のライブラリへ保存できます。",
    sharedNote:
      "スペースへの参加はいつでも無料。作成できるスペースの数はプランによって異なります。",
    sharedAlt: "Rediscoverの共有スペース",
    pocketTitle: "Pocketから移行しますか？",
    pocketBody:
      "Pocketのエクスポート、ブラウザのブックマーク、CSVを読み込めます。明日から、Rediscoverがそれらを届け始めます。",
    pocketNote: "読み込みはProに含まれます。",
    plansEyebrow: "プラン",
    plansTitle: "読み方に合ったプランを。",
    plansIntro:
      "無料で始められます。Proは買い切り。自分のキーなしでCloud AIを使いたいならPro+を。",
    plans: [
      {
        name: "無料",
        price: "$0",
        billing: "Rediscover を試す",
        items: [
          "記事を15件保存 · Radar の情報源3件",
          "共有スペースを1つ作成",
          "Cloud Free",
        ],
      },
      {
        name: "Pro",
        price: "$29.99",
        billing: "買い切り · 永続利用",
        items: [
          "記事の保存・Radar の情報源が無制限",
          "Pocket、ブックマーク、OPML の読み込み",
          "デバイス間の iCloud 同期",
          "OpenRouter API キーの持ち込み",
          "共有スペースを3つ作成",
        ],
      },
      {
        name: "Pro+",
        price: "$5.99 / 月",
        billing: "または $49.99 / 年",
        items: [
          "Pro の全機能",
          "自分の API キー不要のクラウド AI、より多い利用枠",
          "共有スペースを無制限に作成",
        ],
      },
    ],
    pricingNote:
      "米国での価格です。お住まいの地域の価格は App Store に表示されます。クラウドには利用上限があります。BYOK のモデル利用料はプロバイダーから別途請求されます。",
    metaTitle: "Rediscover — 保存したページを届け直す「あとで読む」アプリ",
    metaDescription:
      "読み返すための「あとで読む」アプリ。保存したページから毎日1件・3件・5件を届け、Radarが新しい記事を見つけます。iPhone、iPad、Mac向けのPocket代替アプリ。",
  },
  ko: {
    navToday: "Today",
    navRadar: "Radar",
    navShared: "Shared",
    navPlans: "요금제",
    support: "지원 및 의견",
    heroEyebrow: "나중에 읽기의 나머지 절반.",
    heroLead:
      "대부분의 앱은 저장에 능숙합니다. Rediscover는 다시 돌아오기 위해 만들어졌습니다. 매일 저장한 페이지 중 한 편, 세 편 또는 다섯 편을 다시 가져오고, 준비되면 알려 드립니다.",
    pocketLink: "Pocket에서 오셨나요?",
    problemEyebrow: "'나중에'의 문제",
    problemTitle: "나중은 어느새 '안 읽음'이 됩니다.",
    problemBody:
      "저장한 데에는 이유가 있었죠. 그런데 그 뒤로 저장한 것들 아래에 묻혀 버립니다. Rediscover는 비워야 할 또 하나의 목록이 아니라, 다시 가져오는 쪽입니다.",
    todayLabel: "01 / 오늘",
    todayTitle: "매일, 좋은 글 몇 편.",
    todayBody:
      "좁게, 균형, 넓게 중에서 고르세요. 저장한 지 하루 이상 지난 페이지 중 매일 한 편, 세 편 또는 다섯 편을 가져옵니다. 조용한 알림은 아직 오늘을 열지 않았을 때만 도착합니다.",
    styles: ["좁게", "균형", "넓게"],
    notifTitle: "오늘",
    notifBody: "오늘 몫이 있어요. 시간 될 때 보세요.",
    notifTime: "지금",
    rateTitle: "읽고, 평가하세요.",
    rateBody:
      "다 읽은 뒤 시간을 들일 만했는지 알려 주세요. 내일의 추천이 조금 더 당신에게 맞춰집니다.",
    rateAlt: "다 읽은 뒤 “읽을 만했어요?”라고 묻는 Rediscover",
    saveLabel: "02 / 저장",
    saveTitle: "정리하지 않아도 되는 저장.",
    saveBody:
      "공유 시트, Safari, Chrome, 단축어 또는 클립보드에서 저장하세요. Rediscover가 페이지를 읽고, 짧은 요약을 쓰고, 알아서 분류합니다. 태그를 고민할 필요도, 폴더를 관리할 필요도 없습니다.",
    captures: ["공유 시트", "Safari", "Chrome", "단축어", "클립보드"],
    jevCredit: "스마트 분류는 Jev가 지원합니다.",
    libraryAlt:
      "요약, 주제, 카테고리가 표시된 Rediscover 라이브러리의 저장 페이지",
    radarLabel: "03 / RADAR",
    radarTitle: "새 글을, 적당히.",
    radarBody:
      "Radar는 자주 저장하는 사이트를 지켜보다가 새 글을 카드로 보여 줍니다. 오른쪽으로 밀면 저장, 왼쪽으로 밀면 넘기기. 남긴 글에서 취향을 배우고, 다섯 편을 저장하면 그날은 여기까지입니다.",
    radarQuote: "다섯 편이면 충분해요. Radar는 기다릴게요.",
    radarOpml: "Pro에서는 OPML로 기존 피드도 함께 가져올 수 있습니다.",
    sharedLabel: "04 / SHARED",
    sharedTitle: "Shared로 함께 읽어요.",
    sharedBody:
      "공간에 사람들을 초대하고, 이야기할 만한 링크를 공유하고, 가장 좋은 글은 내 라이브러리에 저장하세요.",
    sharedNote:
      "공간 참여는 언제나 무료입니다. 만들 수 있는 공간 수는 요금제에 따라 달라집니다.",
    sharedAlt: "Rediscover의 공유 공간",
    pocketTitle: "Pocket에서 오셨나요?",
    pocketBody:
      "Pocket 내보내기 파일, 브라우저 북마크 또는 CSV를 가져오세요. 내일부터 Rediscover가 다시 가져오기 시작합니다.",
    pocketNote: "가져오기는 Pro에 포함됩니다.",
    plansEyebrow: "요금제",
    plansTitle: "읽는 방식에 맞는 요금제.",
    plansIntro:
      "무료로 시작하세요. Pro는 한 번 구매로, 개인 키 없이 Cloud AI를 쓰려면 Pro+를 구독하세요.",
    plans: [
      {
        name: "무료",
        price: "$0",
        billing: "Rediscover 시작하기",
        items: [
          "기사 15개 저장 · Radar 소스 3개",
          "공유 공간 1개 만들기",
          "Cloud Free",
        ],
      },
      {
        name: "Pro",
        price: "$29.99",
        billing: "한 번 구매 · 평생 이용",
        items: [
          "기사 저장 및 Radar 소스 무제한",
          "Pocket, 북마크, OPML 가져오기",
          "기기 간 iCloud 동기화",
          "OpenRouter API 키 직접 사용",
          "공유 공간 3개 만들기",
        ],
      },
      {
        name: "Pro+",
        price: "$5.99 / 월",
        billing: "또는 $49.99 / 년",
        items: [
          "Pro의 모든 기능",
          "개인 API 키 없이 쓰는 클라우드 AI, 더 높은 사용 한도",
          "공유 공간 무제한 생성",
        ],
      },
    ],
    pricingNote:
      "미국 가격입니다. 지역 가격은 App Store에 표시됩니다. 클라우드 사용 한도가 적용되며 BYOK 모델 비용은 제공업체가 별도로 청구합니다.",
    metaTitle: "Rediscover — 저장한 글을 다시 가져오는 나중에 읽기 앱",
    metaDescription:
      "다시 읽기를 위해 만든 나중에 읽기 앱. 매일 저장한 페이지 중 한 편, 세 편 또는 다섯 편을 가져오고 Radar가 새 글을 찾아 줍니다. iPhone, iPad, Mac용 Pocket 대안.",
  },
  fr: {
    navToday: "Today",
    navRadar: "Radar",
    navShared: "Shared",
    navPlans: "Formules",
    support: "Assistance",
    heroEyebrow: "L’autre moitié de la lecture différée.",
    heroLead:
      "La plupart des apps savent enregistrer. Rediscover est conçu pour y revenir : chaque jour, il vous rapporte une, trois ou cinq pages enregistrées, et vous prévient quand elles sont prêtes.",
    pocketLink: "Vous venez de Pocket ?",
    problemEyebrow: "LE PROBLÈME DU « PLUS TARD »",
    problemTitle: "« Plus tard » finit souvent par devenir « jamais ».",
    problemBody:
      "Vous l’aviez enregistré pour une bonne raison. Puis tout le reste est venu le recouvrir. Rediscover n’est pas une liste de plus à vider : c’est la partie qui fait revenir les pages.",
    todayLabel: "01 / AUJOURD’HUI",
    todayTitle: "Quelques bonnes pages. Chaque jour.",
    todayBody:
      "Choisissez Resserré, Équilibré ou Élargi : une, trois ou cinq pages parmi celles enregistrées depuis au moins un jour. Activez un rappel discret : il n’arrive que si vous n’avez pas encore ouvert Aujourd’hui.",
    styles: ["Resserré", "Équilibré", "Élargi"],
    notifTitle: "Aujourd’hui",
    notifBody: "Quelques pages à lire, quand tu veux.",
    notifTime: "maintenant",
    rateTitle: "Lisez. Notez.",
    rateBody:
      "Une page terminée ? Dites à Rediscover si elle valait votre temps. Les sélections de demain vous ressembleront un peu plus.",
    rateAlt: "Rediscover demande « Ça valait le coup ? » après la lecture",
    saveLabel: "02 / ENREGISTRER",
    saveTitle: "Enregistrez sans trier.",
    saveBody:
      "Enregistrez depuis la feuille de partage, Safari, Chrome, Raccourcis ou le presse-papiers. Rediscover lit chaque page, rédige un court résumé et la classe pour vous. Aucune étiquette à inventer, aucun dossier à entretenir.",
    captures: ["Feuille de partage", "Safari", "Chrome", "Raccourcis", "Presse-papiers"],
    jevCredit: "Catégories intelligentes, propulsées par Jev.",
    libraryAlt:
      "Une page enregistrée dans la bibliothèque Rediscover, avec résumé, sujets et catégorie",
    radarLabel: "03 / RADAR",
    radarTitle: "Des nouveautés. Avec mesure.",
    radarBody:
      "Radar surveille les sites dont vous enregistrez déjà des pages et vous présente les nouveautés sous forme de cartes. Glissez à droite pour enregistrer, à gauche pour passer. Il apprend de ce que vous gardez et, après cinq enregistrements, s’arrête pour la journée.",
    radarQuote:
      "Cinq pages enregistrées, c’est déjà beaucoup à lire. Radar attendra.",
    radarOpml: "Importez vos flux via OPML avec Pro.",
    sharedLabel: "04 / SHARED",
    sharedTitle: "Shared, pour lire ensemble.",
    sharedBody:
      "Invitez des proches dans un espace, partagez les liens qui méritent une discussion et gardez les meilleurs dans votre bibliothèque.",
    sharedNote:
      "Rejoindre un espace est toujours gratuit. Votre formule détermine combien d’espaces vous pouvez créer.",
    sharedAlt: "Espaces partagés dans Rediscover",
    pocketTitle: "Vous venez de Pocket ?",
    pocketBody:
      "Importez votre export Pocket, vos favoris de navigateur ou un fichier CSV. Dès demain, Rediscover commence à vous les rapporter.",
    pocketNote: "Les imports sont inclus avec Pro.",
    plansEyebrow: "FORMULES",
    plansTitle: "Une formule pour votre façon de lire.",
    plansIntro:
      "Commencez gratuitement. Achetez Pro une fois pour toutes, ou abonnez-vous à Pro+ pour l’IA cloud sans clé personnelle.",
    plans: [
      {
        name: "Gratuit",
        price: "$0",
        billing: "Découvrez Rediscover",
        items: [
          "15 articles enregistrés · 3 sources Radar",
          "Créez 1 espace partagé",
          "Cloud Free",
        ],
      },
      {
        name: "Pro",
        price: "$29.99",
        billing: "Achat unique · À vie",
        items: [
          "Articles enregistrés et sources Radar illimités",
          "Import Pocket, favoris et OPML",
          "Synchronisation iCloud entre appareils",
          "Votre propre clé API OpenRouter",
          "Créez 3 espaces partagés",
        ],
      },
      {
        name: "Pro+",
        price: "$5.99 / mois",
        billing: "ou $49.99 / an",
        items: [
          "Toutes les fonctionnalités Pro",
          "IA cloud sans clé API personnelle, avec des quotas plus élevés",
          "Espaces partagés illimités",
        ],
      },
    ],
    pricingNote:
      "Prix américains. Le prix local s’affiche dans l’App Store. Des limites d’utilisation cloud s’appliquent ; les frais des modèles BYOK sont facturés par votre fournisseur.",
    metaTitle: "Rediscover — l’app de lecture différée qui vous rapporte vos pages",
    metaDescription:
      "L’app de lecture différée pensée pour y revenir : une, trois ou cinq pages enregistrées par jour, et Radar pour les nouveautés. Une alternative à Pocket sur iPhone, iPad et Mac.",
  },
  de: {
    navToday: "Today",
    navRadar: "Radar",
    navShared: "Shared",
    navPlans: "Tarife",
    support: "Support",
    heroEyebrow: "Die andere Hälfte von Später-lesen.",
    heroLead:
      "Die meisten Apps können gut speichern. Rediscover ist fürs Zurückkommen gemacht: Jeden Tag bringt es eine, drei oder fünf deiner gespeicherten Seiten zurück und sagt dir Bescheid, wenn sie bereit sind.",
    pocketLink: "Du kommst von Pocket?",
    problemEyebrow: "DAS PROBLEM MIT SPÄTER",
    problemTitle: "Aus später wird oft nie.",
    problemBody:
      "Du hattest einen Grund, es zu speichern. Dann ist es unter allem anderen verschwunden. Rediscover ist keine weitere Liste zum Abarbeiten, sondern der Teil, der Dinge zurückbringt.",
    todayLabel: "01 / HEUTE",
    todayTitle: "Ein paar gute Seiten. Jeden Tag.",
    todayBody:
      "Wähle Eng, Ausgewogen oder Breit: eine, drei oder fünf Seiten aus dem, was du vor mindestens einem Tag gespeichert hast. Eine leise Erinnerung kommt nur, wenn du Heute noch nicht geöffnet hast.",
    styles: ["Eng", "Ausgewogen", "Breit"],
    notifTitle: "Heute",
    notifBody: "Ein paar Seiten zum Lesen, wenn du soweit bist.",
    notifTime: "jetzt",
    rateTitle: "Lesen. Bewerten.",
    rateBody:
      "Seite fertig? Sag Rediscover, ob sie deine Zeit wert war. Die Auswahl von morgen wird ein bisschen mehr deine.",
    rateAlt: "Rediscover fragt nach dem Lesen: „Hat sich das gelohnt?“",
    saveLabel: "02 / SPEICHERN",
    saveTitle: "Speichern ohne Sortieren.",
    saveBody:
      "Speichere über das Teilen-Menü, Safari, Chrome, Kurzbefehle oder die Zwischenablage. Rediscover liest jede Seite, schreibt eine kurze Zusammenfassung und ordnet sie für dich ein. Keine Tags ausdenken, keine Ordner pflegen.",
    captures: ["Teilen-Menü", "Safari", "Chrome", "Kurzbefehle", "Zwischenablage"],
    jevCredit: "Intelligente Kategorien, unterstützt von Jev.",
    libraryAlt:
      "Eine gespeicherte Seite in der Rediscover-Bibliothek mit Zusammenfassung, Themen und Kategorie",
    radarLabel: "03 / RADAR",
    radarTitle: "Neues zum Lesen. Mit Maß.",
    radarBody:
      "Radar behält die Websites im Blick, von denen du schon speicherst, und zeigt dir neue Seiten als Karten. Nach rechts wischen zum Speichern, nach links zum Überspringen. Es lernt aus dem, was du behältst, und nach fünf gespeicherten Seiten ist für heute Schluss.",
    radarQuote: "Fünf gespeicherte Seiten sind genug zum Lesen. Radar wartet.",
    radarOpml: "Mit Pro bringst du deine Feeds per OPML-Import mit.",
    sharedLabel: "04 / SHARED",
    sharedTitle: "Shared: gemeinsam lesen.",
    sharedBody:
      "Lade andere in einen Raum ein, teile Links, über die es sich zu reden lohnt, und speichere die besten in deiner eigenen Bibliothek.",
    sharedNote:
      "Der Beitritt zu einem Raum ist immer kostenlos. Dein Tarif bestimmt, wie viele Räume du erstellen kannst.",
    sharedAlt: "Gemeinsame Räume in Rediscover",
    pocketTitle: "Du kommst von Pocket?",
    pocketBody:
      "Importiere deinen Pocket-Export, Browser-Lesezeichen oder eine CSV-Datei. Ab morgen bringt Rediscover sie dir zurück.",
    pocketNote: "Importe sind in Pro enthalten.",
    plansEyebrow: "TARIFE",
    plansTitle: "Ein Tarif für deine Art zu lesen.",
    plansIntro:
      "Starte kostenlos. Kaufe Pro einmalig oder abonniere Pro+, wenn du Cloud-KI ohne eigenen Schlüssel möchtest.",
    plans: [
      {
        name: "Kostenlos",
        price: "$0",
        billing: "Rediscover kennenlernen",
        items: [
          "15 gespeicherte Artikel · 3 Radar-Quellen",
          "1 gemeinsamen Raum erstellen",
          "Cloud Free",
        ],
      },
      {
        name: "Pro",
        price: "$29.99",
        billing: "Einmalkauf · Dauerhafter Zugang",
        items: [
          "Unbegrenzte Artikel und Radar-Quellen",
          "Pocket-, Lesezeichen- und OPML-Import",
          "iCloud-Synchronisierung zwischen Geräten",
          "Eigener OpenRouter-API-Schlüssel",
          "3 gemeinsame Räume erstellen",
        ],
      },
      {
        name: "Pro+",
        price: "$5.99 / Monat",
        billing: "oder $49.99 / Jahr",
        items: [
          "Alle Pro-Funktionen",
          "Cloud-KI ohne eigenen API-Schlüssel, mit höheren Nutzungslimits",
          "Unbegrenzte gemeinsame Räume",
        ],
      },
    ],
    pricingNote:
      "US-Preise. Deinen lokalen Preis siehst du im App Store. Für die Cloud gelten Nutzungslimits; BYOK-Modellkosten rechnet dein Anbieter separat ab.",
    metaTitle: "Rediscover — die Später-lesen-App, die deine Seiten zurückbringt",
    metaDescription:
      "Die Später-lesen-App fürs Zurückkommen: jeden Tag eine, drei oder fünf gespeicherte Seiten, dazu Radar für Neues. Eine Pocket-Alternative für iPhone, iPad und Mac.",
  },
  es: {
    navToday: "Today",
    navRadar: "Radar",
    navShared: "Shared",
    navPlans: "Planes",
    support: "Soporte",
    heroEyebrow: "La otra mitad de leer más tarde.",
    heroLead:
      "La mayoría de las apps saben guardar. Rediscover está hecho para volver: cada día te trae una, tres o cinco páginas que guardaste y te avisa cuando están listas.",
    pocketLink: "¿Vienes de Pocket?",
    problemEyebrow: "EL PROBLEMA DEL «MÁS TARDE»",
    problemTitle: "«Más tarde» suele acabar en «nunca».",
    problemBody:
      "Lo guardaste por algo. Luego quedó enterrado bajo todo lo demás que guardaste. Rediscover no es otra lista por vaciar: es la parte que trae las cosas de vuelta.",
    todayLabel: "01 / HOY",
    todayTitle: "Unas pocas buenas páginas. Cada día.",
    todayBody:
      "Elige Al grano, Equilibrio o Más amplio: una, tres o cinco páginas de lo que guardaste hace al menos un día. Activa un recordatorio discreto: solo llega si aún no has abierto Hoy.",
    styles: ["Al grano", "Equilibrio", "Más amplio"],
    notifTitle: "Hoy",
    notifBody: "Hay unas páginas para leer, cuando quieras.",
    notifTime: "ahora",
    rateTitle: "Léela. Valórala.",
    rateBody:
      "Al terminar una página, dile a Rediscover si valió tu tiempo. Las selecciones de mañana serán un poco más tuyas.",
    rateAlt: "Rediscover pregunta «¿Ha valido la pena?» al terminar una página",
    saveLabel: "02 / GUARDAR",
    saveTitle: "Guarda sin ordenar.",
    saveBody:
      "Guarda desde el menú Compartir, Safari, Chrome, Atajos o el portapapeles. Rediscover lee cada página, escribe un breve resumen y la clasifica por ti. Sin etiquetas que inventar ni carpetas que mantener.",
    captures: ["Menú Compartir", "Safari", "Chrome", "Atajos", "Portapapeles"],
    jevCredit: "Categorías inteligentes, con la ayuda de Jev.",
    libraryAlt:
      "Una página guardada en la biblioteca de Rediscover con resumen, temas y categoría",
    radarLabel: "03 / RADAR",
    radarTitle: "Lecturas nuevas. Con medida.",
    radarBody:
      "Radar vigila los sitios de los que ya guardas páginas y te muestra novedades en tarjetas. Desliza a la derecha para guardar y a la izquierda para pasar. Aprende de lo que conservas y, tras cinco guardados, da el día por terminado.",
    radarQuote: "Cinco páginas guardadas dan para rato. Radar esperará.",
    radarOpml: "Con Pro, trae tus fuentes mediante importación OPML.",
    sharedLabel: "04 / SHARED",
    sharedTitle: "Shared, para leer juntos.",
    sharedBody:
      "Invita a otras personas a un espacio, comparte enlaces que merezcan una conversación y guarda los mejores en tu propia biblioteca.",
    sharedNote:
      "Unirse a un espacio siempre es gratis. Tu plan determina cuántos espacios puedes crear.",
    sharedAlt: "Espacios compartidos en Rediscover",
    pocketTitle: "¿Vienes de Pocket?",
    pocketBody:
      "Importa tu exportación de Pocket, los marcadores del navegador o un CSV. A partir de mañana, Rediscover empieza a traértelos de vuelta.",
    pocketNote: "Las importaciones están incluidas en Pro.",
    plansEyebrow: "PLANES",
    plansTitle: "Un plan para tu forma de leer.",
    plansIntro:
      "Empieza gratis. Compra Pro una sola vez o suscríbete a Pro+ si quieres IA en la nube sin clave propia.",
    plans: [
      {
        name: "Gratis",
        price: "$0",
        billing: "Conoce Rediscover",
        items: [
          "15 artículos guardados · 3 fuentes Radar",
          "Crea 1 espacio compartido",
          "Cloud Free",
        ],
      },
      {
        name: "Pro",
        price: "$29.99",
        billing: "Compra única · De por vida",
        items: [
          "Artículos guardados y fuentes Radar ilimitados",
          "Importación de Pocket, marcadores y OPML",
          "Sincronización iCloud entre dispositivos",
          "Tu propia clave API de OpenRouter",
          "Crea 3 espacios compartidos",
        ],
      },
      {
        name: "Pro+",
        price: "$5.99 / mes",
        billing: "o $49.99 / año",
        items: [
          "Todas las funciones de Pro",
          "IA en la nube sin clave API propia, con límites de uso más altos",
          "Espacios compartidos ilimitados",
        ],
      },
    ],
    pricingNote:
      "Precios de EE. UU. Tu precio local aparece en el App Store. Se aplican límites de uso en la nube; tu proveedor factura aparte los costes de modelos BYOK.",
    metaTitle: "Rediscover — la app para leer más tarde que te devuelve tus páginas",
    metaDescription:
      "La app para leer más tarde pensada para volver: una, tres o cinco páginas guardadas al día, y Radar para lo nuevo. Una alternativa a Pocket para iPhone, iPad y Mac.",
  },
} satisfies Record<Language, LandingCopy>;
