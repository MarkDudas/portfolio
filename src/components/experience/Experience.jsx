const Experience = () => {
  return (
    <div className="flex items-center justify-center flex-col p-20 max-md:p-10 max-md:text-xs">
      {/* Original Version */}
      <div className="border-4 rounded-md border-black p-4 md:block hidden">
        <h1 className="text-center font-bold">Experiences:</h1>
        <ul>
          <li>Quality Assurance Intern</li>
          <li>Equitable Computer Services, Inc.</li>
          <li>Feb 2024 - May 2024</li>
          <li>
            As a QA intern, I learned several key skills including
            <br /> API Testing in Postman, Performance Testing in
            <br /> JMeter, Manual UI Testing, and Writing Test Cases.
          </li>
        </ul>
      </div>

      {/* Shorter Version for max-md screens */}
      <div className="border-4 rounded-md border-black p-4 md:hidden block">
        <h1 className="text-center font-bold">Experience:</h1>
        <ul className="text-center">
          <li>QA Intern</li>
          <li>API Testing</li>
          <li>Performance Testing</li>
           <li>UI Testing</li>
           <li>Test Cases</li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
