
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CaseForm } from '@/components/cases/CaseForm';
import { casesService } from '@/services/casesService';
import { Case } from '@/types/case';

export default function EditCasePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [caseData, setCaseData] = useState<Case | null>(null);

  useEffect(() => {
    if (id) {
      loadCase(id);
    }
  }, [id]);

  const loadCase = async (caseId: string) => {
    try {
      const data = await casesService.getCaseById(caseId);
      setCaseData(data);
    } catch (error) {
      console.error('Error loading case:', error);
      navigate('/cases');
    }
  };

  const handleSubmit = async (data: Partial<Case>) => {
    try {
      if (id) {
        await casesService.updateCase(id, data);
        navigate('/cases');
      }
    } catch (error) {
      console.error('Error updating case:', error);
    }
  };

  if (!caseData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">Edit Case</h1>
      <CaseForm initialData={caseData} onSubmit={handleSubmit} />
    </div>
  );
}
