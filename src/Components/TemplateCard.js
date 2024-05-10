import React from 'react';

const TemplateCard = ({ template, visible, handleVisible, setTemp,setChoice}) => {
    const workouts = template.workouts;

    return (
        <div className="rounded-3xl mt-4 ring-1 p-5 ring-gray-700 w-64 h-fit drop-shadow-lg drop-shadow-white lg:mr-4 hover:bg-violet-400 hover:text-black" onClick={() => {
          setTemp(template);
          setChoice(1);
        }}>
            <div className='flex justify-between w-full bg-inherit'>
                <h3 id="tier-startup" className="text-2xl font-bold leading-8 text-white bg-inherit">{template.templateName}</h3>
            </div>
            <p className="mt-1 text-sm leading-6 text-violet-400 bg-inherit">{template.createdAt.slice(0, 10)}</p>
            <ul role="list" className="leading-6 bg-inherit">
                {workouts.map((workout, index) => (
                    <li key={index} className="mt-1 text-justify bg-inherit">
                        <div className='flex justify-between bg-inherit'>
                            <span className='text-violet-400 text-lg font-bold bg-inherit'>{workout.name}</span>
                            <span className="text-white text-md font-semi-bold bg-inherit">Sets: <span className='text-violet-400 font-bold bg-inherit'>{workout.sets}</span></span>
                        </div>
                    </li>
                ))}
            </ul>

           
            <style jsx>{`
                .rounded-3xl:hover * {
                    color: white !important;
                }
            `}</style>
        </div>
    );
};

export default TemplateCard;
