const Project=()=>{
    const project=[{
        name:'School Admin Desktop App',
        note:`I made a school admin desktop application for Meved Model School.
            I build features that could store student,teachers and result data for the school
            and also integrating image capture for student identity.`,
        technology:['NativePhp', 'React', 'Php', 'Sql' ]
    },
    {
        name:'Terminal ATM Machine [Self Project]',
        note:`This Project was a terminal atm mechine that operate as an atm mechine that involves
        features like withdrawal, tranfer, account balance and creating of account.`,
        technology:['Java']
    },
    {
        name:'EasyWeb [Self Project]',
        note:'EasyWeb is a desktop application tool for web development with template or code.',
        technology:['Java', 'JavaFx']
    },
    {
        name:'Uragent limited',
        note:`Worked with Uragent team to build urgent app and web application, using 
        both frontend and backend technologies.`,
        technology:['React', 'React Native', 'Laravel']
    }
]
    return (
        <div id="projects" className="p-2 "> 
        <h1 className="text-white text-bold text-2xl p-1">Project</h1>
            <ul className=" p-1 rounded-lg list-square lg:flex lg:flex-wrap lg:justify-center">
                {project.map((pro,index)=>(
                    <li key={index} className="border border-green-500 p-4 lg:w-1/4 bg-gray-800 shadow-lg rounded-lg m-1 h-56">
                        <h1 className="text-bold text-lg text-white">{pro.name}</h1>
                        <p className="text-sm mt-1 text-gray-400">{pro.note}</p>
                        <div>
                            {pro.technology.map((tech,index)=>(
                            <span key={index} className="text-sm m-1 underline text-pink-500">{tech}</span>
                            ))}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Project;