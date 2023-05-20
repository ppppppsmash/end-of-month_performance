import { FC, useState } from 'react';
import './App.css';
import Title from './components/Title';
import Input from './components/Input';
import Button from './components/Button';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { isNumberOnly } from './utils/InputValidation';
import Note from './components/Note';
ChartJS.register(ArcElement, Tooltip, Legend);

const App: FC = (): JSX.Element => {
  const title = '月末稼動';

  const [errPercentageInfo, setErrPercentageInfo] = useState<string>('');
  const [errTotalOnlyInfo, setErrTotalOnlyInfo] = useState<string>('');
  const [percentageTotalTime, setPercentageTotalTime] = useState<number>(0);
  const [totalTimeOnly, setTotalTimeOnly] = useState<number>(0);

  const [graphTasksPercentages, setGraphTasksPercentages] = useState<{label: string, time: string}[]>([]);

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

  const handlePercentageChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newTime = event.target.value;
    setErrPercentageInfo(isNumberOnly(newTime));
    const inputedTask = { label: tasksPercentages[index].label, time: newTime };

    const newTasks = [...tasksPercentages];
    setTasksPercentages(newTasks);
    newTasks[index].time = newTime;

    const existingTask = graphTasksPercentages.find(task => task.label === inputedTask.label);
    if (existingTask) {
      existingTask.time = newTime;
    } else {
      graphTasksPercentages.push(inputedTask);
    }

    setGraphTasksPercentages([...graphTasksPercentages]);

    setPercentageTotalTime(newTasks.reduce((sum, task) => sum + Number(task.time), 0));
  };

  const handleTotalOnly = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newTime = event.target.value;
    setErrTotalOnlyInfo(isNumberOnly(newTime));
    const newTasks = [...tasksTimes];
    setTasksTimes(newTasks);
    newTasks[index].time = newTime;
    setTotalTimeOnly(newTasks.reduce((sum, task) => sum + Number(task.time), 0));
  };

  const datas = {
    labels: graphTasksPercentages.map((task, index) => (task.label+':  '+((parseFloat(task.time) / percentageTotalTime)*100).toFixed(1)+'%')),
    datasets: [
      {
        label: 'パーセンテージ',
        data: graphTasksPercentages.map((task, index) => (((parseFloat(task.time) / percentageTotalTime)*100).toFixed(1))),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(205, 92, 92, 0.2)',
          'rgba(192, 192, 192, 0.2)',
          'rgba(47, 79, 79, 0.2)',
          'rgba(0, 250, 154, 0.2)',
          'rgba(176, 196, 222, 0.2)',
          'rgba(25, 25, 112, 0.2)',
          'rgba(245, 245, 220, 0.2)',
          'rgba(177, 6, 58, 0.2)',
          'rgba(176, 224, 230, 0.2)',
          'rgba(225, 165, 0, 0.2)',
      ],
        borderColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(205, 92, 92, 0.2)',
          'rgba(192, 192, 192, 0.2)',
          'rgba(47, 79, 79, 0.2)',
          'rgba(0, 250, 154, 0.2)',
          'rgba(176, 196, 222, 0.2)',
          'rgba(25, 25, 112, 0.2)',
          'rgba(245, 245, 220, 0.2)',
          'rgba(177, 6, 58, 0.2)',
          'rgba(176, 224, 230, 0.2)',
          'rgba(225, 165, 0, 0.2)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const handlePercentageReset = () => {
    setTasksPercentages(tasksPercentages.map(task => ({ ...task, time: '' })))
    setPercentageTotalTime(0)
    setGraphTasksPercentages([])
  };

  const handleTimeOnlyReset = () => {
    setTasksTimes(tasksTimes.map(task => ({ ...task, time: '' })))
    setTotalTimeOnly(0)
  };

  return (
    <div className="relative font-ibm">
      <Note />
      <Title title={title} />
      <div className="lg:flex block flex-wrap w-full lg:space-x-4 items:center px-20">
        <div className="flex-1 lg:w-5/12 w-full border-4 border-solid rounded border-black px-6 py-8 overflow-x-none h-[88vh] overflow-y-scroll shadow-inner scrollbar-thin dark:scrollbar-thumb-black dark:scrollbar-track-gray-200">
          <div className="bg-white mb-12 border-2 border-solid border-black rounded p-6">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-2xl decoration-4"><span className='underline'>業務割合入力</span><small className='text-[12px] text-gray-600'>　※単位:Hour</small></h2>
              <Button name="工数リセット" onClick={handlePercentageReset} />
            </div>
            <div className='my-5'>
              {errPercentageInfo ? <p className="text-base text-error">{errPercentageInfo}</p> : <p className='text-white font-semibold'><span className='bg-black p-2'>合計時間： {formatTime(percentageTotalTime)}</span></p>}
            </div>
            <div className='flex flex-wrap'>
            {tasksPercentages.map((task, index) => (
              <Input key={index} label={task.label} time={task.time} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handlePercentageChange(e, index)} />
            ))}
            </div>
          </div>
          <div className="bg-white mb-12 border-2 border-solid border-black rounded p-6">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-2xl decoration-4"><span className='underline'>保険関連業務工数入力</span><small className='text-[12px] text-gray-600'>　※単位:Hour</small></h2>
              <Button name="工数リセット" onClick={handleTimeOnlyReset} />
            </div>
            <div className='my-5'>
            {errTotalOnlyInfo ? <p className="text-base text-error">{errTotalOnlyInfo}</p> : <p className='text-white font-semibold'><span className='bg-black p-2'>合計時間： {formatTime(totalTimeOnly)}</span></p>}
            </div>
            <div className='flex flex-wrap'>
              {tasksTimes.map((task, index) => (
                <Input key={index} label={task.label} time={task.time} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleTotalOnly(e, index)} />
              ))}
            </div>
          </div>
        </div>
        <div className="flex-1 lg:w-5/12 w-full border-4 border-solid rounded border-black p-8 lg:mt-0 mt-8">
          <h2 className="mb-4 text-2xl decoration-4"><span className='underline'>円グラフ</span><small className='text-[12px] text-gray-600'>　※業務割合</small></h2>
          <div className="bg-white w-[75%] mx-auto mt-8 border border-dashed border-black rounded">
            {datas.datasets[0].data.length ? <Pie data={datas} /> : <p className="h-[70vh] flex justify-center items-center text-gray-400">入力された数字に応じてグラフを生成する</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
