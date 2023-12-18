import { FunctionComponent } from 'preact';
import Gazebo from '../../assets/Gazebo.jpg';

const Resources: FunctionComponent = () => {
    return (
        <>
            <h1 className="text-center my-[1em] " >More to come ☺︎</h1>
            <div className="m-[em] mx-6">
                <div className="mx-auto max-w-[65em]">
                    <img className="" src={Gazebo} alt="Gazebo" />
                </div>
            </div>
        </>
    );
};

export default Resources;
