import { Program } from '@/data/programs';
import Link from 'next/link';

interface ProgramCardProps {
  program: Program;
}

const ProgramCard = ({ program }: ProgramCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between h-full transform hover:-translate-y-2 transition-transform duration-300">
      <div>
        <h3 className="text-xl font-bold text-koaWood mb-2">{program.title}</h3>
        <p className="text-gray-600">{program.description}</p>
      </div>
      <div className="mt-6">
        <Link href={`/programs/${program.slug}`} className="text-oceanBlue hover:underline font-semibold">
          Learn More &rarr;
        </Link>
      </div>
    </div>
  );
};

export default ProgramCard;