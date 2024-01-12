import memoryIcon from '../assets/images/icon-memory.svg';
import reactionIcon from '../assets/images/icon-reaction.svg';
import verbalIcon from '../assets/images/icon-verbal.svg';
import visualIcon from '../assets/images/icon-visual.svg';

const Summary = () => {
    return ( 
        <main className="flex min-h-screen flex-col items-center justify-center bg-pale-blue">
            <div className="bg-white h-[350px] w-[500px] rounded-lg flex">
                <aside className="gap-4 px-4 py-3 w-1/2 rounded-3xl flex flex-col justify-between items-center bg-gradient-to-b from-slate-blue-light to-slate-blue-dark">
                    <div className="text-pale-blue text-xl">Your Results </div>
                    <div className="flex w-32 h-32 flex-col items-center justify-center gap-2 rounded-full text-white bg-gradient-to-b from-violet-blue to-slate-blue-dark"><span className="text-5xl font-bold">76</span> <span className="text-gray-400 text-xs">of 100</span></div>
                    <div className="text-white text-xl">Great</div>
                    <div className="text-pale-blue text-center text-sm">You scored higher than 65% of the people who have taken this test</div>
                </aside>
                <div className="px-6 py-4 w-1/2">
                    <h1 className="font-bold p-3">Summary</h1>
                    <ul className='flex flex-col gap-3'>
                        <li className='flex bg-[#F55]/15 justify-between px-2 py-2 rounded-lg items-center'>
                            <div className='flex gap-2'>
                                <img src={reactionIcon} alt="" />
                                <span className="text-[#F55] text-sm">Reaction</span>
                            </div>
                            <div className='text-sm'>
                                <span className='text-black font-bold'>90</span>
                                <span className='text-gray-500'> / 100</span>
                            </div>
                        </li>
                        <li className='flex bg-[#FFB21E]/15 justify-between px-2 py-2 rounded-lg items-center'>
                            <div className='flex gap-2'>
                                <img src={memoryIcon} alt="" />
                                <span className="text-[#FFB21E] text-sm">Memory</span>
                            </div>
                            <div className='text-sm'>
                                <span className='text-black'>76</span>
                                <span className='text-gray-500'> / 100</span>
                            </div>
                        </li>
                        <li className='flex bg-[#00BB8F]/15 justify-between px-2 py-2 rounded-lg items-center'>
                            <div className='flex gap-2'>
                                <img src={verbalIcon} alt="" />
                                <span className="text-[#00BB8F] text-sm">Verbal</span>
                            </div>
                            <div className='text-sm'>
                                <span className='text-black'>69</span>
                                <span className='text-gray-500'> / 100</span>
                            </div>
                        </li>
                        <li className='flex bg-[#1125D6]/15 justify-between px-2 py-2 rounded-lg items-center'>
                            <div className='flex gap-2'>
                                <img src={visualIcon} alt="" />
                                <span className="text-[#1125D6] text-sm">Visual</span>
                            </div>
                            <div className='text-sm'>
                                <span className='text-black'>66</span>
                                <span className='text-gray-500'> / 100</span>
                            </div>
                        </li>
                    </ul>
                    <button className="mt-5 w-full bg-dark-blue text-white px-4 py-2 rounded-2xl text-sm">Continue</button>
                </div>
            </div>
        </main>
     );
}
 
export default Summary;