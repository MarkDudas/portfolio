import './Skills.css';

const Skills = () => {
  return (
    <div className="flex items-center justify-center flex-col p-20 max-md:p-10 max-md:text-xs">
      {/* Original Version */}
      <div className="border-4 border-black rounded-md p-4 md:block hidden">
        <h1 className="text-center font-bold">Skills:</h1>
        <ul>
          <li>Experienced in writing use cases</li>
          <li>Proficient in SQL</li>
          <li>Fundamental skills in JMeter</li>
          <li>Basic skills in Postman</li>
          <li>Proficient in HTML, CSS, JavaScript, React</li>
        </ul>
      </div>

      {/* Shorter Version for max-md screens */}
      <div className="border-4 border-black rounded-md p-4 md:hidden block just">
        <h1 className="text-center font-bold">Skills:</h1>
        <ul className='text-center '>
          <li>SQL</li>
          <li> CSS</li>
          <li> React</li>
          <li>JMeter</li>
          <li>Postman</li>
          <li> JavaScript</li>
         
        </ul>
      </div>
    </div>
  );
};

export default Skills;
