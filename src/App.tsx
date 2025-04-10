import React, { useState, useEffect } from 'react';
import { Search, Type } from 'lucide-react';

// Extended Japanese web font list
const fonts = [
  // Sans-serif / Gothic
  { name: 'Noto Sans JP', category: 'ゴシック体/サンセリフ', import: "'Noto Sans JP', sans-serif" },
  { name: 'M PLUS 1', category: 'ゴシック体/サンセリフ', import: "'M PLUS 1', sans-serif" },
  { name: 'M PLUS 1p', category: 'ゴシック体/サンセリフ', import: "'M PLUS 1p', sans-serif" },
  { name: 'M PLUS 1 Code', category: 'ゴシック体/サンセリフ', import: "'M PLUS 1 Code', sans-serif" },
  { name: 'M PLUS 2', category: 'ゴシック体/サンセリフ', import: "'M PLUS 2', sans-serif" },
  { name: 'M PLUS Rounded 1c', category: 'ゴシック体/サンセリフ', import: "'M PLUS Rounded 1c', sans-serif" },
  { name: 'BIZ UDGothic', category: 'ゴシック体/サンセリフ', import: "'BIZ UDGothic', sans-serif" },
  { name: 'BIZ UDPGothic', category: 'ゴシック体/サンセリフ', import: "'BIZ UDPGothic', sans-serif" },
  { name: 'Zen Kaku Gothic New', category: 'ゴシック体/サンセリフ', import: "'Zen Kaku Gothic New', sans-serif" },
  { name: 'Zen Kaku Gothic Antique', category: 'ゴシック体/サンセリフ', import: "'Zen Kaku Gothic Antique', sans-serif" },
  { name: 'Zen Maru Gothic', category: 'ゴシック体/サンセリフ', import: "'Zen Maru Gothic', sans-serif" },
  { name: 'Kosugi', category: 'ゴシック体/サンセリフ', import: "'Kosugi', sans-serif" },
  { name: 'Kosugi Maru', category: 'ゴシック体/サンセリフ', import: "'Kosugi Maru', sans-serif" },
  { name: 'Sawarabi Gothic', category: 'ゴシック体/サンセリフ', import: "'Sawarabi Gothic', sans-serif" },
  { name: 'Kiwi Maru', category: 'ゴシック体/サンセリフ', import: "'Kiwi Maru', serif" },
  { name: 'Mochiy Pop One', category: 'ゴシック体/サンセリフ', import: "'Mochiy Pop One', sans-serif" },
  { name: 'Mochiy Pop P One', category: 'ゴシック体/サンセリフ', import: "'Mochiy Pop P One', sans-serif" },
  { name: 'Yuji Syuku', category: 'ゴシック体/サンセリフ', import: "'Yuji Syuku', serif" },
  { name: 'DotGothic16', category: 'ゴシック体/サンセリフ', import: "'DotGothic16', sans-serif" },

  // Serif / Mincho
  { name: 'Noto Serif JP', category: '明朝体/セリフ', import: "'Noto Serif JP', serif" },
  { name: 'Shippori Mincho', category: '明朝体/セリフ', import: "'Shippori Mincho', serif" },
  { name: 'Shippori Mincho B1', category: '明朝体/セリフ', import: "'Shippori Mincho B1', serif" },
  { name: 'Zen Old Mincho', category: '明朝体/セリフ', import: "'Zen Old Mincho', serif" },
  { name: 'Sawarabi Mincho', category: '明朝体/セリフ', import: "'Sawarabi Mincho', serif" },
  { name: 'Yuji Mai', category: '明朝体/セリフ', import: "'Yuji Mai', serif" },
  { name: 'Yuji Boku', category: '明朝体/セリフ', import: "'Yuji Boku', serif" },

  // Handwriting style
  { name: 'Yomogi', category: '手書き風', import: "'Yomogi', cursive" },
  { name: 'Zen Kurenaido', category: '手書き風', import: "'Zen Kurenaido', sans-serif" },
  { name: 'Kaisei Decol', category: '手書き風', import: "'Kaisei Decol', serif" },
  { name: 'Kaisei Opti', category: '手書き風', import: "'Kaisei Opti', serif" },
  { name: 'Kaisei Tokumin', category: '手書き風', import: "'Kaisei Tokumin', serif" },
  { name: 'Kaisei HarunoUmi', category: '手書き風', import: "'Kaisei HarunoUmi', serif" },
  { name: 'Stick', category: '手書き風', import: "'Stick', sans-serif" },
  { name: 'Reggae One', category: '手書き風', import: "'Reggae One', cursive" },
  { name: 'Potta One', category: '手書き風', import: "'Potta One', cursive" },
  { name: 'Hachi Maru Pop', category: '手書き風', import: "'Hachi Maru Pop', cursive" },
  { name: 'RocknRoll One', category: '手書き風', import: "'RocknRoll One', sans-serif" },
  { name: 'New Tegomin', category: '手書き風', import: "'New Tegomin', serif" },
  { name: 'Yusei Magic', category: '手書き風', import: "'Yusei Magic', sans-serif" },
  { name: 'Cherry Bomb One', category: '手書き風', import: "'Cherry Bomb One', cursive" },

  // Decorative
  { name: 'Dela Gothic One', category: '装飾/ディスプレイ', import: "'Dela Gothic One', cursive" },
  { name: 'Train One', category: '装飾/ディスプレイ', import: "'Train One', cursive" },
  { name: 'Palette Mosaic', category: '装飾/ディスプレイ', import: "'Palette Mosaic', cursive" },
  { name: 'Rampart One', category: '装飾/ディスプレイ', import: "'Rampart One', cursive" },

  // Chinese style
  { name: 'ZCOOL QingKe HuangYou', category: '中国語', import: "'ZCOOL QingKe HuangYou', cursive" },
  { name: 'ZCOOL XiaoWei', category: '中国語', import: "'ZCOOL XiaoWei', serif" },
  { name: 'Ma Shan Zheng', category: '中国語', import: "'Ma Shan Zheng', cursive" },
  { name: 'Zhi Mang Xing', category: '中国語', import: "'Zhi Mang Xing', cursive" },
  { name: 'Long Cang', category: '中国語', import: "'Long Cang', cursive" },
  { name: 'Liu Jian Mao Cao', category: '中国語', import: "'Liu Jian Mao Cao', cursive" },
  { name: 'Noto Serif SC', category: '中国語', import: "'Noto Serif SC', serif" },
  { name: 'Noto Sans SC', category: '中国語', import: "'Noto Sans SC', sans-serif" },
];

