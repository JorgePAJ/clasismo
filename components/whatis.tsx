import Navbar from "./navbar";
import {
  XCircleIcon,
  ChatAlt2Icon,
  BookOpenIcon,
  CogIcon,
  SpeakerphoneIcon,
  UserIcon,
  QuestionMarkCircleIcon,
  MenuIcon,
  ShieldExclamationIcon,
  ServerIcon,
  ExclamationCircleIcon,
  XIcon,
  GlobeAltIcon,
  OfficeBuildingIcon,
  LightningBoltIcon,
  MailIcon,
  ScaleIcon,
} from "@heroicons/react/outline";
const features = [
  {
    name: "Definicion",
    description:
      "El clasismo es una idea que afirma que las personas están divididas en clases sociales y que estas clases tienen diferentes derechos y obligaciones.",
    icon: BookOpenIcon,
  },
  {
    name: "Segun la RAE",
    description:
      "La actitud de quienes defienden la discriminación por motivos de pertenencia a otra clase social.",
    icon: GlobeAltIcon,
  },
  {
    name: "De donde viene?",
    description: "El clasismo es un fenómeno heredero del racismo.",
    icon: QuestionMarkCircleIcon,
  },
  {
    name: "Clasismo y racismo",
    description:
      "Clasismo y racismo pueden darse unidos, por supuesto, como romanticismo o nihilismo, pero no derivan uno de otro como se cita.",
    icon: ShieldExclamationIcon,
  },
  {
    name: "Otros casos",
    description:
      "En sectores del movimiento obrero y las izquierdas de varios países de habla hispana, la palabra clasismo suele utilizarse también en una acepción invertida.",
    icon: ExclamationCircleIcon,
  },
  {
    name: "Clasismo estructural o institucional",
    description:
      "La forma en la que el Estado y otras instituciones, tales como la escuela, el sistema económico o en otro tiempo la iglesia, logran estratificar socialmente a los habitantes de un país.",
    icon: OfficeBuildingIcon,
  },
  {
    name: "Clasismo individual",
    description:
      "Donde una persona es el objeto de la discriminación y otra es el sujeto de esta. Dicho acto está basado en una serie de estereotipos y prejuicios presentes en la propia sociedad, que el individuo adquiere como parte de su cosmovisión y sus creencias.",
    icon: UserIcon,
  },
];

export default function Whatis() {
  return (
    <div className="bg-gray-50 overflow-hidden md:h-screen">
      <Navbar />
      <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <svg
          className="absolute top-0 left-full transform -translate-x-1/2 -translate-y-3/4 lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="8b1b5f72-e944-4457-af67-0c6d15a99f38"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={784}
            fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)"
          />
        </svg>

        <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Que es el clasismo?
            </h2>
          </div>
          <dl className="mt-10 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:mt-0 lg:col-span-2">
            {features.map((feature) => (
              <div key={feature.name}>
                <dt>
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="mt-5 text-lg leading-6 font-medium text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
