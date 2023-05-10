import { FC, useState } from 'react';
import './App.css';
import { PieChart, Pie, Legend, Tooltip, Cell } from 'recharts';
import Title from './components/Title';
import Input from './components/Input';

const App: FC = (): JSX.Element => {
  const title = '月末稼動レポート';

  const [tasksPercentages, setTasksPercentages] = useState([
    { label: '車買取', time: '' },
    { label: 'マネーフィックス', time: '' },
    { label: 'エネルギー', time: '' },
    { label: '車販売', time: '' },
    { label: '火災保険（ネット型）', time: '' },
    { label: '通信制高校', time: '' },
    { label: '廃車ツヨシ', time: '' },
    { label: '自動車保険（楽天IP）', time: '' },
    { label: 'ピアノ買取', time: '' },
    { label: '自動車保険', time: '' },
    { label: 'メルマガ・他', time: '' },
    { label: '不動産売却', time: '' },
    { label: '自動車保険法人', time: '' },
    { label: '引越し', time: '' },
    { label: '結婚', time: '' },
    { label: '生命保険', time: '' },
    { label: 'Living', time: '' },
    { label: 'セキュリティ', time: '' },
    { label: 'ペット保険', time: '' },
    { label: '引越しOSS', time: '' },
    { label: '老人ホーム', time: '' },
    { label: '火災保険', time: '' },
    { label: '引越し大手', time: '' },
    { label: '宅配ごはん', time: '' },
    { label: '保険相談ナビ', time: '' },
    { label: '生活ストック', time: '' },
    { label: 'たのめーる', time: '' },
    { label: 'カードローン', time: '' },
    { label: '電気LP', time: '' },
    { label: '補聴器', time: '' },
    { label: '全社共通', time: '' },
  ]);

  const [totalTime, setTotalTime] = useState<number>(0);
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const datas = tasksPercentages.map((task, index) => ({
    name: task.label,
    value: parseFloat(task.time),
    color: COLORS[index % COLORS.length],
  }));

  const dataTest = ()  => {
    datas.map((data) => {
      if(!data.value) {
        data.name = ''
      }
      return data
    })
  }


  console.log(tasksPercentages)

  const testData: {label: string, time: string}[] = [];

  const handlePercentageChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newTime = event.target.value;

    const newTask = { label: tasksPercentages[index].label, time: newTime }
    const newTasks = [...tasksPercentages];
    newTasks[index].time += newTask.time;
    //newTasks[index].time = newTime;
    // setTasksPercentages((prevTasks) =>
    //   prevTasks.map((task, i) => {
    //     if (i === index) {
    //       return { ...task, time: newTime };
    //     }
    //     return task;
    //   })
    // );
    setTasksPercentages(newTasks);
    console.log(newTasks)
    setTotalTime(newTasks.reduce((sum, task) => sum + Number(task.time), 0));
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
  ]);

  const formatTime = (time: number): string => {
    const hours = Math.floor(time);
    const minutes = Math.round((time - hours) * 60);
    return `${hours}時間${minutes}分`;
  };

  return (
    <div>
      <Title title={title} />
      <div className="flex flex-wrap w-full space-x-4 items:center mt-8 px-6">
        <div className="flex-1 w-5/12 border border-solid rounded border-black px-6 py-8 overflow-x-none h-[90vh] overflow-y-scroll">
          <div className="mb-12 border border-solid border-black rounded p-6">
            <div className="mb-4"><h2 className="text-2xl">業務割合</h2></div>
            <div>
              <p>合計時間：{formatTime(totalTime)}</p>
            </div>
            <div className='flex flex-wrap'>
            {tasksPercentages.map((task, index) => (
              <Input key={index} label={task.label} time={task.time} onChange={(e: any) => handlePercentageChange(e, index)} />
            ))}
            </div>
          </div>
          <div className="mb-12 border border-solid border-black rounded p-6">
            <div className="mb-4"><h2 className="text-2xl">工数</h2></div>
            <div>
            <p>合計時間：</p>
            </div>
            <div className='flex flex-wrap'>
              {tasksTimes.map((task, index) => (
                <Input key={index} label={task.label} time={task.time} onChange={(e: any) => {}} />
              ))}
            </div>
          </div>
        </div>
        <div className="flex-1 w-5/12 border border-solid rounded border-black p-8">
          <div className="w-full mx-auto mt-20">
            <PieChart width={700} height={400}>
              { datas.map((data, index) => {
                if(isNaN(data.value)) {
                  console.log(data)
                  //datas.splice(index, 1);
                }
              }) &&
              <Pie
                data={datas}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                label={({ name, value }) =>
                  `${name}：${(((value / totalTime) * 100).toFixed(1))}%`
                }
              >
                {datas.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              }
            </PieChart>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
