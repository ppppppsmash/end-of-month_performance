import { FC, useEffect, useRef, useState } from 'react';
import { MdOutlineNoteAlt } from 'react-icons/md';

interface Props {}

const NOTE_OPEN_WIDTH = 'w-[450px]';
const NOTE_CLOSE_WIDTH = 'hidden';
const NOTE_VISIBILITY = 'note-visibility';

const Note: FC<Props> = (props): JSX.Element => {
  const noteRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

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
    const noteState = localStorage.getItem(NOTE_VISIBILITY);
    if(noteState !== null) {
      const newState = JSON.parse(noteState);
      setVisible(newState);
      toggleNav(!newState);
    } else {
      setVisible(true);
    }
  }, []);

  return (
    <div className='absolute top-6 right-0 transition z-50'>
      <div className='flex justify-end'>
        <div>
          <MdOutlineNoteAlt
            className='transition hover:scale-[0.9] bg-white cursor-pointer'
            size={36}
            onClick={updateNavState}
        />
        </div>

        <div ref={noteRef}className='bg-white border-2 hidden border-black w-[450px] h-[450px] rounded-md'>
          <textarea
            className='w-full h-full p-2 text-gray-800 bg-white rounded transition'
            placeholder='何かを記入できる...'
          ></textarea>
        </div>
      </div>
    </div>
  )
}

export default Note;