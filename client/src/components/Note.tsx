import { FC, useEffect, useRef, useState } from 'react';
import { MdOutlineNoteAlt } from 'react-icons/md';

interface Props {}

const NOTE_OPEN_WIDTH = 'w-[500px]';
const NOTE_CLOSE_WIDTH = 'hidden';
const NOTE_VISIBILITY = 'note-visibility';

const Note: FC<Props> = (props): JSX.Element => {
  const noteRef = useRef<HTMLDivElement>(null);
  const noteIconRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const noteState = localStorage.getItem(NOTE_VISIBILITY);
    if(noteState !== null) {
      const newState = JSON.parse(noteState);
      setVisible(newState);
      toggleNav(!newState);
    } else {
      setVisible(true);
    }
  }, []);

  const toggleNav = (visibility: boolean) => {
    const { current: currentNav } = noteRef;
    if(!currentNav) return

    const { classList } = currentNav
    if(visibility) {
      // noteコンポーネントを隠す
      classList.remove(NOTE_OPEN_WIDTH);
      classList.add(NOTE_CLOSE_WIDTH);
    } else {
      classList.add(NOTE_OPEN_WIDTH);
      classList.remove(NOTE_CLOSE_WIDTH);
    }
  }

  const updateNavState = () => {
    toggleNav(visible);
    const newState = !visible;
    setVisible(newState);
    localStorage.setItem(NOTE_VISIBILITY, JSON.stringify(newState));
  }

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    const noteIcon = noteIconRef.current;

    if (noteIcon) {
      let scaleUp = true;
      intervalId = setInterval(() => {
        const scaleValue = scaleUp ? 'scale-[0.9]' : 'scale-[1]';
        noteIcon.classList.toggle(scaleValue);
        scaleUp = !scaleUp;
      }, 800);
    }

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='absolute top-6 right-0 transition z-50'>
      <div className='flex justify-end'>
        <div className='w-[42px] h-[42px]' ref={noteIconRef}>
          <MdOutlineNoteAlt
            className='transition bg-white cursor-pointer'
            size={42}
            onClick={updateNavState}
          />
        </div>

        <div ref={noteRef} className='bg-white border-2 hidden border-black w-[500px] h-[500px] rounded-md'>
          <textarea
            className='w-full h-full p-2 text-gray-800 bg-white rounded transition'
            placeholder='ここで一時的に簡単なメモを記入できます...'
          ></textarea>
        </div>
      </div>
    </div>
  )
}

export default Note;