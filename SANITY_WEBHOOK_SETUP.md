# Sanity Webhook設定ガイド

## 概要
記事を編集・公開した際に自動的にサイトの内容を更新するためのWebhook設定手順です。

## 手順

### 1. 環境変数の設定

Vercelの環境変数に以下を追加してください：

```
SANITY_REVALIDATE_SECRET=your-secret-key-here
```

**注意**: `your-secret-key-here`は強力なランダムな文字列に置き換えてください。

### 2. Sanity Studio でのWebhook設定

1. [Sanity管理画面](https://www.sanity.io/manage)にアクセス
2. プロジェクト「Aisidejob Blog」を選択
3. 左メニューから「API」→「Webhooks」を選択
4. 「Create webhook」をクリック

### 3. Webhook設定項目

以下の設定を入力してください：

- **Name**: `Vercel Revalidate`
- **URL**: `https://your-domain.vercel.app/api/revalidate`
  - 実際のドメインに置き換えてください
- **Trigger on**: 
  - ☑️ Create
  - ☑️ Update
  - ☑️ Delete
- **Filter**: `_type == "post"`
- **Secret**: 手順1で設定した`SANITY_REVALIDATE_SECRET`と同じ値
- **HTTP method**: `POST`
- **API version**: `v2021-06-07`

### 4. テスト方法

1. Sanity Studioで記事を編集・公開
2. Webhookが正常に動作すると、数秒後にサイトに変更が反映されます
3. Vercelの「Functions」タブでWebhookの実行ログを確認できます

## トラブルシューティング

### Webhookが動作しない場合

1. **環境変数の確認**
   - VercelでSANITY_REVALIDATE_SECRETが正しく設定されているか確認

2. **URLの確認**
   - WebhookのURLが正しいVercelドメインになっているか確認

3. **ログの確認**
   - Vercelの「Functions」タブでエラーログを確認

### ISR（Incremental Static Regeneration）について

- **自動更新間隔**: 60秒
- **対象ページ**:
  - 記事詳細ページ (`/blog/[slug]`)
  - ブログ一覧ページ (`/blog`)
  - ホームページ (`/`)

### 手動でのページ更新

Webhookが設定されていない場合でも、60秒間隔でページは自動更新されます。
ただし、即座に反映させたい場合は、記事公開後にVercelで再デプロイを実行してください。

## 注意事項

- Webhookの設定後、初回は数分かかる場合があります
- 大量の記事を一度に更新する場合は、レート制限にご注意ください
- 本番環境とステージング環境で異なるWebhook URLを設定してください