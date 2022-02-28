import StopWatch from "../Components/StopWatch/StopWatch";

const Treadmill = () => {
    return(
        <div className={"text-center"}>
            <h1><span className="material-icons-outlined">run_circle</span> Treadmill Page</h1>
            <StopWatch/>
        </div>
    );
};

export default Treadmill;