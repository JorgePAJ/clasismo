/* This example requires Tailwind CSS v2.0+ */
const people = [
  {
    name: "Jorge Plasencia",
    role: "Web Developer",
    imageUrl: "https://i.ibb.co/kH7FZvZ/instadp-jorge-plasencia-full-size.jpg",
  },
  {
    name: "Oscar Orozco",
    role: "Research Lead",
    imageUrl:
      "https://i.ibb.co/cF60Fw2/441b5c88-796b-4255-afe3-a24510d7a598.jpg",
  },
  {
    name: "Luis Chamorro",
    role: "Design Lead",
    imageUrl:
      "https://i.ibb.co/Rht8qwF/a0e4d479-b915-4441-9739-d3ec0d915166.jpg",
  },
];

export default function Who() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-8 sm:space-y-12">
          <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Quienes somos
            </h2>
            <p className="text-xl text-gray-500">
              El equipo dedicado al rechazo total de la cultura clasista
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-6"
          >
            {people.map((person) => (
              <li key={person.name}>
                <div className="space-y-4">
                  <img
                    className="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24 object-cover"
                    src={person.imageUrl}
                    alt=""
                  />
                  <div className="space-y-2">
                    <div className="text-xs font-medium lg:text-sm">
                      <h3>{person.name}</h3>
                      <p className="text-indigo-600">{person.role}</p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
