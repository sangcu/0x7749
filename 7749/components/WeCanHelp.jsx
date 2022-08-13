import BenchmarkIcon from '../assets/benchmark.svg'
import RoadmapIcon from '../assets/roadmap.svg'
import WeWinIcon from '../assets/we-win.svg'
export default function WeCanHelp() {
  return (
    <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <li className="col-span-1 ">
          <div className="w-full flex items-center justify-between p-6 space-x-6">
            <div className="flex-1 ">
              <div className="flex items-center space-x-3">
<BenchmarkIcon/>
                <h3 className="font-semibold uppercase text-xl text-boldpink">Upskill</h3>
              </div>
              <p className="mt-1 text-gray-800 ">
Our AI Benchmark yourself to <span className='font-semibold'>1500+</span> engineers in the market to find which area to improve. Privacy first.
              </p>
            </div>
          </div>
        </li>
        <li className="col-span-1 ">
          <div className="w-full flex items-center justify-between p-6 space-x-6">
            <div className="flex-1 ">
              <div className="flex items-center space-x-3">
                <RoadmapIcon/>
                <h3 className="font-semibold uppercase text-xl text-boldpink">CAREER ROADMAP</h3>
              </div>
              <p className="mt-1 text-gray-800">
              Recommending actionable insights to refine your career roadmap based on goals.
              </p>
            </div>
          </div>
        </li>
        <li className="col-span-1 ">
          <div className="w-full flex items-center justify-between p-6 space-x-6">
            <div className="flex-1 ">
              <div className="flex items-center space-x-3">
      <WeWinIcon/>
                <h3 className="font-semibold uppercase text-xl text-boldpink">GET YOUR DREAM JOB</h3>
              </div>
              <p className="mt-1 text-gray-800 ">
              We connect you to recruiters which match your career wish and competences. Focus on your career development, we do the rest.
              </p>
            </div>
          </div>
        </li>
    </ul>
  )
}
