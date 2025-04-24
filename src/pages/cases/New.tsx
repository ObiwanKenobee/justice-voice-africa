
import { useNavigate } from 'react-router-dom';
import { CaseForm } from '@/components/cases/CaseForm';
import { casesService } from '@/services/casesService';
import { Case } from '@/types/case';

export default function NewCasePage() {
  const navigate = useNavigate();

  const handleSubmit = async (data: Partial<Case>) => {
    try {
      await casesService.createCase(data as Omit<Case, 'id' | 'created_at' | 'updated_at'>);
      navigate('/cases');
    } catch (error) {
      console.error('Error creating case:', error);
    }
  };

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">Create New Case</h1>
      <CaseForm onSubmit={handleSubmit} />
    </div>
  );
}
