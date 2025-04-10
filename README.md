# 日本語Webフォントショーケース

## 概要

このプロジェクトは、Google Fontsで利用可能な日本語Webフォントを一覧表示し、比較できるウェブアプリケーションです。様々なカテゴリの日本語フォントをプレビューでき、ウェブデザインやプロジェクトに最適なフォントを選択する際に役立ちます。

## 機能

- 50種類以上の日本語Webフォントを表示
- カテゴリ別フィルタリング（ゴシック体/サンセリフ、明朝体/セリフ、手書き風、装飾/ディスプレイ、中国語）
- フォント名による検索機能
- ページネーション機能
- 英語、ひらがな、漢字のサンプルテキスト表示

## 環境セットアップ

### 必要条件

- Node.js 18.0.0以上（推奨: 最新のLTS版）
- npm 8.0.0以上

### Node.jsのインストール

#### Windows

1. [Node.js公式サイト](https://nodejs.org/)から最新のLTSバージョンをダウンロード
2. インストーラを実行し、指示に従ってインストール
3. インストール完了後、コマンドプロンプトで以下のコマンドを実行して確認:
   ```bash
   node -v
   npm -v
   ```

#### macOS

1. Homebrewを使用する場合:
   ```bash
   brew install node
   ```
2. または[Node.js公式サイト](https://nodejs.org/)からインストーラをダウンロード

#### Linux

```bash
# Ubuntuの場合
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# その他のディストリビューションの場合は公式サイトを参照
```

### プロジェクトのセットアップ

1. リポジトリをクローン:
   ```bash
   git clone https://github.com/yourusername/japan-web-font.git
   cd japan-web-font
   ```

2. 依存関係のインストール:
   ```bash
   npm install
   ```

3. 開発環境の起動:
   ```bash
   npm run dev
   ```

4. ブラウザで http://localhost:5173 を開いてアプリケーションを確認

### トラブルシューティング

- `npm install`中にエラーが発生する場合:
  ```bash
  npm cache clean --force
  rm -rf node_modules
  npm install
  ```

- TypeScriptエラーがある場合:
  ```bash
  npm install --save-dev typescript@latest @types/react@latest @types/react-dom@latest
  ```

- Vitaコマンドが見つからない場合、グローバルにインストール:
  ```bash
  npm install -g vite
  ```

## 技術スタック

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Google Fonts API

## 始め方

プロジェクトをローカルで実行するには：

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

ブラウザで http://localhost:5173 を開いてアプリケーションを確認できます。

## フォントの使用方法

表示されているフォントは全てGoogle Fontsから利用可能で、以下の方法で実装できます：

1. HTMLのheadセクションにGoogle Fontsのリンクを追加：
```html
<link href="https://fonts.googleapis.com/css2?family=フォント名&display=swap" rel="stylesheet">
```

2. CSSでフォントを指定：
```css
font-family: 'フォント名', fallback;
```

## ビルド方法

本番環境用のビルドを作成するには：

```bash
npm run build
```

ビルドされたファイルは `dist` ディレクトリに生成されます。

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。フォント自体はGoogle Fontsのライセンスに従います。 