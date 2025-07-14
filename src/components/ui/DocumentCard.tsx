import { Document } from '@/data/documents';
import Link from 'next/link';

interface DocumentCardProps {
  document: Document;
}

const DocumentCard = ({ document }: DocumentCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-palmGreen">
      <h3 className="text-xl font-bold text-koaWood mb-2">{document.title}</h3>
      <p className="text-gray-600 mb-4">{document.summary}</p>
      <Link href={document.url} target="_blank" rel="noopener noreferrer" className="text-oceanBlue hover:underline font-semibold">
        Download PDF &rarr;
      </Link>
    </div>
  );
};

export default DocumentCard;