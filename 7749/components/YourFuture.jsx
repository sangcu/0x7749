import Worry from '../assets/worry.svg'
const heros = [
  {
    key:1,
    name: 'LOST OF CONTROL',
    title: 'Are you delegating your own career development to your company?',
  },
  {
    key:2,
    name: 'No direction',
    title: 'You don’t know what next after a few years? your career like its what is it. No plan, no strategy.',
  },
  {
    key:3,
    name: 'ANXIOUS',
    title: 'In the next 5 year, I will change my career to something else, just don’t know yet!',
  },
]

export default function YourFuture() {
  return (
    <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {heros.map((hero) => (
        <li key={hero.key} className="col-span-1 ">
          <div className="w-full flex items-center justify-between p-6 space-x-6">
            <div className="flex-1 ">
              <div className="flex items-center space-x-3">
                <Worry/>
                <h3 className="font-semibold uppercase text-xl">{hero.name}</h3>
              </div>
              <p className="mt-1 text-gray-800 ">{hero.title}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}
