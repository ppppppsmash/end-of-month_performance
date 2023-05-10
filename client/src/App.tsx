import { FC } from 'react';
import './App.css';
import Title from './components/Title';
import Input from './components/Input';

const App: FC = (): JSX.Element => {
  const title = '月末稼動レポート';

  const tasks_percentages = [
    { label: '車買取', time: 0 },
    { label: '車販売', time: 0 },
    { label: '廃車ツヨシ', time: 0 },
    { label: '自動車保険', time: 0 },
    { label: '自動車保険法人', time: 0 },
    { label: '生命保険', time: 0 },
    { label: 'ペット保険', time: 0 },
    { label: '火災保険', time: 0 },
    { label: '保険相談ナビ', time: 0 },
    { label: 'カードローン', time: 0 },
    { label: 'マネーフィックス', time: 0 },
    { label: '火災保険（ネット型）', time: 0 },
    { label: '自動車保険（楽天IP）', time: 0 },
    { label: 'メルマガ・他', time: 0 },
    { label: '引越し', time: 0 },
    { label: 'Living', time: 0 },
    { label: '引越しOSS', time: 0 },
    { label: '引越し大手', time: 0 },
    { label: '生活ストック', time: 0 },
    { label: '電気LP', time: 0 },
    { label: 'エネルギー', time: 0 },
    { label: '通信制高校', time: 0 },
    { label: 'ピアノ買取', time: 0 },
    { label: '不動産売却', time: 0 },
    { label: '結婚', time: 0 },
    { label: 'セキュリティ', time: 0 },
    { label: '老人ホーム', time: 0 },
    { label: '宅配ごはん', time: 0 },
    { label: 'たのめーる', time: 0 },
    { label: '補聴器', time: 0 },
    { label: '全社共通', time: 0 },
  ]

  const tasks_times = [
    { label: '自動車保険', time: 0 },
    { label: 'ペット保険', time: 0 },
    { label: '火災保険', time: 0 },
    { label: '火災保険法人', time: 0 },
    { label: '火災保険（ネット型）', time: 0 },
    { label: '自動車保険（楽天IP）', time: 0 },
    { label: '旅行保険', time: 0 },
    { label: 'ゴルフ保険', time: 0 },
    { label: 'バイク保険', time: 0 },
    { label: 'MyPetsLife', time: 0 },
    { label: 'メルマガ 保険', time: 0 },
    { label: '損害保険見直し本舗', time: 0 },
    { label: '保険その他作業', time: 0 },
  ]

  return (
    <div>
      <Title title={title} />
      <div className="flex flex-wrap w-full space-x-4 items:center mt-8 px-6">
        <div className="flex-1 w-5/12 border border-solid rounded border-black p-8 overflow-x-none h-[90vh] overflow-y-scroll">
          <div className="mb-12">
            <div className="mb-4"><h2 className="text-2xl">業務割合</h2></div>
            <Input tasks={tasks_percentages} />
          </div>
          <div>
            <div className="mb-4"><h2 className="text-2xl">工数</h2></div>
            <Input tasks={tasks_times} />
          </div>
        </div>
        <div className="flex-1 w-5/12 border border-solid rounded border-black p-8">
          <div>
            testtesttesttest
            testtesttesttest
            testtesttesttest
            testtesttesttest
            testtesttesttest
            testtesttesttest
            testtesttesttest
            testtesttesttest
            testtesttesttest
            testtesttesttest
            testtesttesttest
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
