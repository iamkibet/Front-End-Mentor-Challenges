const Summary = () => {
    return ( 
        <main className="flex min-h-screen flex-col items-center justify-center bg-pale-blue">
            <div className="bg-white w-[500px] rounded-lg flex">
                <aside className="gap-4 px-4 py-3 w-1/2 rounded-3xl flex flex-col justify-center items-center bg-gradient-to-b from-slate-blue-light to-slate-blue-dark">
                    <div className="text-pale-blue text-xl">Your Results </div>
                    <div className="flex w-24 h-24 flex-col items-center justify-center gap-2 rounded-full text-white bg-gradient-to-b from-violet-blue to-slate-blue-dark"><span className="text-4xl">76</span> <span className="text-gray-400 text-xs">of 100</span></div>
                    <div className="text-white text-xl">Great</div>
                    <div className="text-pale-blue text-center">You scored higher than 65% of the people who have taken this test</div>
                </aside>
                <div>

                </div>
            </div>
        </main>
     );
}
 
export default Summary;