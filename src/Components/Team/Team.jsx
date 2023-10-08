import { useEffect, useState } from "react";
// import TeamMember from "./TeamMember";

const Team = () => {
  const [team, setTeam] = useState([]);
  useEffect(() => {
    fetch("/team.json")
      .then((res) => res.json())
      .then((data) => setTeam(data));
  }, []);
  // console.log(team);

  return (
    <div className="bg-[#F4F4F6]">
      <div className="container mx-auto px-10 my-12 py-10">
        <h2 className="text-3xl text-center font-bold underline my-2">
          Our Team
        </h2>
        <h6 className="text-lg font-medium text-center uppercase italic">
          meet our best team
        </h6>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {team.map((teamMember) => (
            <div key={teamMember.id}>
              <div className="">
                {/* card */}
                <div className="relative flex w-96 flex-col rounded-xl bg-clip-border text-gray-700 ">
                  <div className="relative mx-4 mt-4  overflow-hidden rounded-xl  bg-clip-border text-gray-700">
                    <img
                      src={teamMember.image}
                      className="h-[150px] w-[150px] flex mx-auto rounded-full border-2 border-blue-700 object-cover "
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-2 ">
                      <h4 className="text-center text-xl font-bold">
                        {teamMember.name}
                      </h4>
                    </div>
                    <p className="block font-sans  leading-normal text-gray-700 antialiased opacity-75 text-center text-lg font-semibold">
                      {teamMember.position}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
