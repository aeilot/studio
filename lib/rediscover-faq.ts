import type { Language } from "./rediscover-languages";

export type Faq = {
  eyebrow: string;
  title: string;
  items: readonly { q: string; a: string }[];
};

export const faq = {
  en: {
    eyebrow: "FAQ",
    title: "Questions, answered.",
    items: [
      {
        q: "What is Rediscover?",
        a: "Rediscover is a read-later app for iPhone, iPad and Mac. You save articles and web pages as usual, and every day Rediscover brings back one, three or five of them to read, so your saved pages don’t sit unread.",
      },
      {
        q: "How is Rediscover different from Pocket, Instapaper and other read-later apps?",
        a: "Most read-later apps focus on saving and leave you with a growing list. Rediscover focuses on coming back: a small daily selection called Today, an optional reminder when it’s ready, and Radar, which finds new writing from sites you already save from and stops after five saves a day.",
      },
      {
        q: "Can I move my library from Pocket, Instapaper or Raindrop?",
        a: "Yes. With Pro, you can import from Pocket (ZIP or CSV), Instapaper, Raindrop.io, Readwise Reader, any CSV file or a browser bookmarks HTML file. On Mac, Safari, Chrome and Edge bookmarks can be imported directly. Imported pages join your Library, and Rediscover starts bringing them back from the next day.",
      },
      {
        q: "Do I need to tag or organize my saved articles?",
        a: "No. Rediscover reads each page, writes a short summary and assigns topics and a category automatically. The optional Smart Discovery and Categories setting, powered by Jev, can refine how pages are categorized.",
      },
      {
        q: "Does Rediscover use Apple Intelligence?",
        a: "Yes. On iPhone, iPad and Mac with Apple Intelligence (iOS 26 or macOS 26 or later, in supported regions), Rediscover writes summaries and organizes categories on-device, without sending page text to a cloud model. It works on every plan, including Free. If you prefer, you can use cloud models through OpenRouter instead.",
      },
      {
        q: "Is Radar an RSS reader?",
        a: "Not exactly. Radar uses RSS and Atom feeds from the sites in your Library, but instead of an unread inbox it shows new pages as cards: swipe right to save, left to pass. It learns from what you save, open and rate, and after five saves it stops for the day. Pro adds OPML import and manual sources.",
      },
      {
        q: "Which devices does Rediscover work on?",
        a: "iPhone, iPad and Mac. The Safari extension comes with the Mac app, and a Chrome extension saves pages to the Mac app. With Pro, iCloud syncs your Library, Radar sources and Today picks across devices.",
      },
      {
        q: "How much does Rediscover cost?",
        a: "Rediscover is free to start, with up to 15 saved articles and 3 Radar sources. Pro is a one-time purchase of $29.99 that removes those limits and adds imports, iCloud sync and your own OpenRouter key. Pro+ costs $5.99 a month or $49.99 a year and adds Cloud AI without your own key. Prices are in US dollars; your local price appears in the App Store.",
      },
      {
        q: "What happens to my data?",
        a: "Your Library is stored on your device and, if you turn on sync, in your own iCloud. Summaries and categories can be generated on-device with Apple Intelligence on compatible devices. If you choose cloud processing, page text is sent through OpenRouter to the model you select. The privacy policy has the details.",
      },
    ],
  },
  "zh-Hans": {
    eyebrow: "常见问题",
    title: "你可能想知道",
    items: [
      {
        q: "Rediscover 是什么？",
        a: "Rediscover 是一款适用于 iPhone、iPad 和 Mac 的稍后读 App。你照常收藏文章和网页，Rediscover 每天从中带回一篇、三篇或五篇，让收藏不再只是躺在列表里。",
      },
      {
        q: "Rediscover 和 Pocket、Instapaper 等稍后读 App 有什么不同？",
        a: "大多数稍后读 App 专注于收藏，留给你一张越来越长的清单。Rediscover 专注于「回来读」：每天一小份精选（Today）、准备好时的可选提醒，以及 Radar——它从你常收藏的网站发现新文章，每天收藏满五篇就停下。",
      },
      {
        q: "可以从 Pocket、Instapaper 或 Raindrop 迁移收藏吗？",
        a: "可以。使用 Pro，你可以从 Pocket（ZIP 或 CSV）、Instapaper、Raindrop.io、Readwise Reader、任意 CSV 文件或浏览器书签 HTML 导入；在 Mac 上还能直接导入 Safari、Chrome 和 Edge 书签。导入的网页会进入资料库，从第二天起，Rediscover 就会开始把它们带回来。",
      },
      {
        q: "需要给收藏打标签或手动整理吗？",
        a: "不需要。Rediscover 会读取每个网页，写好简短摘要，并自动分配主题和分类。可选的「智能发现与分类」由 Jev 提供支持，可以进一步优化分类。",
      },
      {
        q: "Rediscover 支持 Apple 智能吗？",
        a: "支持。在支持 Apple 智能的 iPhone、iPad 和 Mac 上（iOS 26 或 macOS 26 及以上，且所在地区可用），Rediscover 会直接在设备上生成摘要、整理分类，不会把网页内容发送给云端模型。所有方案均可使用，包括免费版。你也可以改用通过 OpenRouter 连接的云端模型。",
      },
      {
        q: "Radar 是 RSS 阅读器吗？",
        a: "不完全是。Radar 使用你资料库中网站的 RSS 和 Atom 订阅源，但它不是未读收件箱，而是把新文章做成卡片：右滑收藏，左滑跳过。它会从你的收藏、打开和评分中学习，收藏满五篇就当天停止。Pro 还支持导入 OPML 和手动添加来源。",
      },
      {
        q: "Rediscover 支持哪些设备？",
        a: "iPhone、iPad 和 Mac。Safari 插件随 Mac App 提供，Chrome 插件可将网页保存到 Mac App。使用 Pro，iCloud 可以在各设备间同步资料库、Radar 来源和 Today 推荐。",
      },
      {
        q: "Rediscover 怎么收费？",
        a: "可以免费开始使用，最多保存 15 篇文章和 3 个 Radar 来源。Pro 一次购买 $29.99，解除上述限制，并提供导入、iCloud 同步和自带 OpenRouter API Key。Pro+ 为每月 $5.99 或每年 $49.99，提供无需自备密钥的云端 AI。以上为美国区价格，当地价格以 App Store 显示为准。",
      },
      {
        q: "我的数据会怎样处理？",
        a: "资料库保存在你的设备上；开启同步后，也会保存在你自己的 iCloud 中。在兼容设备上，摘要和分类可以通过 Apple 智能在本地生成。如果你选择云端处理，网页内容会通过 OpenRouter 发送给你选择的模型。详情请见隐私政策。",
      },
    ],
  },
  "zh-Hant": {
    eyebrow: "常見問題",
    title: "你可能想知道",
    items: [
      {
        q: "Rediscover 是什麼？",
        a: "Rediscover 是一款適用於 iPhone、iPad 和 Mac 的稍後讀 App。你照常收藏文章和網頁，Rediscover 每天從中帶回一篇、三篇或五篇，讓收藏不再只是躺在清單裡。",
      },
      {
        q: "Rediscover 和 Pocket、Instapaper 等稍後讀 App 有什麼不同？",
        a: "大多數稍後讀 App 專注於收藏，留給你一張越來越長的清單。Rediscover 專注於「回來讀」：每天一小份精選（Today）、準備好時的可選提醒，以及 Radar——它從你常收藏的網站發現新文章，每天收藏滿五篇就停下。",
      },
      {
        q: "可以從 Pocket、Instapaper 或 Raindrop 轉移收藏嗎？",
        a: "可以。使用 Pro，你可以從 Pocket（ZIP 或 CSV）、Instapaper、Raindrop.io、Readwise Reader、任意 CSV 檔案或瀏覽器書籤 HTML 匯入；在 Mac 上還能直接匯入 Safari、Chrome 和 Edge 書籤。匯入的網頁會進入資料庫，從隔天起，Rediscover 就會開始把它們帶回來。",
      },
      {
        q: "需要替收藏加標籤或手動整理嗎？",
        a: "不需要。Rediscover 會讀取每個網頁，寫好簡短摘要，並自動分配主題和分類。可選的「智慧探索與分類」由 Jev 提供支援，可以進一步改善分類。",
      },
      {
        q: "Rediscover 支援 Apple Intelligence 嗎？",
        a: "支援。在支援 Apple Intelligence 的 iPhone、iPad 和 Mac 上（iOS 26 或 macOS 26 以上，且所在地區可用），Rediscover 會直接在裝置上產生摘要、整理分類，不會把網頁內容傳送給雲端模型。所有方案皆可使用，包括免費版。你也可以改用透過 OpenRouter 連接的雲端模型。",
      },
      {
        q: "Radar 是 RSS 閱讀器嗎？",
        a: "不完全是。Radar 使用你資料庫中網站的 RSS 和 Atom 訂閱來源，但它不是未讀收件匣，而是把新文章做成卡片：右滑收藏，左滑略過。它會從你的收藏、開啟和評分中學習，收藏滿五篇就當天停止。Pro 還支援匯入 OPML 和手動新增來源。",
      },
      {
        q: "Rediscover 支援哪些裝置？",
        a: "iPhone、iPad 和 Mac。Safari 擴充功能隨 Mac App 提供，Chrome 擴充功能可將網頁儲存到 Mac App。使用 Pro，iCloud 可以在各裝置間同步資料庫、Radar 來源和 Today 推薦。",
      },
      {
        q: "Rediscover 怎麼收費？",
        a: "可以免費開始使用，最多儲存 15 篇文章和 3 個 Radar 來源。Pro 一次購買 $29.99，解除上述限制，並提供匯入、iCloud 同步和自備 OpenRouter API Key。Pro+ 為每月 $5.99 或每年 $49.99，提供無需自備金鑰的雲端 AI。以上為美國區價格，當地價格以 App Store 顯示為準。",
      },
      {
        q: "我的資料會怎麼處理？",
        a: "資料庫儲存在你的裝置上；開啟同步後，也會儲存在你自己的 iCloud 中。在相容裝置上，摘要和分類可以透過 Apple Intelligence 在本機產生。如果你選擇雲端處理，網頁內容會透過 OpenRouter 傳送給你選擇的模型。詳情請見隱私權政策。",
      },
    ],
  },
  ja: {
    eyebrow: "よくある質問",
    title: "よくある質問",
    items: [
      {
        q: "Rediscoverとは何ですか？",
        a: "RediscoverはiPhone、iPad、Mac向けの「あとで読む」アプリです。いつもどおり記事やWebページを保存すると、毎日その中から1件、3件、または5件を届け直すので、保存したページが読まれないまま眠ることがありません。",
      },
      {
        q: "Pocket、Instapaperなどの「あとで読む」アプリとの違いは？",
        a: "多くの「あとで読む」アプリは保存が中心で、リストは増える一方です。Rediscoverは読み返すことが中心です。毎日の小さなセレクション「Today」、準備ができたときの任意のリマインダー、そしてよく保存するサイトから新しい記事を見つけ、1日5件保存すると止まるRadarがあります。",
      },
      {
        q: "Pocket、Instapaper、Raindropからライブラリを移せますか？",
        a: "はい。Proでは、Pocket（ZIPまたはCSV）、Instapaper、Raindrop.io、Readwise Reader、CSVファイル、ブラウザのブックマークHTMLから読み込めます。Macでは、Safari、Chrome、Edgeのブックマークを直接取り込めます。読み込んだページはライブラリに加わり、翌日からRediscoverが届け始めます。",
      },
      {
        q: "保存した記事にタグを付けたり整理したりする必要はありますか？",
        a: "いいえ。Rediscoverが各ページを読み、短い要約を書き、トピックとカテゴリを自動で割り当てます。任意の「スマートな発見と分類」（Jev搭載）をオンにすると、分類をさらに調整できます。",
      },
      {
        q: "RediscoverはApple Intelligenceに対応していますか？",
        a: "はい。Apple Intelligenceに対応したiPhone、iPad、Mac（iOS 26またはmacOS 26以降、対応地域）では、要約の作成とカテゴリの整理を端末上で行い、ページの本文をクラウドのモデルに送信しません。無料を含むすべてのプランで使えます。OpenRouter経由のクラウドモデルを選ぶこともできます。",
      },
      {
        q: "RadarはRSSリーダーですか？",
        a: "少し違います。RadarはライブラリにあるサイトのRSSやAtomフィードを使いますが、未読の受信箱ではなく、新しいページをカードで表示します。右にスワイプで保存、左でスキップ。保存、閲覧、評価から学び、5件保存するとその日は止まります。ProではOPMLの読み込みと手動でのソース追加ができます。",
      },
      {
        q: "どのデバイスで使えますか？",
        a: "iPhone、iPad、Macです。Safari拡張機能はMacアプリに付属し、Chrome拡張機能でページをMacアプリに保存できます。Proでは、iCloudでライブラリ、Radarのソース、今日のおすすめをデバイス間で同期できます。",
      },
      {
        q: "料金はいくらですか？",
        a: "無料で始められ、記事15件とRadarのソース3件まで保存できます。Proは29.99ドルの買い切りで、制限がなくなり、読み込み、iCloud同期、自分のOpenRouterキーの利用が加わります。Pro+は月額5.99ドルまたは年額49.99ドルで、自分のキーなしでCloud AIを使えます。価格は米ドルです。お住まいの地域の価格はApp Storeに表示されます。",
      },
      {
        q: "データはどのように扱われますか？",
        a: "ライブラリはデバイスに保存され、同期をオンにするとあなた自身のiCloudにも保存されます。対応デバイスでは、要約と分類をApple Intelligenceでデバイス上で生成できます。クラウド処理を選ぶと、ページの本文はOpenRouterを通じて選択したモデルに送信されます。詳しくはプライバシーポリシーをご覧ください。",
      },
    ],
  },
  ko: {
    eyebrow: "자주 묻는 질문",
    title: "자주 묻는 질문",
    items: [
      {
        q: "Rediscover는 어떤 앱인가요?",
        a: "Rediscover는 iPhone, iPad, Mac용 나중에 읽기 앱입니다. 평소처럼 기사와 웹 페이지를 저장하면, 매일 그중 한 편, 세 편 또는 다섯 편을 다시 가져와 저장한 글이 읽히지 않은 채 남지 않게 합니다.",
      },
      {
        q: "Pocket, Instapaper 같은 나중에 읽기 앱과 무엇이 다른가요?",
        a: "대부분의 나중에 읽기 앱은 저장에 집중해 목록만 계속 늘어납니다. Rediscover는 다시 읽기에 집중합니다. 매일의 작은 선별인 Today, 준비되면 알려 주는 선택형 알림, 그리고 자주 저장하는 사이트에서 새 글을 찾아 하루 다섯 편을 저장하면 멈추는 Radar가 있습니다.",
      },
      {
        q: "Pocket, Instapaper, Raindrop의 라이브러리를 옮길 수 있나요?",
        a: "네. Pro에서는 Pocket(ZIP 또는 CSV), Instapaper, Raindrop.io, Readwise Reader, CSV 파일 또는 브라우저 북마크 HTML에서 가져올 수 있습니다. Mac에서는 Safari, Chrome, Edge 북마크를 바로 가져올 수 있습니다. 가져온 페이지는 라이브러리에 추가되고, 다음 날부터 Rediscover가 다시 가져오기 시작합니다.",
      },
      {
        q: "저장한 글에 태그를 달거나 정리해야 하나요?",
        a: "아니요. Rediscover가 각 페이지를 읽고, 짧은 요약을 쓰고, 주제와 카테고리를 자동으로 지정합니다. 선택 사항인 스마트 발견 및 분류(Jev 지원)를 켜면 분류를 더 다듬을 수 있습니다.",
      },
      {
        q: "Rediscover는 Apple Intelligence를 지원하나요?",
        a: "네. Apple Intelligence를 지원하는 iPhone, iPad, Mac(iOS 26 또는 macOS 26 이상, 지원 지역)에서는 요약 작성과 카테고리 정리를 기기에서 처리하며, 페이지 본문을 클라우드 모델로 보내지 않습니다. 무료를 포함한 모든 요금제에서 사용할 수 있습니다. 원하면 OpenRouter를 통한 클라우드 모델을 대신 사용할 수도 있습니다.",
      },
      {
        q: "Radar는 RSS 리더인가요?",
        a: "조금 다릅니다. Radar는 라이브러리에 있는 사이트의 RSS와 Atom 피드를 사용하지만, 읽지 않은 글 목록 대신 새 페이지를 카드로 보여 줍니다. 오른쪽으로 밀면 저장, 왼쪽으로 밀면 넘기기. 저장, 열람, 평가에서 배우고, 다섯 편을 저장하면 그날은 멈춥니다. Pro에서는 OPML 가져오기와 소스 직접 추가가 가능합니다.",
      },
      {
        q: "어떤 기기에서 사용할 수 있나요?",
        a: "iPhone, iPad, Mac입니다. Safari 확장 프로그램은 Mac 앱에 포함되어 있고, Chrome 확장 프로그램으로 페이지를 Mac 앱에 저장할 수 있습니다. Pro에서는 iCloud로 라이브러리, Radar 소스, Today 추천을 기기 간에 동기화합니다.",
      },
      {
        q: "가격은 얼마인가요?",
        a: "무료로 시작할 수 있으며 기사 15개와 Radar 소스 3개까지 저장할 수 있습니다. Pro는 29.99달러 한 번 구매로 제한이 없어지고 가져오기, iCloud 동기화, 개인 OpenRouter 키 사용이 추가됩니다. Pro+는 월 5.99달러 또는 연 49.99달러로, 개인 키 없이 Cloud AI를 사용할 수 있습니다. 가격은 미국 달러 기준이며 지역 가격은 App Store에 표시됩니다.",
      },
      {
        q: "내 데이터는 어떻게 처리되나요?",
        a: "라이브러리는 기기에 저장되며, 동기화를 켜면 본인의 iCloud에도 저장됩니다. 호환 기기에서는 Apple Intelligence로 요약과 분류를 기기에서 생성할 수 있습니다. 클라우드 처리를 선택하면 페이지 본문이 OpenRouter를 통해 선택한 모델로 전송됩니다. 자세한 내용은 개인정보 처리방침을 확인하세요.",
      },
    ],
  },
  fr: {
    eyebrow: "FAQ",
    title: "Vos questions, nos réponses.",
    items: [
      {
        q: "Qu’est-ce que Rediscover ?",
        a: "Rediscover est une app de lecture différée pour iPhone, iPad et Mac. Vous enregistrez articles et pages web comme d’habitude, et chaque jour Rediscover vous en rapporte une, trois ou cinq à lire, pour que vos pages enregistrées ne restent pas oubliées.",
      },
      {
        q: "En quoi Rediscover diffère-t-il de Pocket, Instapaper et des autres apps de lecture différée ?",
        a: "La plupart des apps de lecture différée se concentrent sur l’enregistrement et vous laissent une liste qui grossit. Rediscover se concentre sur le retour : une petite sélection quotidienne appelée Today, un rappel facultatif quand elle est prête, et Radar, qui trouve de nouveaux articles sur les sites que vous enregistrez déjà et s’arrête après cinq enregistrements par jour.",
      },
      {
        q: "Puis-je transférer ma bibliothèque depuis Pocket, Instapaper ou Raindrop ?",
        a: "Oui. Avec Pro, vous pouvez importer depuis Pocket (ZIP ou CSV), Instapaper, Raindrop.io, Readwise Reader, n’importe quel fichier CSV ou un fichier HTML de favoris. Sur Mac, les favoris de Safari, Chrome et Edge s’importent directement. Les pages importées rejoignent votre bibliothèque, et Rediscover commence à vous les rapporter dès le lendemain.",
      },
      {
        q: "Dois-je étiqueter ou classer mes articles enregistrés ?",
        a: "Non. Rediscover lit chaque page, rédige un court résumé et attribue automatiquement des sujets et une catégorie. Le réglage facultatif Découverte et catégories intelligentes, propulsé par Jev, peut affiner le classement.",
      },
      {
        q: "Rediscover utilise-t-il Apple Intelligence ?",
        a: "Oui. Sur les iPhone, iPad et Mac compatibles avec Apple Intelligence (iOS 26 ou macOS 26 et versions ultérieures, dans les régions prises en charge), Rediscover rédige les résumés et organise les catégories sur l’appareil, sans envoyer le texte des pages à un modèle cloud. C’est disponible dans toutes les formules, y compris Gratuit. Vous pouvez aussi choisir des modèles cloud via OpenRouter.",
      },
      {
        q: "Radar est-il un lecteur RSS ?",
        a: "Pas exactement. Radar utilise les flux RSS et Atom des sites de votre bibliothèque, mais au lieu d’une boîte de non-lus, il présente les nouvelles pages sous forme de cartes : glissez à droite pour enregistrer, à gauche pour passer. Il apprend de ce que vous enregistrez, ouvrez et notez, et s’arrête pour la journée après cinq enregistrements. Pro ajoute l’import OPML et l’ajout manuel de sources.",
      },
      {
        q: "Sur quels appareils Rediscover fonctionne-t-il ?",
        a: "iPhone, iPad et Mac. L’extension Safari est fournie avec l’app Mac, et une extension Chrome enregistre les pages dans l’app Mac. Avec Pro, iCloud synchronise votre bibliothèque, vos sources Radar et vos sélections Today entre vos appareils.",
      },
      {
        q: "Combien coûte Rediscover ?",
        a: "Rediscover est gratuit pour commencer, avec jusqu’à 15 articles enregistrés et 3 sources Radar. Pro est un achat unique de 29,99 $ qui supprime ces limites et ajoute les imports, la synchronisation iCloud et votre propre clé OpenRouter. Pro+ coûte 5,99 $ par mois ou 49,99 $ par an et ajoute l’IA cloud sans clé personnelle. Les prix sont en dollars américains ; le prix local s’affiche dans l’App Store.",
      },
      {
        q: "Que deviennent mes données ?",
        a: "Votre bibliothèque est stockée sur votre appareil et, si vous activez la synchronisation, dans votre propre iCloud. Les résumés et catégories peuvent être générés sur l’appareil avec Apple Intelligence sur les appareils compatibles. Si vous choisissez le traitement cloud, le texte des pages est envoyé via OpenRouter au modèle choisi. La politique de confidentialité donne tous les détails.",
      },
    ],
  },
  de: {
    eyebrow: "FAQ",
    title: "Häufige Fragen.",
    items: [
      {
        q: "Was ist Rediscover?",
        a: "Rediscover ist eine Später-lesen-App für iPhone, iPad und Mac. Du speicherst Artikel und Webseiten wie gewohnt, und jeden Tag bringt Rediscover eine, drei oder fünf davon zum Lesen zurück, damit deine gespeicherten Seiten nicht ungelesen liegen bleiben.",
      },
      {
        q: "Was unterscheidet Rediscover von Pocket, Instapaper und anderen Später-lesen-Apps?",
        a: "Die meisten Später-lesen-Apps konzentrieren sich aufs Speichern und hinterlassen eine wachsende Liste. Rediscover konzentriert sich aufs Zurückkommen: eine kleine tägliche Auswahl namens Today, eine optionale Erinnerung, wenn sie bereit ist, und Radar, das neue Texte von Websites findet, von denen du schon speicherst, und nach fünf gespeicherten Seiten am Tag aufhört.",
      },
      {
        q: "Kann ich meine Bibliothek von Pocket, Instapaper oder Raindrop umziehen?",
        a: "Ja. Mit Pro importierst du aus Pocket (ZIP oder CSV), Instapaper, Raindrop.io, Readwise Reader, beliebigen CSV-Dateien oder einer Lesezeichen-HTML-Datei. Auf dem Mac lassen sich Safari-, Chrome- und Edge-Lesezeichen direkt übernehmen. Importierte Seiten landen in deiner Bibliothek, und ab dem nächsten Tag bringt Rediscover sie dir zurück.",
      },
      {
        q: "Muss ich gespeicherte Artikel taggen oder sortieren?",
        a: "Nein. Rediscover liest jede Seite, schreibt eine kurze Zusammenfassung und vergibt automatisch Themen und eine Kategorie. Die optionale Einstellung Intelligente Entdeckung und Kategorien, unterstützt von Jev, kann die Einordnung weiter verfeinern.",
      },
      {
        q: "Nutzt Rediscover Apple Intelligence?",
        a: "Ja. Auf iPhone, iPad und Mac mit Apple Intelligence (iOS 26 oder macOS 26 und neuer, in unterstützten Regionen) schreibt Rediscover Zusammenfassungen und ordnet Kategorien direkt auf dem Gerät, ohne Seitentext an ein Cloud-Modell zu senden. Das funktioniert in jedem Tarif, auch in Kostenlos. Wenn du möchtest, kannst du stattdessen Cloud-Modelle über OpenRouter nutzen.",
      },
      {
        q: "Ist Radar ein RSS-Reader?",
        a: "Nicht ganz. Radar nutzt RSS- und Atom-Feeds der Websites in deiner Bibliothek, zeigt neue Seiten aber nicht als ungelesenen Posteingang, sondern als Karten: nach rechts wischen zum Speichern, nach links zum Überspringen. Es lernt aus dem, was du speicherst, öffnest und bewertest, und hört nach fünf gespeicherten Seiten für den Tag auf. Pro bietet zusätzlich OPML-Import und manuelle Quellen.",
      },
      {
        q: "Auf welchen Geräten läuft Rediscover?",
        a: "Auf iPhone, iPad und Mac. Die Safari-Erweiterung ist in der Mac-App enthalten, und eine Chrome-Erweiterung speichert Seiten in der Mac-App. Mit Pro synchronisiert iCloud deine Bibliothek, Radar-Quellen und Today-Auswahl zwischen deinen Geräten.",
      },
      {
        q: "Was kostet Rediscover?",
        a: "Rediscover ist zum Start kostenlos, mit bis zu 15 gespeicherten Artikeln und 3 Radar-Quellen. Pro ist ein Einmalkauf für 29,99 $, der diese Grenzen aufhebt und Importe, iCloud-Synchronisierung und deinen eigenen OpenRouter-Schlüssel ergänzt. Pro+ kostet 5,99 $ im Monat oder 49,99 $ im Jahr und bietet Cloud-KI ohne eigenen Schlüssel. Die Preise sind in US-Dollar; deinen lokalen Preis siehst du im App Store.",
      },
      {
        q: "Was passiert mit meinen Daten?",
        a: "Deine Bibliothek wird auf deinem Gerät gespeichert und, wenn du die Synchronisierung aktivierst, in deinem eigenen iCloud. Zusammenfassungen und Kategorien können auf kompatiblen Geräten mit Apple Intelligence direkt auf dem Gerät erstellt werden. Wenn du Cloud-Verarbeitung wählst, wird der Seitentext über OpenRouter an das gewählte Modell gesendet. Details stehen in der Datenschutzerklärung.",
      },
    ],
  },
  es: {
    eyebrow: "PREGUNTAS FRECUENTES",
    title: "Preguntas frecuentes.",
    items: [
      {
        q: "¿Qué es Rediscover?",
        a: "Rediscover es una app para leer más tarde en iPhone, iPad y Mac. Guardas artículos y páginas web como siempre, y cada día Rediscover te trae de vuelta una, tres o cinco para leer, para que lo que guardas no se quede sin leer.",
      },
      {
        q: "¿En qué se diferencia Rediscover de Pocket, Instapaper y otras apps para leer más tarde?",
        a: "La mayoría de las apps para leer más tarde se centran en guardar y te dejan una lista que no deja de crecer. Rediscover se centra en volver: una pequeña selección diaria llamada Today, un recordatorio opcional cuando está lista y Radar, que encuentra textos nuevos de los sitios de los que ya guardas páginas y se detiene tras cinco guardados al día.",
      },
      {
        q: "¿Puedo pasar mi biblioteca desde Pocket, Instapaper o Raindrop?",
        a: "Sí. Con Pro puedes importar desde Pocket (ZIP o CSV), Instapaper, Raindrop.io, Readwise Reader, cualquier archivo CSV o un HTML de marcadores. En Mac, los marcadores de Safari, Chrome y Edge se importan directamente. Las páginas importadas se suman a tu biblioteca, y a partir del día siguiente Rediscover empieza a traértelas de vuelta.",
      },
      {
        q: "¿Tengo que etiquetar u ordenar mis artículos guardados?",
        a: "No. Rediscover lee cada página, escribe un breve resumen y asigna temas y una categoría automáticamente. El ajuste opcional Descubrimiento y categorías inteligentes, con la ayuda de Jev, puede afinar la clasificación.",
      },
      {
        q: "¿Rediscover usa Apple Intelligence?",
        a: "Sí. En iPhone, iPad y Mac compatibles con Apple Intelligence (iOS 26 o macOS 26 o posterior, en regiones compatibles), Rediscover escribe los resúmenes y organiza las categorías en el dispositivo, sin enviar el texto de las páginas a un modelo en la nube. Funciona en todos los planes, incluido Gratis. Si lo prefieres, puedes usar modelos en la nube a través de OpenRouter.",
      },
      {
        q: "¿Radar es un lector RSS?",
        a: "No exactamente. Radar usa los feeds RSS y Atom de los sitios de tu biblioteca, pero en lugar de una bandeja de no leídos muestra las páginas nuevas como tarjetas: desliza a la derecha para guardar y a la izquierda para pasar. Aprende de lo que guardas, abres y valoras, y tras cinco guardados se detiene por hoy. Pro añade la importación OPML y las fuentes manuales.",
      },
      {
        q: "¿En qué dispositivos funciona Rediscover?",
        a: "En iPhone, iPad y Mac. La extensión de Safari viene con la app de Mac, y una extensión de Chrome guarda páginas en la app de Mac. Con Pro, iCloud sincroniza tu biblioteca, tus fuentes de Radar y tus selecciones de Today entre dispositivos.",
      },
      {
        q: "¿Cuánto cuesta Rediscover?",
        a: "Rediscover es gratis para empezar, con hasta 15 artículos guardados y 3 fuentes de Radar. Pro es una compra única de 29,99 $ que elimina esos límites y añade importaciones, sincronización con iCloud y tu propia clave de OpenRouter. Pro+ cuesta 5,99 $ al mes o 49,99 $ al año y añade IA en la nube sin clave propia. Los precios están en dólares estadounidenses; tu precio local aparece en el App Store.",
      },
      {
        q: "¿Qué pasa con mis datos?",
        a: "Tu biblioteca se guarda en tu dispositivo y, si activas la sincronización, en tu propio iCloud. Los resúmenes y las categorías pueden generarse en el dispositivo con Apple Intelligence en los dispositivos compatibles. Si eliges el procesamiento en la nube, el texto de las páginas se envía a través de OpenRouter al modelo que elijas. La política de privacidad tiene los detalles.",
      },
    ],
  },
} satisfies Record<Language, Faq>;
