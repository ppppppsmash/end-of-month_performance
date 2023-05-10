import { FC, useState } from 'react';
import './App.css';
import { PieChart, Pie, Legend, Tooltip, Cell } from 'recharts';
import Title from './components/Title';
import Input from './components/Input';

const App: FC = (): JSX.Element => {
  const title = '月末稼動レポート';

  const [tasksPercentages, setTasksPercentages] = useState([
    { label: '車買取', time: '' },
    { label: '車販売', time: '' },
    { label: '廃車ツヨシ', time: '' },
    { label: '自動車保険', time: '' },
    { label: '自動車保険法人', time: '' },
    { label: '生命保険', time: '' },
    { label: 'ペット保険', time: '' },
    { label: '火災保険', time: '' },
    { label: '保険相談ナビ', time: '' },
    { label: 'カードローン', time: '' },
    { label: 'マネーフィックス', time: '' },
    { label: '火災保険（ネット型）', time: '' },
    { label: '自動車保険（楽天IP）', time: '' },
    { label: 'メルマガ・他', time: '' },
    { label: '引越し', time: '' },
    { label: 'Living', time: '' },
    { label: '引越しOSS', time: '' },
    { label: '引越し大手', time: '' },
    { label: '生活ストック', time: '' },
    { label: '電気LP', time: '' },
    { label: 'エネルギー', time: '' },
    { label: '通信制高校', time: '' },
    { label: 'ピアノ買取', time: '' },
    { label: '不動産売却', time: '' },
    { label: '結婚', time: '' },
    { label: 'セキュリティ', time: '' },
    { label: '老人ホーム', time: '' },
    { label: '宅配ごはん', time: '' },
    { label: 'たのめーる', time: '' },
    { label: '補聴器', time: '' },
    { label: '全社共通', time: '' },
  ]);
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const data = tasksPercentages.map((task, index) => ({
    name: task.label,
    value: Number(task.time),
    color: COLORS[index % COLORS.length],
  }));


  console.log(tasksPercentages)

  const handlePercentageChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newTime = event.target.value;
    setTasksPercentages((prevTasks) =>
      prevTasks.map((task, i) => {
        if (i === index) {
          return { ...task, time: newTime };
        }
        return task;
      })
    );
  };

  const [tasksTimes, setTasksTimes] = useState([
    { label: '自動車保険', time: '' },
    { label: 'ペット保険', time: '' },
    { label: '火災保険', time: '' },
    { label: '火災保険法人', time: '' },
    { label: '火災保険（ネット型）', time: '' },
    { label: '自動車保険（楽天IP）', time: '' },
    { label: '旅行保険', time: '' },
    { label: 'ゴルフ保険', time: '' },
    { label: 'バイク保険', time: '' },
    { label: 'MyPetsLife', time: '' },
    { label: 'メルマガ 保険', time: '' },
    { label: '損害保険見直し本舗', time: '' },
    { label: '保険その他作業', time: '' },
  ])

  return (
    <div>
      <Title title={title} />
      <div className="flex flex-wrap w-full space-x-4 items:center mt-8 px-6">
        <div className="flex-1 w-5/12 border border-solid rounded border-black p-8 overflow-x-none h-[90vh] overflow-y-scroll">
          <div className="mb-12">
            <div className="mb-4"><h2 className="text-2xl">業務割合</h2></div>
            <div>
              <p>合計時間：</p>
              <p>合計割合：</p>
            </div>
              <div className='flex flex-wrap m-10 gap-x-10'>
              {tasksPercentages.map((task, index) => (
                <Input key={index} label={task.label} time={task.time} onChange={(e: any) => handlePercentageChange(e, index)} />
              ))}
              </div>
          </div>
          <div>
            <div className="mb-4"><h2 className="text-2xl">工数</h2></div>
            <div>
            <p>合計時間：</p>
            </div>
            <div className='flex flex-wrap m-10 gap-x-10'>
              {tasksTimes.map((task, index) => (
                <Input key={index} label={task.label} time={task.time} onChange={(e: any) => handlePercentageChange(e, index)} />
              ))}
            </div>
          </div>
        </div>
        <div className="flex-1 w-5/12 border border-solid rounded border-black p-8">
          <div className="w-full mx-auto mt-20">
            <PieChart width={700} height={400}>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                label={({ name, value }) => `${name}：${(((value) * 100).toFixed(1))}%`}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