function App() {
  const [currentCategory, setCurrentCategory] = useState('all');
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const fontsPerPage = 10;

  useEffect(() => {
    // Create a style element to import all the fonts at once
    const style = document.createElement('style');
    const fontImports = fonts.map(font => 
      `@import url('https://fonts.googleapis.com/css2?family=${font.name.replace(/ /g, '+')}:wght@400;700&display=swap');`
    ).join('\n');
    
    style.textContent = fontImports;
    document.head.appendChild(style);
    
    // Set a timer to ensure fonts are loaded
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2000);
    
    return () => {
      clearTimeout(timer);
      document.head.removeChild(style);
    };
  }, []);

  const categories = ['all', 'ゴシック体/サンセリフ', '明朝体/セリフ', '手書き風', '装飾/ディスプレイ', '中国語'];

  const filteredFonts = fonts
    .filter(font => currentCategory === 'all' || font.category === currentCategory)
    .filter(font => 
      searchTerm === '' || 
      font.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      font.category.includes(searchTerm)
    );

  const indexOfLastFont = page * fontsPerPage;
  const indexOfFirstFont = indexOfLastFont - fontsPerPage;
  const currentFonts = filteredFonts.slice(indexOfFirstFont, indexOfLastFont);
  const totalPages = Math.ceil(filteredFonts.length / fontsPerPage);

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-2">
            <Type className="w-8 h-8" />
            Web Font Showcase
          </h1>
          <p className="text-xl">フォントを読み込み中...</p>
          <p className="mt-2 text-gray-600">大量のフォントを読み込んでいます。少々お待ちください...</p>
          <div className="mt-4 w-16 h-16 border-t-4 border-purple-500 border-solid rounded-full animate-spin mx-auto"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-2">
            <Type className="w-8 h-8" />
            Web Font Showcase
          </h1>
          <p className="text-gray-600 mb-8">
            日本語Webフォント大規模比較
          </p>

          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => {
                  setCurrentCategory(category);
                  setPage(1);
                }}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  currentCategory === category 
                    ? 'bg-purple-600 text-white shadow-md' 
                    : 'bg-white text-gray-700 hover:bg-purple-100'
                }`}
              >
                {category === 'all' ? 'すべて' : category}
              </button>
            ))}
          </div>

          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="フォント名を検索..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setPage(1);
              }}
            />
          </div>
        </header>

        <div className="mb-4 text-sm text-gray-600">
          表示: {filteredFonts.length} フォント中 {indexOfFirstFont+1}-{Math.min(indexOfLastFont, filteredFonts.length)}
        </div>

        <div className="overflow-x-auto bg-white rounded-xl shadow-lg">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  フォント名
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  カテゴリー
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  English
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ひらがな
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  漢字
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentFonts.map((font, index) => (
                <tr
                  key={font.name}
                  className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {font.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {font.category}
                  </td>
                  <td
                    className="px-6 py-4 whitespace-nowrap text-xl"
                    style={{ fontFamily: font.import }}
                  >
                    Sakura Rin
                  </td>
                  <td
                    className="px-6 py-4 whitespace-nowrap text-xl"
                    style={{ fontFamily: font.import }}
                  >
                    さくらりん
                  </td>
                  <td
                    className="px-6 py-4 whitespace-nowrap text-xl"
                    style={{ fontFamily: font.import }}
                  >
                    櫻凛
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex justify-between items-center">
          <button 
            onClick={() => setPage(prev => Math.max(prev - 1, 1))}
            disabled={page === 1}
            className={`px-6 py-2 rounded-lg transition-colors ${
              page === 1 
                ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
                : 'bg-purple-600 text-white hover:bg-purple-700'
            }`}
          >
            前へ
          </button>
          
          <div className="text-gray-700">
            {page} / {totalPages} ページ
          </div>
          
          <button 
            onClick={() => setPage(prev => Math.min(prev + 1, totalPages))}
            disabled={page === totalPages}
            className={`px-6 py-2 rounded-lg transition-colors ${
              page === totalPages 
                ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
                : 'bg-purple-600 text-white hover:bg-purple-700'
            }`}
          >
            次へ
          </button>
        </div>

        <div className="mt-8 p-6 bg-white rounded-xl shadow-lg">
          <h2 className="text-xl font-bold mb-4">フォント利用に関する注意点:</h2>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center">
              <span className="mr-2">•</span>
              上記のフォントはすべてGoogle Fontsから取得できます
            </li>
            <li className="flex items-center">
              <span className="mr-2">•</span>
              サンプルテキスト: Sakura Rin / さくらりん / 櫻凛
            </li>
            <li className="flex items-center">
              <span className="mr-2">•</span>
              使用方法: <code className="mx-2 px-2 py-1 bg-gray-100 rounded">@import url('https://fonts.googleapis.com/css2?family=フォント名&display=swap');</code>
            </li>
            <li className="flex items-center">
              <span className="mr-2">•</span>
              CSS: <code className="mx-2 px-2 py-1 bg-gray-100 rounded">font-family: 'フォント名', fallback;</code>
            </li>
            <li className="flex items-center">
              <span className="mr-2">•</span>
              グラフィックレコーディングに最適なフォント: Yomogi, Zen Kurenaido, Kaisei Decol, Hachi Maru Pop
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;