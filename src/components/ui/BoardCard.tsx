import Image from 'next/image';
import { BoardMember } from '@/data/board';

interface BoardCardProps {
  member: BoardMember;
}

const BoardCard = ({ member }: BoardCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <div className="relative h-56 w-full">
        <Image
          src={member.image}
          alt={`Portrait of ${member.name}`}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-koaWood">{member.name}</h3>
        <p className="text-md text-oceanBlue font-semibold mt-1">{member.title}</p>
        <p className="text-gray-600 mt-4">{member.bio}</p>
      </div>
    </div>
  );
};

export default BoardCard;