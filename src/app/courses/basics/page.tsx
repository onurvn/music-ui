
interface Lesson {
  title: string;
  content: string;
}

const lessons: Lesson[] = [
  {
    title: 'Introduction to Music Theory',
    content: 'This lesson covers the basics of music theory including notes, scales, and intervals.',
  },
  {
    title: 'Understanding Chords',
    content: 'Learn about different types of chords and how they are constructed.',
  },
  {
    title: 'Melody Writing Techniques',
    content: 'Discover techniques for creating memorable melodies.',
  },
];

const MusicTheoryCoursePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black py-12 pt-36  text-white flex flex-col justify-center items-center">
      <div className='flex flex-col justify-center items-start mb-4 bg-white rounded-2xl text-black p-4'>
        <h1 className="text-3xl font-bold mb-4 ">Basic Music Theory Course</h1>
        <p className="text-lg mb-4">Welcome to our Basic Music Theory Course! Below are the lessons included in this course:</p></div>
      <ul>
        {lessons.map((lesson, index) => (
          <li key={index} className="mb-8">
            <h2 className="text-2xl font-bold mb-2">{lesson.title}</h2>
            <p className="text-lg">{lesson.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MusicTheoryCoursePage;