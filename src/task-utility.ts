type Post = {
 id: number;          // id
 title: string;       // タイトル
 body: string;        // 本文
 published: boolean;  // 公開済みかどうか
};

// 編集中の投稿データを表す型
type PostPartial = Partial<Post>;

// 一覧表示用の投稿データを表す型
type PostPick = Pick<Post, 'id' | 'title'>;

// 公開済みの投稿データを表す型
type PostReadonly = Readonly<Post>;

const editPostPartial: PostPartial = {
 title: 'タイトル',
 body: 'タイトル追加しました',
};

const editPostPick: PostPick = {
 id: 123,
 title: 'アプリの開発',
};

const editPostReadonly: PostReadonly = {
 id: 345,
 title: 'タイトル345',
 body: 'タイトル345の本文',
 published: true,
};

console.log('---- 編集中のタスク ----');
console.log(editPostPartial);
console.log('---- 一覧表示用のタスク ----');
console.log(editPostPick);
console.log('---- 完了済みのタスク ----');
console.log(editPostReadonly);