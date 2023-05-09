import { FC } from 'react';
import './App.css';
import { Tasks } from './types'
import Input from './components/Input'

const App: FC = (): JSX.Element => {
  const tasks = [
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


  return (
    <div className="mx-auto">
      <div className="mt-6 space-y-6">
        <Input tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
